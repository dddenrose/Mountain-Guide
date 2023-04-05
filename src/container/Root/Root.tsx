import React from "react";
import { Outlet, Link } from "react-router-dom";
import { HeaderWrapper, Wrapper } from "./Style";
import Footer from "../../component/Footer/Footer";

const Root = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li>
              <Link to="/">homepage</Link>
            </li>
            <li>
              <Link to="auth">auth</Link>
            </li>
            <li>
              <Link to="blog">blog</Link>
            </li>
            <li>
              <Link to="map">map</Link>
            </li>
          </ul>
        </nav>
      </HeaderWrapper>
      <div
        id="detail"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Outlet />
        <Footer />
      </div>
    </Wrapper>
  );
};

export default Root;
