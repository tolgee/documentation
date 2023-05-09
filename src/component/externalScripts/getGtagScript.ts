export const getGtagScript = (trackingId: string) => {
  return `
    window.dataLayer = window.dataLayer || [];

    window.gtag = function (){
      dataLayer.push(arguments);
    }

    gtag('consent', 'default', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted',
      'wait_for_update': 500  
    });

    gtag('js', new Date());

    if(typeof window.onGtagLoaded === 'function'){
      window.onGtagLoaded();
    }

    gtag('config', '${trackingId}');
  `;
};
