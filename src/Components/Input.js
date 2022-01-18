import React from "react";
import "./CSS/Input.css";
import { useState } from "react";

export default function Input() {
  const [post, setPost] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  }

  function handleSubmitPost(event) {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: post.title, body: post.body }),
    };
    fetch("http://localhost:3005/spark", options)
      .then((response) => {
        response.json();
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="Main">
      <div className="About-List">
        <form onSubmit={handleSubmitPost} className="Input-Form">
          <h2 className="Input-Form_Label">ENTER TITLE</h2>
          <input
            className="Input-Form_Input"
            type="text"
            id="title"
            name="title"
            value={post.title}
            placeholder="ENTER TITLE"
            onChange={handleChange}
            required
          />
          <h2 className="Input-Form_Label">ENTER POST</h2>
          <textarea
            className="Input-Form_Textarea"
            type="text"
            id="text"
            name="body"
            value={post.body}
            placeholder="WRITE POST HERE"
            cols="30"
            rows="10"
            onChange={handleChange}
          />
          <h2 className="Input-Form_Label">PUBLISH</h2>
          <button className="Input-Button" type="submit">
            <p>SEND POST</p>
          </button>
        </form>
      </div>
    </div>
  );
}
