import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderWrapper, Wrapper } from "./Style";

const Root = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li>
              <a href={`/homepage`}>homepage</a>
            </li>
            <li>
              <a href={`/auth`}>auth</a>
            </li>
            <li>
              <a href={`/blog`}>blog</a>
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
