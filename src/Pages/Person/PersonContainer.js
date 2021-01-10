import React, { useEffect, useState } from "react";
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

  const [isCastCrewListEmpty,setIsCastCrewListEmpty] = useState(true);

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

  useEffect(() => {
    if(movie){
      setIsCastCrewListEmpty(movie.crew?.length||movie.cast?.length? false : true);
    }
  },[movie]);

  return (
    <PersonPresenter
      info={info || {}}
      movie={movie || []}
      tv={tv || []}
      infoLoading={isInfoLoading}
      movieLoading={isMovieLoading}
      tvLoading={isTVLoading}
      isCastCrewListEmpty={isCastCrewListEmpty}
    />
  );
};
export default PersonContainer;
