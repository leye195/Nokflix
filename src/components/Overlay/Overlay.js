import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #000000ad;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Overlay = ({ children, handleToggle, videoKey }) => {
  return <Container onClick={handleToggle(videoKey)}>{children}</Container>;
};
Overlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default Overlay;
