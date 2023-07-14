export const getGtagScript = (trackingId: string) => {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${trackingId}');
  `;
};
