import React, { useState, useEffect, useCallback } from "react";
import TVPresenter from "./TVPresenter";
import { useDispatch, useSelector } from "react-redux";
import { loadTopRatedTV, loadAiringTV, loadPopularTV } from "../../reducers/tv";
const TVContainer = () => {
  const dispatch = useDispatch();
  const [airingPage, setAiringPage] = useState(1);
  const [popularPage, setPopularPage] = useState(1);
  const [topRatedPage, setTopRatedPage] = useState(1);
  const {
    tvPopular,
    topRatedTV,
    airingToday,
    isTopRatedTVLoading,
    isTVPopularLoading,
    isAiringTodayLoading,
  } = useSelector((state) => state.tv);
  useEffect(() => {
    dispatch(
      loadPopularTV({
        page: 1,
      })
    );
    dispatch(
      loadTopRatedTV({
        page: 1,
      })
    );
    dispatch(
      loadAiringTV({
        page: 1,
      })
    );
  }, [dispatch]);
  //console.log(airingToday);
  const handleMore = useCallback(
    (type) => (page) => () => {
      console.log(type, page);
      if (type === "airing") {
        dispatch(
          loadAiringTV({
            page: page + 1,
          })
        );
        setAiringPage(page + 1);
      } else if (type === "topRated") {
        dispatch(
          loadTopRatedTV({
            page: page + 1,
          })
        );
        setTopRatedPage(page + 1);
      } else if (type === "popular") {
        dispatch(
          loadPopularTV({
            page: page + 1,
          })
        );
        setPopularPage(page + 1);
      }
    },
    [dispatch]
  );
  return (
    <TVPresenter
      popular={tvPopular}
      topRated={topRatedTV}
      airingToday={airingToday}
      isTVPopularLoading={isTVPopularLoading}
      isTopRatedTVLoading={isTopRatedTVLoading}
      isAiringTodayLoading={isAiringTodayLoading}
      airingPage={airingPage}
      topRatedPage={topRatedPage}
      popularPage={popularPage}
      handleMore={handleMore}
    />
  );
};

export default TVContainer;
