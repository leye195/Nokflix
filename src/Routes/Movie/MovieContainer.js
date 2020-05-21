import React, { useEffect, useCallback, useState } from "react";
import MoviePresenter from "./MoviePresenter";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMovieNow,
  loadMovieUpcoming,
  loadPopularMovie,
  loadTopRatedMovie,
} from "../../reducers/movie";

const MovieContainer = () => {
  const [nowPlayingPage, setNowPlayingPage] = useState(1);
  const [upComingPage, setUpComingPage] = useState(1);
  const [popularPage, setPopularPage] = useState(1);
  const [topRatedPage, setTopRatedPage] = useState(1);

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
    dispatch(
      loadMovieNow({
        page: 1,
      })
    );
    dispatch(
      loadMovieUpcoming({
        page: 1,
      })
    );
    dispatch(
      loadPopularMovie({
        page: 1,
      })
    );
    dispatch(
      loadTopRatedMovie({
        page: 1,
      })
    );
  }, [dispatch]);
  //console.log(movieNowPlaying);
  const handleMore = useCallback(
    (type) => (page) => () => {
      console.log(type, page);
      if (type === "nowPlaying") {
        dispatch(
          loadMovieNow({
            page: page + 1,
          })
        );
        setNowPlayingPage(page + 1);
      } else if (type === "upComing") {
        dispatch(
          loadMovieUpcoming({
            page: page + 1,
          })
        );
        setUpComingPage(page + 1);
      } else if (type === "topRated") {
        dispatch(
          loadTopRatedMovie({
            page: page + 1,
          })
        );
        setTopRatedPage(page + 1);
      } else if (type === "popular") {
        dispatch(
          loadPopularMovie({
            page: page + 1,
          })
        );
        setPopularPage(page + 1);
      }
    },
    [dispatch]
  );
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
      nowPlayingPage={nowPlayingPage}
      upComingPage={upComingPage}
      popularPage={popularPage}
      topRatedPage={topRatedPage}
      handleMore={handleMore}
    />
  );
};

export default MovieContainer;
