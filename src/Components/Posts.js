import React from "react";
import "./CSS/Posts.css";

export default function Posts({ post, onRemoveClick }) {
  function handleDeleteClick() {
    onRemoveClick(post);
  }
  return (
    <div className="Posts">
      <h2 className="Posts_Headline">{post.title}</h2>
      <div className="Posts_Textarea">
        <p className="Posts_Text">{post.body}</p>
      </div>
      <div className="Buttons">
        <button onClick={handleDeleteClick} className="Button">
          Delete
        </button>
        <button className="Button">Edit</button>
      </div>
    </div>
  );
}
