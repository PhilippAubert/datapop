import React from "react";
import { useState } from "react";

import "./Input.css";

export const Input = () => {

  const [post, setPost] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  }

  function handleSubmitPost(event) {
    event.preventDefault();
    console.log(post);
  }

  return (
    <div className="main">
      <div className="command--area">
        <form onSubmit={handleSubmitPost} className="input--form">
          <h2 className="input--form__label">ENTER TITLE</h2>
          <input
            className="input--form__input"
            type="text"
            id="title"
            name="title"
            value={post.title}
            placeholder="ENTER TITLE"
            onChange={handleChange}
            required
          />
          <h2 className="input--form__label">ENTER POST</h2>
          <textarea
            className="input-form_textarea"
            type="text"
            id="text"
            name="body"
            value={post.body}
            placeholder="WRITE POST HERE"
            cols="45"
            rows="30"
            onChange={handleChange}
          />
          <h2 className="input--form__label">PUBLISH</h2>
          <button className="input-button" type="submit">
            <p>SEND POST</p>
          </button>
        </form>
      </div>
    </div>
  );
}
