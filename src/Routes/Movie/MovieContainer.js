import React, { useEffect } from "react";
import MoviePresenter from "./MoviePresenter";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMovieNow,
  loadMovieUpcoming,
  loadPopularMovie,
  loadTopRatedMovie,
} from "../../reducers/movie";

const MovieContainer = () => {
  const dispatch = useDispatch();
  const {
    movieNowPlaying,
    upComingMovie,
    moviePopular,
    topRatedMovie,
    isMovieNowLoading,
    isUpcomingLoading,
    isTopRatedMovieLoading,
    isMoviePopularLoading,
  } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(loadMovieNow());
    dispatch(loadMovieUpcoming());
    dispatch(loadPopularMovie());
    dispatch(loadTopRatedMovie());
  }, [dispatch]);
  //console.log(movieNowPlaying);
  return (
    <MoviePresenter
      nowPlaying={movieNowPlaying}
      nowPlayingLoading={isMovieNowLoading}
      upComing={upComingMovie}
      upComingLoading={isUpcomingLoading}
      popular={moviePopular}
      popularLoading={isMoviePopularLoading}
      topRated={topRatedMovie}
      topRatedLoading={isTopRatedMovieLoading}
    />
  );
};

export default MovieContainer;
