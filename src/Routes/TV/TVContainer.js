import React, { useEffect } from "react";
import TVPresenter from "./TVPresenter";
import { useDispatch, useSelector } from "react-redux";
import { loadTopRatedTV, loadAiringTV, loadPopularTV } from "../../reducers/tv";
const TVContainer = () => {
  const dispatch = useDispatch();
  const {
    tvPopular,
    topRatedTV,
    airingToday,
    isTopRatedTVLoading,
    isTVPopularLoading,
    isAiringTodayLoading,
  } = useSelector((state) => state.tv);
  useEffect(() => {
    dispatch(loadPopularTV());
    dispatch(loadTopRatedTV());
    dispatch(loadAiringTV());
  }, [dispatch]);
  //console.log(airingToday);
  return (
    <TVPresenter
      popular={tvPopular}
      topRated={topRatedTV}
      airingToday={airingToday}
      isTVPopularLoading={isTVPopularLoading}
      isTopRatedTVLoading={isTopRatedTVLoading}
      isAiringTodayLoading={isAiringTodayLoading}
    />
  );
};

export default TVContainer;
