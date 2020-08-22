import React, { useState, useCallback } from "react";
import SearchPresenter from "./SearchPresenter";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../../reducers/movie";
import { searchTV } from "../../reducers/tv";
const SearchContainer = () => {
  const [term, setTerm] = useState("");
  const [isOnInput, setIsOnInPut] = useState(false);
  const dispatch = useDispatch();
  const { movieResult, isMovieSearching } = useSelector((state) => state.movie);
  const { tvResult, isTVSearching } = useSelector((state) => state.tv);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (term !== "") {
        dispatch(
          searchMovie({
            term,
          })
        );
        dispatch(
          searchTV({
            term,
          })
        );
      }
    },
    [dispatch, term]
  );
  const handleChange = useCallback(
    (e) => {
      const {
        target: { value },
      } = e;
      //console.log(value);
      setTerm(value);
    },
    [setTerm]
  );
  const handleOnFocus = useCallback(
    (e) => {
      setIsOnInPut(true);
    },
    [setIsOnInPut]
  );
  const handleOnBlur = useCallback(
    (e) => {
      setIsOnInPut(false);
    },
    [setIsOnInPut]
  );
  return (
    <SearchPresenter
      movieResult={movieResult}
      tvResult={tvResult}
      term={term}
      isMovieSearching={isMovieSearching}
      isTVSearching={isTVSearching}
      isOnInput={isOnInput}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleOnFocus={handleOnFocus}
      handleOnBlur={handleOnBlur}
    />
  );
};

export default SearchContainer;
