import React from "react";
import PropsTypes from "prop-types";
import Section from "components/Section";
import Loader from "components/Loader";
import Poster from "components/Poster";
import styled from "styled-components";
import { v4 } from "uuid";
import { Helmet } from "react-helmet-async";
const Container = styled.div`
  padding: 0 20px;
`;
const TVPresenter = ({
  popular,
  topRated,
  airingToday,
  isTopRatedTVLoading,
  isTVPopularLoading,
  isAiringTodayLoading,
}) => (
  <>
    <Helmet>
      <title>TV | Nokflix</title>
    </Helmet>
    {isTopRatedTVLoading !== false &&
    isTVPopularLoading !== false &&
    isAiringTodayLoading !== false ? (
      <Loader fixed={true} />
    ) : (
      <Container>
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today">
            {airingToday.map((tv) => (
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
        {popular && popular.length > 0 && (
          <Section title="Popular">
            {popular.map((tv) => (
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
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated">
            {topRated.map((tv) => (
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
      </Container>
    )}
  </>
);
TVPresenter.propsTypes = {
  popular: PropsTypes.array,
  topRated: PropsTypes.array,
  airingToday: PropsTypes.array,
};
export default TVPresenter;
