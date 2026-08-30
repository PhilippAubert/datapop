import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header__hero">
          <h1 className="header__headline">DATAPOP</h1>
      </div>
      <div className="nav">
        <NavLink to="/">
          <h2 className="nav-element">START</h2>{" "}
        </NavLink>
        <NavLink to="/list">
          <h2 className="nav-element">POSTS</h2>{" "}
        </NavLink>
        <NavLink to="/input">
          <h2 className="nav-element">WRITE</h2>{" "}
        </NavLink>
      </div>
    </div>
  );
}
