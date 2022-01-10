export const appendScript = (url: string, defer: boolean = true) => {
  const script = document.createElement("script");
  script.src = url;
  script.defer = defer;
  script.async = true;
  document.head.append(script);
  return () => {
    document.head.removeChild(script);
  };
};
