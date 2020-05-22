import React, { useCallback } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
`;
const FloatingButton = () => {
  const handleToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <Container onClick={handleToTop}>Top</Container>;
};
export default FloatingButton;
