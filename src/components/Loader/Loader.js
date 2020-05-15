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
  @keyframes loadingAni {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  width: 50px;
  height: 50px;
  border: 3px solid;
  border-color: white #cecece5e #cecece5e;
  border-radius: 50%;
  animation: loadingAni 1.5s ease-out infinite;
`;
const Loader = ({ fixed }) => {
  return (
    <Container fixed={fixed === true}>
      <Loading />
    </Container>
  );
};
export default Loader;
