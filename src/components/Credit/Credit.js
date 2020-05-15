import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-content: center;
  margin: 10px;
  width: 300px;
`;
const Image = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: ${(props) =>
    props.imgUrl !== ""
      ? `url(https://image.tmdb.org/t/p/w300${props.imgUrl})`
      : ""};
  background-color: ${(props) => (props.imgUrl !== "" ? "" : "#e3e3e3")};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;
const Name = styled.p``;
const Role = styled.p``;
const Credit = ({ imgUrl, name, role }) => {
  return (
    <Container>
      <Image imgUrl={imgUrl !== null ? imgUrl : ""} />
      <Info>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </Info>
    </Container>
  );
};
Credit.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
};
export default Credit;
