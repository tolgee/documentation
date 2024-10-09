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
  Object.entries(dataset).forEach(([key, value]) => {
    script.dataset[key] = value;
  });
  script.defer = defer;
  script.async = true;
  if (innerHTML) {
    script.innerHTML = innerHTML;
  }
  document.head.append(script);
  return () => {
    document.head.removeChild(script);
  };
};
