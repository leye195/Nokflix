import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Container = styled.section`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 10px;
`;
const More = styled.span`
  padding: 3px;
  background-color: #e74c3c;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`;
const Section = ({ title, children, more }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <More>{more === true && `more`}</More>
      </TitleContainer>
      <Grid>{children}</Grid>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default Section;
