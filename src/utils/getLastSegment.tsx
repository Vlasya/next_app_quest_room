const getLastSegment = (url: string) => {
  return url.substring(url.lastIndexOf('/') + 1);
};

 
export default getLastSegment