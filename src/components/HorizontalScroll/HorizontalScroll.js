import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Container = styled.div`
  margin-bottom: 30px;
`;
const Title = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
`;
const ChildrenContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-top: 10px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    width: 110px;
  }
`;
const HorizontalScroll = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};
HorizontalScroll.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default HorizontalScroll;
