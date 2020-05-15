import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import { v4 } from "uuid";
import { Helmet } from "react-helmet-async";
import Section from "components/Section";
import Loader from "components/Loader";
import Poster from "components/Poster";

const Container = styled.div`
  padding: 0 20px;
`;
const MoviePresenter = ({
  nowPlaying,
  upComing,
  popular,
  topRated,
  nowPlayingLoading,
  upComingLoading,
  popularLoading,
  topRatedLoading,
}) => (
  <>
    <Helmet>
      <title>Movie | Notflix</title>
    </Helmet>
    {nowPlayingLoading !== false &&
    upComingLoading !== false &&
    popularLoading !== false &&
    topRatedLoading !== false ? (
      <Loader fixed={true} />
    ) : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing">
            {nowPlaying.map((movie) => (
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
        {upComing && upComing.length > 0 && (
          <Section title="Upcoming">
            {upComing.map((movie) => (
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
        {popular && popular.length > 0 && (
          <Section title="Popular">
            {popular.map((movie) => (
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
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated">
            {topRated.map((movie) => (
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
      </Container>
    )}
  </>
);
MoviePresenter.propsTypes = {
  nowPlaying: PropsTypes.array,
  upComing: PropsTypes.array,
  popular: PropsTypes.array,
  topRated: PropsTypes.array,
};
export default MoviePresenter;
