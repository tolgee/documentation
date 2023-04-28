export const getGtagScript = (trackingId: string) => {
  return `
    window.dataLayer = window.dataLayer || [];

    window.gtag = function (){
      dataLayer.push(arguments);
    }

    gtag('js', new Date());

    if(typeof window.onGtagLoaded === 'function'){
      window.onGtagLoaded();
    }

    gtag('config', '${trackingId}');
  `;
};
