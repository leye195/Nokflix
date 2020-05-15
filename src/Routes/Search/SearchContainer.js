import React, { useState, useCallback } from "react";
import SearchPresenter from "./SearchPresenter";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../../reducers/movie";
import { searchTV } from "../../reducers/tv";
const SearchContainer = () => {
  const [term, setTerm] = useState("");
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
  return (
    <SearchPresenter
      movieResult={movieResult}
      tvResult={tvResult}
      term={term}
      isMovieSearching={isMovieSearching}
      isTVSearching={isTVSearching}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default SearchContainer;
