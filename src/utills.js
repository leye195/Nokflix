export const trimText = (text, limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;
export const getImage = (path) => `https://image.tmdb.org/t/p/w500${path}`;
