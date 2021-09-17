import React from "react";
import "./CSS/Posts.css";

export default function Posts({ title, text }) {
  return (
    <div className="Posts">
      <h2 className="Posts_Headline">{title}</h2>
      <div className="Posts_Textarea">
        <p className="Posts_Text">{text}</p>
      </div>
      <div className="Buttons">
        <button className="Button">Delete</button>
        <button className="Button">Edit</button>
      </div>
    </div>
  );
}
