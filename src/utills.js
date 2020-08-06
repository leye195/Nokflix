import axios from "axios";

export const trimText = (text, limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;

export const getImage = (path) => `https://image.tmdb.org/t/p/w500${path}`;

export const getMovieSeriesDataURL = (id) =>
  `https://cors-anywhere.herokuapp.com/https://www.themoviedb.org/movie/${id}/remote/rating/details?translate=false&language=en-US&locale=en-US`;
export const getTVSeriesDataURL = (id) =>
  `https://cors-anywhere.herokuapp.com/https://www.themoviedb.org/tv/${id}/remote/rating/details?translate=false&language=en-US&locale=en-US`;
export const getSeriesData = async (id) => {
  const url = `https://cors-anywhere.herokuapp.com/https://www.themoviedb.org/movie/${id}/remote/rating/details?translate=false&language=en-US&locale=en-US`;
  try {
    const { data } = await axios.get(url);
    const extractSeries =
      data
        .split(" ")
        .filter((v) => v.startsWith("[") && v.includes("doc_count"))[0] || [];
    const seriesData = JSON.parse(
      extractSeries.slice(0, extractSeries.length - 2)
    );
    return seriesData || [];
  } catch (e) {
    console.log(e);
  }
};
