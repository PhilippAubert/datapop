import React from "react";
import Title from "./Title.js";
import { NavLink } from "react-router-dom";
import "./CSS/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="HERO">
        <Title title="DATAPOP" />
      </div>
      <div className="Nav">
        <NavLink to="/">
          {" "}
          <p>START</p>{" "}
        </NavLink>
        <NavLink to="/list">
          {" "}
          <p>POSTS</p>{" "}
        </NavLink>
        <NavLink to="/input">
          {" "}
          <p>WRITE</p>{" "}
        </NavLink>
      </div>
    </div>
  );
}
