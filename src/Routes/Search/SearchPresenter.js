import React from "react";
import PropsTypes from "prop-types";
import styled, { css } from "styled-components";
import { v4 } from "uuid";
import { Helmet } from "react-helmet";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "components/Loader";
import Section from "components/Section";
import Message from "components/Message";
import Poster from "components/Poster";
import FloatingButton from "components/FloatingButton";

const Container = styled.div`
  padding: 0 20px;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  & svg {
    font-size: 20px;
  }
  ${(props) =>
    props.isOnInput
      ? css`
          border-bottom: 1px solid red;
        `
      : css`
          border-bottom: 1px solid #e3e3e3;
        `};
`;
const Input = styled.input`
  all: unset;
  font-size: 1.4rem;
  width: 100%;
  background: transparent;
  padding-left: 10px;
  padding-bottom: 10px;
`;
const SearchPresenter = ({
  movieResult,
  tvResult,
  isMovieSearching,
  isTVSearching,
  term,
  isOnInput,
  handleSubmit,
  handleChange,
  handleOnFocus,
  handleOnBlur,
}) => {
  return (
    <>
      <Helmet>
        <title>Search | Nokflix</title>
      </Helmet>
      <Container>
        <Form onSubmit={handleSubmit} isOnInput={isOnInput}>
          <FontAwesomeIcon icon={faSearch} />
          <Input
            value={term}
            type="text"
            placeholder={"Search Movies or TV Shows..."}
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
        </Form>
        {isMovieSearching !== false && isTVSearching !== false ? (
          <Loader />
        ) : (
          <>
            {movieResult && movieResult.length > 0 && (
              <Section title="Movie Result">
                {movieResult.map((movie) => (
                  <Poster
                    key={v4()}
                    id={movie.id}
                    title={movie.title}
                    rate={movie.vote_average}
                    imgUrl={movie.poster_path}
                    isMovie={true}
                    link={true}
                  />
                ))}
              </Section>
            )}
            {tvResult && tvResult.length > 0 && (
              <Section title="TV Show Result">
                {tvResult.map((tv) => (
                  <Poster
                    key={v4()}
                    id={tv.id}
                    title={tv.original_name}
                    rate={tv.vote_average}
                    imgUrl={tv.poster_path}
                    isMovie={false}
                    link={true}
                  />
                ))}
              </Section>
            )}
            {tvResult &&
              movieResult &&
              tvResult.length === 0 &&
              movieResult.length === 0 && <Message msg={`Nothing Found`} />}
          </>
        )}
        <FloatingButton />
      </Container>
    </>
  );
};
SearchPresenter.propsTypes = {
  movieResult: PropsTypes.array,
  tvResult: PropsTypes.array,
  isMovieSearching: PropsTypes.bool.isRequired,
  isTVSearching: PropsTypes.bool.isRequired,
  term: PropsTypes.string,
  isOnInput: PropsTypes.bool,
  handleSubmit: PropsTypes.func.isRequired,
  handleChange: PropsTypes.func.isRequired,
  handleOnBlur: PropsTypes.func.isRequired,
  handleOnFocus: PropsTypes.func.isRequired,
};
export default SearchPresenter;
