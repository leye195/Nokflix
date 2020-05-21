import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import { v4 } from "uuid";
import { Helmet } from "react-helmet";
import Loader from "components/Loader";
import Section from "components/Section";
import Message from "components/Message";
import Poster from "components/Poster";
const Container = styled.div`
  padding: 0 20px;
`;
const Form = styled.form`
  margin-bottom: 40px;
`;
const Input = styled.input`
  all: unset;
  font-size: 1.4rem;
  width: 100%;
  background: transparent;
`;
const SearchPresenter = ({
  movieResult,
  tvResult,
  isMovieSearching,
  isTVSearching,
  term,
  handleSubmit,
  handleChange,
}) => {
  //console.log(movieResult.length, tvResult.length, term);
  return (
    <>
      <Helmet>
        <title>Search | Nokflix</title>
      </Helmet>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input
            value={term}
            type="text"
            placeholder={"Search Movies or TV Shows..."}
            onChange={handleChange}
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
  handleSubmit: PropsTypes.func.isRequired,
};
export default SearchPresenter;
