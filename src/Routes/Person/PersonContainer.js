import React, { useEffect } from "react";
import PersonPresenter from "./PersonPresenter";
import { useDispatch, useSelector } from "react-redux";
import {
  loadPersonDetail,
  loadPersonMovieCredit,
  loadPersonTVCredit,
} from "../../reducers/person";
const PersonContainer = ({ match, history: { push } }) => {
  const dispatch = useDispatch();
  const {
    info,
    movie,
    tv,
    isInfoLoading,
    isMovieLoading,
    isTVLoading,
  } = useSelector((state) => state.person);
  useEffect(() => {
    const {
      params: { id },
    } = match;
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) return push("/");
    dispatch(
      loadPersonDetail({
        id: parsedId,
      })
    );
    dispatch(
      loadPersonMovieCredit({
        id: parsedId,
      })
    );
    dispatch(
      loadPersonTVCredit({
        id: parsedId,
      })
    );
  }, [match, push, dispatch]);
  return (
    <PersonPresenter
      info={info || {}}
      movie={movie || []}
      tv={tv || []}
      infoLoading={isInfoLoading}
      movieLoading={isMovieLoading}
      tvLoading={isTVLoading}
    />
  );
};
export default PersonContainer;
