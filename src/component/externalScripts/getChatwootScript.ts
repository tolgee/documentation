export const getChatwootScript = (chatwootToken: string, darkMode: boolean) => {
  return `(function(d,t) {
        var BASE_URL="https://app.chatwoot.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        window.chatwootSettings = {
          darkMode: '${darkMode ? 'auto' : 'light'}',
        };
        g.onload=function(){
          window.chatwootSDK.run({
            websiteToken: '${chatwootToken}',
            baseUrl: BASE_URL
          })
        }
      })(document,"script");`;
};
