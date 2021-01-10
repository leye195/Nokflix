import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  background-color: #181818cf;
  z-index: 1;
`;
const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 50px;
`;
const Item = styled.li`
  list-style: none;
  cursor: pointer;
  text-align: center;
  border-bottom: 2px solid
    ${(props) => (props.current === true ? "white" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  font-family: ${(props) => (props.logo === true ? "monospace" : "")};
  font-weight: ${(props) => (props.logo === true ? "bold" : "")};
  color: ${(props) => (props.logo === true ? "#da4538" : "")};
  text-shadow: ${(props) => (props.logo === true ? "1px 0px 20px white" : "")};

  &:hover {
    background-color: #4444449c;
  }
`;

const SLink = styled(Link)`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  const {location:{pathname}} = useHistory();

  return (
    <HeaderContainer>
      <HeaderUl>
        <Item logo={true} current={pathname === "/"}>
          <SLink to="/">Nokflix</SLink>
        </Item>
        <Item current={pathname === "/movie"}>
          <SLink to="/movie">Movie</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname === "/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
      </HeaderUl>
    </HeaderContainer>
  );
};

export default Header;
