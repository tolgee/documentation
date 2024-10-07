export const appendScript = (
  url?: string,
  defer = true,
  dataset: DOMStringMap = {},
  innerHTML?: string
) => {
  const script = document.createElement('script');
  if (url) {
    script.src = url;
  }
  script.defer = defer;
  script.async = true;
  script.innerHTML = innerHTML;

  document.head.append(script);
  return () => {
    document.head.removeChild(script);
  };
};
