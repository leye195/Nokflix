import React, { useEffect } from "react";
import SeasonPresenter from "./SeasonPresenter";
import { useDispatch, useSelector } from "react-redux";
import { loadSeason } from "../../reducers/season";
const SeasonContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { season, isLoadingSeason } = useSelector((state) => state.season);
  useEffect(() => {
    const {
      params: { id, season },
    } = match;
    const parsedId = parseInt(id, 10),
      parsedSeason = parseInt(season, 10);
    dispatch(
      loadSeason({
        id: parsedId,
        season: parsedSeason,
      })
    );
  }, [dispatch, match]);
  return <SeasonPresenter season={season} isLoadingSeason={isLoadingSeason} />;
};
export default SeasonContainer;
