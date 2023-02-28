import React from "react";
import { Outlet } from "react-router-dom";
// import { Wrapper } from "./Style";

const Root = () => {
  return (
    <>
      <div id="sidebar">
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
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
