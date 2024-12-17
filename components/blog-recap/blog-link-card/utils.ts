export const removeProtocol = (url: string) => {
  return url.replace(/^https?:\/\//, "");
};
