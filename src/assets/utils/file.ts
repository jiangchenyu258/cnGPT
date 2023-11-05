export const getAssetsFile = (prop: string) => {
  return new URL(prop, import.meta.url).href;
};
