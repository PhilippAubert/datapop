import "./CSS/Users.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Posts from "./Posts.js";

export default function UserList() {
  const [posts, setPosts] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3005/spark")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  function handlePostRemove(post) {
    console.log(` deleting post ${post.title}`);
    const newPosts = posts.filter((postItem) => {
      return postItem !== post;
    });

    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    };

    fetch(`http://localhost:3005/spark/${post._id}`, options).then(() =>
      fetch("http://localhost:3005/spark", {
        method: "GET",
        "content-type": "application/json",
      })
        .then((response) => response.json())
        .then((posts) => setPosts(posts))
        .then(() => console.log(`Post no. ${post.title} deleted`))
    );

    setPosts(newPosts);
  }

  function switchToEdit(id) {
    navigate(`/edit/${id}`);
  }

  return (
    <div className="Main">
      <div className="Users-List">
        {posts &&
          posts
            .map((post) => {
              console.log(post);
              return (
                <Posts
                  key={post._id}
                  post={post}
                  onRemoveClick={handlePostRemove}
                  onSwitchClick={switchToEdit}
                />
              );
            })
            .reverse()}
      </div>
    </div>
  );
}
