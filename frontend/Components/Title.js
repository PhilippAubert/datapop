import React from "react";
import "./CSS/Title.css";

export default function Title({ title }) {
  return (
    <div className="Title">
      <h1 className="Headline">{title}</h1>
    </div>
  );
}
