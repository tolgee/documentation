/* eslint-disable */
/**
 * This script replaces all png images in SVG and replaces them with images of specified width
 *
 * Usage: ts-node scripts/optimizeSvg.ts <inputSvg> <targetWidth> <outputSvg>
 */
import imagemagick from 'imagemagick';
import fs from 'fs';

const svgPath = process.argv[2];
const targetWith = process.argv[3];
const output = process.argv[4] || svgPath;

const convert = (base64str: string) =>
  new Promise((resolve, reject) => {
    const data = atob(base64str);
    imagemagick.resize(
      {
        width: Number(targetWith),
        srcData: data,
      },
      (err, result) => {
        if (err) {
          reject(new Error(err));
        }
        fs.writeFileSync(output, result);
        resolve(btoa(result));
      }
    );
  });

(async () => {
  const image = fs.readFileSync(svgPath);
  const svg = image.toString('utf-8');
  const newSvg = await replaceAsync(
    svg,
    /data:image\/png;base64,([^"]+)"/g,
    async (match, img) => {
      const newBase64 = await convert(img);
      // const newBase64 = "";
      return `data:image/png;base64,${newBase64}"`;
    }
  );
  fs.writeFileSync(output, newSvg);
})();

function replaceAsync(str, re, callback) {
  str = String(str);
  var parts = [],
    i = 0;
  if (Object.prototype.toString.call(re) == '[object RegExp]') {
    if (re.global) re.lastIndex = i;
    var m;
    while ((m = re.exec(str))) {
      var args = m.concat([m.index, m.input]);
      parts.push(str.slice(i, m.index), callback.apply(null, args));
      i = re.lastIndex;
      if (!re.global) break; // for non-global regexes only take the first match
      if (m[0].length == 0) re.lastIndex++;
    }
  } else {
    re = String(re);
    i = str.indexOf(re);
    parts.push(str.slice(0, i), callback.apply(null, [re, i, str]));
    i += re.length;
  }
  parts.push(str.slice(i));
  return Promise.all(parts).then(function (strings) {
    return strings.join('');
  });
}
