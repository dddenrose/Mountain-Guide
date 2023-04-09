import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  padding: 24px;
  margin-bottom: 80px;
  .logo {
    flex: 1;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  li {
    margin-left: 16px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
