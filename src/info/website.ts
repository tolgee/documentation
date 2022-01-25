import { WithContext, WebSite } from "schema-dts";
import base from './organization'


const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  description: base.description,
  name: base.name,
  url: base.url,
  image: base.image,
  sameAs: base.sameAs,
} as const;

// ensure that it's correct type
<WithContext<WebSite>>website;

export default website;
