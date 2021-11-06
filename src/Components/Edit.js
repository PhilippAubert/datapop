import React from "react";
import { useState, useEffect } from "react";

export default function Edit() {
  const [post, setPost] = useState({
    id: "",
    title: "",
    body: "",
    createdAt: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3005/spark/`)
      .then((response) => response.json())
      .then((posts) => setPost(posts));
  }, []);

  return (
    <div className="Main">
      <div className="Users-List">
        <h1>Edit Post</h1>
        <p>{post}</p>
      </div>
    </div>
  );
}
