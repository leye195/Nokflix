import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
`;
const Text = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;
const Message = ({ msg, width }) => {
  return (
    <Container width={width}>
      <Text>{msg}</Text>
    </Container>
  );
};
Message.propTypes = {
  msg: propTypes.string.isRequired,
};
export default Message;
