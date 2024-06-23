const getAssetUrl = (asset: any) => {
  return `https:${asset?.fields?.file?.url}`;
};

export default getAssetUrl;
