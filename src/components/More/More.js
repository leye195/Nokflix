import React from "react";
import styled from "styled-components";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-image: linear-gradient(90deg, #ddd6f3, #faaca8);
  cursor: pointer;
  height: 178px;
  &:hover svg {
    animation: moreAni 1s ease-in-out;
  }
  @keyframes moreAni {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    margin-top: 10px;
    font-size: 2rem;
    transform: rotate(0deg);
    cursor: pointer;
  }
`;
const More = ({ handleMore }) => {
  return (
    <Container onClick={handleMore}>
      <Text>
        More
        <FontAwesomeIcon icon={faPlus} />
      </Text>
    </Container>
  );
};
export default More;
