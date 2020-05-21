import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "components/Loader";
import BackgroundImage from "components/BackgroundImage";
import Poster from "components/Poster";
import Episode from "components/Episode";
import { Helmet } from "react-helmet-async";
import { v4 } from "uuid";
const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 300px;
  z-index: 1;
  min-height: 550px;
`;
const SeasonNumber = styled.p`
  text-shadow: 0px 0px 9px;
`;
const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & img {
    width: auto;
  }
`;
const Overview = styled.p`
  font-size: 1rem;
  word-break: break-all;
  font-weight: 200;
  width: 50%;
  line-height: 1.2;
  margin-top: 20px;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (max-width: 767px) and (min-width: 200px) {
    width: fit-content;
  }
`;
const EpisodeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
const TotalEpisodes = styled.span`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 100;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::after {
    content: "";
    width: 30px;
    height: 3px;
    background-color: white;
    margin-top: 8px;
    border-radius: 20px;
  }
`;

const SeasonPresenter = ({ season, isLoadingSeason }) => {
  console.log(season, isLoadingSeason);
  return isLoadingSeason ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>Season | Nokflix</title>
      </Helmet>
      <BackgroundImage imgUrl={season && season.poster_path} />
      <TopSection>
        <Poster
          id={season && season.id}
          title={season?.name}
          imgUrl={season?.poster_path}
          link={false}
        />
        <SeasonNumber>{season && season.name}</SeasonNumber>
        <Overview>
          {season && season.overview && season.overview.length >= 540
            ? `${season.overview.substring(0, 541)}...`
            : season.overview}
        </Overview>
      </TopSection>
      <EpisodeSection>
        <TotalEpisodes>{`${
          season && season.episodes.length
        } Episodes`}</TotalEpisodes>
        {season &&
          season.episodes.map((episode) => (
            <Episode
              key={v4()}
              number={episode.episode_number}
              date={episode.air_date}
              name={episode.name}
              overview={episode.overview}
              imgUrl={episode.still_path}
              vote={episode.vote_average}
            />
          ))}
      </EpisodeSection>
    </Container>
  );
};
SeasonPresenter.propTypes = {
  season: PropTypes.object,
  isLoadingSeason: PropTypes.bool,
};
export default SeasonPresenter;
