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
        <NavLink to="/"> START </NavLink>
        <NavLink to="/list"> SHOW LIST </NavLink>
        <NavLink to="/about"> POST SOMETHING </NavLink>
      </div>
    </div>
  );
}
