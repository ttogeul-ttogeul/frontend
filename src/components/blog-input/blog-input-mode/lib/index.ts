export const normalizeHttps = (url: string): string => {
  return url.replace(/^HTTPS:/i, "https:");
};
