import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Image = styled.div`
  width: 140px;
  height: 100px;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: ${(props) =>
    props.imgUrl ? `url(https://image.tmdb.org/t/p/w500${props.imgUrl})` : ``};
  background-color: rgba(165, 177, 194, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  margin: 5px;
`;
const Company = ({ name, imgUrl }) => {
  console.log(name, imgUrl);
  return (
    <Container>
      <Image imgUrl={imgUrl}>{imgUrl ? "" : `${name}`}</Image>
    </Container>
  );
};
export default Company;
