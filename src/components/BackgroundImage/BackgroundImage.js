import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Container = styled.div`
  top: 50px;
  left: 0;
  width: 100%;
  height: 400px;
  position: absolute;
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
const Image = styled.div`
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(
      to right,
      rgb(20, 24, 28),
      transparent,
      transparent,
      transparent,
      rgb(20, 24, 28)
    ),
    linear-gradient(transparent, transparent, transparent, rgb(20, 24, 28)),
    ${(props) =>
      props.imgUrl
        ? `url(https://image.tmdb.org/t/p/original${props.imgUrl})`
        : ""};
  background-repeat: no-repeat;
  background-size: 90% 100%;
  background-position: center center;
`;
const BackgroundImage = ({ imgUrl }) => {
  return (
    <Container>
      <ImageContainer>
        <Image imgUrl={imgUrl} />
      </ImageContainer>
    </Container>
  );
};
BackgroundImage.propTypes = {
  imgUrl: PropTypes.string,
};
export default BackgroundImage;
