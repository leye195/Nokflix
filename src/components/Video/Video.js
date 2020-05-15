import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Container = styled.div`
  top: 0;
  left: 0;
  width: 70%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IFrame = styled.iframe`
  top: 0;
  left: 0;
  width: 800px;
  height: 450px;
`;
const Video = ({ url }) => {
  return (
    <Container>
      <IFrame
        src={`https://www.youtube.com/embed/${url}?autoplay=1`}
        allow="autoplay"
        height="300"
        width="400"
      />
    </Container>
  );
};
Video.propTypes = {
  url: PropTypes.string.isRequired,
};
export default Video;
