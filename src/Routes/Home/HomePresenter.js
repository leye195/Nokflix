import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { v4 } from "uuid";
import HorizontalScroll from "components/HorizontalScroll";
import Poster from "components/Poster";
import Loader from "components/Loader";
import ImageScroll from "components/ImageScroll";
const Container = styled.div`
  padding: 0 20px;
  margin-top: 420px;
`;

const HomePresenter = ({
  nowPlaying,
  nowPlayingLoading,
  upcoming,
  upComingLoading,
  moviePopular,
  popularLoading,
  topRatedTV,
  topRatedTVLoading,
  tvPopular,
  tvPopularLoading,
  movieTrend,
}) => (
  <>
    <Helmet>
      <title>Home | Nokflix </title>
    </Helmet>
    {nowPlayingLoading === false &&
    upComingLoading === false &&
    popularLoading === false &&
    topRatedTVLoading === false &&
    tvPopularLoading === false ? (
      <Container>
        <ImageScroll movieTrend={movieTrend} />
        {nowPlaying && nowPlaying.length > 0 && (
          <HorizontalScroll title="Now Playing">
            {nowPlaying.map((movie) => (
              <Poster
                key={v4()}
                id={movie.id}
                title={movie.title}
                rate={movie.vote_average}
                imgUrl={movie.poster_path}
                isMovie={true}
                scroll={true}
                link={true}
              />
            ))}
          </HorizontalScroll>
        )}
        {upcoming && upcoming.length > 0 && (
          <HorizontalScroll title="Upcoming Movie">
            {upcoming.map((movie) => (
              <Poster
                key={v4()}
                id={movie.id}
                title={movie.title}
                rate={movie.vote_average}
                imgUrl={movie.poster_path}
                isMovie={true}
                scroll={true}
                link={true}
              />
            ))}
          </HorizontalScroll>
        )}
        {moviePopular && moviePopular.length > 0 && (
          <HorizontalScroll title="Popular Movie">
            {moviePopular.map((movie) => (
              <Poster
                key={v4()}
                id={movie.id}
                title={movie.title}
                rate={movie.vote_average}
                imgUrl={movie.poster_path}
                isMovie={true}
                scroll={true}
                link={true}
              />
            ))}
          </HorizontalScroll>
        )}
        {topRatedTV && topRatedTV.length > 0 && (
          <HorizontalScroll title="Top Rated TV Show">
            {topRatedTV.map((tv) => (
              <Poster
                key={v4()}
                id={tv.id}
                title={tv.original_name}
                rate={tv.vote_average}
                imgUrl={tv.poster_path}
                isMovie={false}
                scroll={true}
                link={true}
              />
            ))}
          </HorizontalScroll>
        )}
        {tvPopular && tvPopular.length > 0 && (
          <HorizontalScroll title="Popular TV Show">
            {tvPopular.map((tv) => (
              <Poster
                key={v4()}
                id={tv.id}
                title={tv.original_name}
                rate={tv.vote_average}
                imgUrl={tv.poster_path}
                isMovie={false}
                scroll={true}
                link={true}
              />
            ))}
          </HorizontalScroll>
        )}
      </Container>
    ) : (
      <Loader fixed={true} />
    )}
  </>
);

HomePresenter.propsTypes = {
  nowPlaying: PropsTypes.array,
  upcoming: PropsTypes.array,
  moviePopular: PropsTypes.array,
  topRatedTV: PropsTypes.array,
  tvPopular: PropsTypes.array,
};
export default HomePresenter;
