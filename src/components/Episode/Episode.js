import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Container = styled.div`
  display: flex;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 89%;
    margin-bottom: 20px;
  }
  @media (max-width: 767px) and (min-width: 200px) {
    flex-direction: column;
    width: min-content;
    margin-bottom: 40px;
  }
`;
const LeftSide = styled.div`
  margin-right: 10px;
  background-color: #696969;
  border-radius: 5px;
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 300px;
  border-radius: 5px;
  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
  @media (max-width: 767px) and (min-width: 200px) {
    margin-bottom: 10px;
  }
`;
const Title = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;
const SubInfo = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const AirDate = styled.p`
  font-weight: 300;
`;
const VoteContainer = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  .star {
    color: yellow;
  }
`;
const Overview = styled.p`
  line-height: 1.2;
  font-weight: 200;
`;
const Episode = ({ number, name, overview, imgUrl, date, vote }) => {
  return (
    <Container>
      <LeftSide>
        <Image src={`https://image.tmdb.org/t/p/w500${imgUrl}`} />
      </LeftSide>
      <RightSide>
        <Title>
          {number ? `Episode ${number}:` : ""} {name}
        </Title>
        <SubInfo>
          <AirDate>{date}</AirDate>
          <VoteContainer>
            <FontAwesomeIcon icon={faStar} className="star" />
            {vote.toFixed(2)}
          </VoteContainer>
        </SubInfo>
        <Overview>{overview}</Overview>
      </RightSide>
    </Container>
  );
};
Episode.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
  overview: PropTypes.string,
  imgUrl: PropTypes.string,
  date: PropTypes.string,
  vote: PropTypes.number,
};
export default Episode;
