import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { Helmet } from "react-helmet-async";
import Loader from "components/Loader";
import Section from "components/Section";
import Poster from "components/Poster";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;
const InfoContainer = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  margin-bottom: 60px;
  padding: 0px 40px;
`;
const Image = styled.img`
  width: 180px;
  border-radius: 10px;
`;
const ProfileContainer = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 20px;
`;
const CreditContainer = styled.div`
  padding: 0px 40px;
`;
const Name = styled.p`
  font-size: 2rem;
`;
const Label = styled.span`
  background: #484848;
  border-radius: 5px;
  padding: 2px;
  margin-right: 10px;
  box-shadow: 2px 1px 4px 1px #989191d6;
`;
const Span = styled.span``;
const Info = styled.div`
  margin-top: 20px;
  font-size: 1rem;
`;
const PersonPresenter = ({
  info,
  movie,
  tv,
  infoLoading,
  movieLoading,
  tvLoading,
}) => {
  //  console.log(info, movie);
  return infoLoading !== false &&
    movieLoading !== false &&
    tvLoading !== false ? (
    <>
      <Helmet>
        <title>Loading | Nokflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title> {info && `${info.name} | Nokflix `}</title>
      </Helmet>
      <InfoContainer>
        <Image src={`https://image.tmdb.org/t/p/w500${info?.profile_path}`} />
        <ProfileContainer>
          <Name>{info?.name}</Name>
          <Info>
            <Label>Gender</Label>
            <Span>{info?.gender === 2 ? "Male" : "Female"}</Span>
          </Info>
          <Info>
            <Label>Birthday</Label>
            <Span>{info?.birthday}</Span>
          </Info>
          <Info>
            <Label>Place of Birth</Label>
            <Span>{info?.place_of_birth}</Span>
          </Info>
          <Info>
            <Label>Known For</Label>
            <Span>{info?.known_for_department}</Span>
          </Info>
          <Info>
            <Label>Popularity</Label>
            <Span>{info?.popularity}</Span>
          </Info>
        </ProfileContainer>
      </InfoContainer>
      <CreditContainer>
        {movie?.cast?.length > 0 && (
          <Section title="Cast">
            {movie.cast.map((m) => (
              <Poster
                key={v4()}
                id={m.id}
                title={m.title}
                rate={m.vote_average}
                imgUrl={m.poster_path}
                isMovie={true}
                scroll={false}
                link={true}
              />
            ))}
          </Section>
        )}
        {movie?.crew?.length > 0 && (
          <Section title="Crew">
            {movie.cast.map((m) => (
              <Poster
                key={v4()}
                id={m.id}
                title={m.title}
                rate={m.vote_average}
                imgUrl={m.poster_path}
                isMovie={true}
                scroll={false}
                link={true}
              />
            ))}
          </Section>
        )}
      </CreditContainer>
    </Container>
  );
};
PersonPresenter.propTypes = {
  info: PropTypes.object,
  movie: PropTypes.object,
  tv: PropTypes.object,
  infoLoading: PropTypes.bool,
  movieLoading: PropTypes.bool,
  tvLoading: PropTypes.bool,
};
export default PersonPresenter;
