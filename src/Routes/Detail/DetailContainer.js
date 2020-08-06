import React, { useEffect, useState, useCallback } from "react";
import DetailPresenter from "./DetailPresenter";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMovieDetail,
  loadMovieCredits,
  loadMovieRecommendation,
  loadMovieScoreDistribution,
} from "../../reducers/movie";
import {
  loadTVDetail,
  loadTVCredits,
  loadTVRecommendation,
  loadTVScoreDistribution,
} from "../../reducers/tv";
const DetailContainer = ({ match, history: { push } }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [selected, setSelected] = useState(0);
  const [toggleOverlay, setToggleOverlay] = useState(false);
  const [videoKey, setVideoKey] = useState("");
  const {
    info: movieInfo,
    isInfoLoading: isMovieLoading,
    movieCast,
    movieCrew,
    recommendations: movieRecommendations,
    scoreDistribution: movieScoreDistribution,
  } = useSelector((state) => state.movie);
  const {
    info: tvInfo,
    isInfoLoading: isTVLoading,
    tvCast,
    tvCrew,
    recommendations: tvRecommendations,
    scoreDistribution: tvScoreDistribution,
  } = useSelector((state) => state.tv);
  useEffect(() => {
    const { path, params } = match;
    //console.log(match);
    const parsedId = parseInt(params.id, 10);
    if (isNaN(parsedId)) return push("/");
    if (path && path.includes("movie")) {
      dispatch(
        loadMovieDetail({
          id: parsedId,
        })
      );
      dispatch(loadMovieCredits({ id: parsedId }));
      dispatch(loadMovieRecommendation({ id: parsedId }));
      dispatch(loadMovieScoreDistribution({ id: parsedId }));
      setType("movie");
    } else if (path && path.includes("tv")) {
      dispatch(
        loadTVDetail({
          id: parsedId,
        })
      );
      dispatch(loadTVCredits({ id: parsedId }));
      dispatch(loadTVRecommendation({ id: parsedId }));
      dispatch(loadTVScoreDistribution({ id: parsedId }));
      setType("tv");
    } /*else if (path && path.includes("tv") && path.includes("season")) {
      dispatch();
    }*/
  }, [dispatch, match, push]);
  const handleSelected = useCallback(
    (idx) => (e) => {
      setSelected(idx);
    },
    []
  );
  const handleToggle = useCallback(
    (key) => () => {
      setVideoKey(key);
      setToggleOverlay(!toggleOverlay);
    },
    [toggleOverlay]
  );
  return (
    <DetailPresenter
      info={type === "movie" ? movieInfo : tvInfo}
      cast={type === "movie" ? movieCast : tvCast}
      crew={type === "movie" ? movieCrew : tvCrew}
      recommendations={
        type === "movie" ? movieRecommendations : tvRecommendations
      }
      loading={type === "movie" ? isMovieLoading : isTVLoading}
      handleSelected={handleSelected}
      handleToggle={handleToggle}
      selected={selected}
      toggleOverlay={toggleOverlay}
      videoKey={videoKey}
      type={type}
      seriesData={
        type === "movie" ? movieScoreDistribution : tvScoreDistribution
      }
    />
  );
};

export default DetailContainer;
