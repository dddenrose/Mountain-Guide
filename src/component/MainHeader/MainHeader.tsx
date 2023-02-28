import React from "react";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <div>
      MainHeader
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="auth">Auth</NavLink>
      <NavLink to="blog">Blog</NavLink>
    </div>
  );
};

export default MainHeader;
