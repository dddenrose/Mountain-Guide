import React from "react";
import { Outlet, Link } from "react-router-dom";
import { HeaderWrapper, Wrapper } from "./Style";

const Root = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li>
              <Link to="homepage">homepage</Link>
            </li>
            <li>
              <Link to="auth">auth</Link>
            </li>
            <li>
              <Link to="blog">blog</Link>
            </li>
          </ul>
        </nav>
      </HeaderWrapper>
      <div id="detail">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default Root;
