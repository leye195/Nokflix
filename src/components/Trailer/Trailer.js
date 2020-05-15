import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "components/Loader";

const Container = styled.div`
  margin-right: 15px;
  position: relative;
  cursor: pointer;
`;
const TrailerDiv = styled.div`
  width: 280px;
  height: 150px;
  background-image: ${(props) =>
    props.url ? `url(https://i.ytimg.com/vi/${props.url}/mqdefault.jpg)` : ""};
  background-position: center center;
  background-size: cover;
  &:hover p {
    transform: scale(1.05);
  }
`;
const TrailerPlay = styled.p`
  position: absolute;
  border: 2px solid black;
  width: 50px;
  height: 30px;
  top: 40%;
  left: 43%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 100;
  transform: scale(1);
  transition: all 1s ease-out;
  color: white;
  border-radius: 5px;
  background-color: #060404d1;
  box-shadow: 0px 0px 18px 4px white;
`;
const Trailer = ({ url, handleToggle }) => {
  return (
    <Container onClick={handleToggle}>
      <TrailerDiv url={url}>
        <TrailerPlay>Play</TrailerPlay>
      </TrailerDiv>
      {url === null && <Loader fixed={false} />}
    </Container>
  );
};
Trailer.propTypes = {
  url: PropTypes.string,
};
export default Trailer;
