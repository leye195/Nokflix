import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: ${(props) => (props.fixed ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
`;
const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;
const SVG = styled.svg`
  @keyframes loadingAni {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  width: 54px;
  height: 54px;
  animation: loadingAni 1.5s ease-out infinite;
`;
const Circle = styled.circle`
  @keyframes loadingAni {
    0% {
      stroke-dashoffset: 157;
    }
    70% {
      stroke-dashoffset: -142;
    }
    100% {
      stroke-dashoffset: -157;
    }
  }
  stroke: white;
  stroke-width: 4;
  stroke-dasharray: 157;
  stroke-dashoffset: -157;
  fill: transparent;
  animation: loadingAni 1.1s ease-in-out infinite;
`;
const Loader = ({ fixed }) => {
  return (
    <Container fixed={fixed === true}>
      <Loading>
        <SVG className="loading-circle">
          <Circle cx="50%" cy="50%" r="25" />
        </SVG>
      </Loading>
    </Container>
  );
};
export default Loader;
