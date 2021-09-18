import React from "react";
import "./CSS/Posts.css";

export default function Posts({ post }) {
  function handleDelete() {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    };

    fetch(`http://localhost:3005/spark/${post._id}`, options).then(() =>
      console.log(`Post  deleted`)
    );
  }
  return (
    <div className="Posts">
      <h2 className="Posts_Headline">{post.title}</h2>
      <div className="Posts_Textarea">
        <p className="Posts_Text">{post.body}</p>
      </div>
      <div className="Buttons">
        <button onClick={handleDelete} className="Button">
          Delete
        </button>
        <button className="Button">Edit</button>
      </div>
    </div>
  );
}
