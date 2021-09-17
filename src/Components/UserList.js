import "./CSS/Users.css";
import { useState, useEffect } from "react";
import Posts from "./Posts.js";

export default function UserList() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("http://172.21.69.122:3005/spark")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <div className="Main">
      <div className="Users-List">
        {posts &&
          posts.map((post) => {
            return <Posts key={post.id} text={post.body} title={post.title} />;
          })}
      </div>
    </div>
  );
}
