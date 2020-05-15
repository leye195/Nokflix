import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Container = styled.section`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;
const Title = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`;
const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
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
