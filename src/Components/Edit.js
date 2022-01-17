import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";

import "./CSS/Input.css";

export default function Edit({ postToEdit }) {
  let history = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(
    postToEdit || { id: "", title: " ", body: " " }
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setPost({ ...postToEdit, [name]: value });
  }

  function submitForm(event) {
    event.preventDefault();
    const stringifiedState = JSON.stringify({
      id: post._id,
      title: post.title,
      body: post.body,
    });
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringifiedState,
    };
    fetch(`http://localhost:3005/spark/${id}`, options).then((res) => {
      res
        .json()
        .then((updatedPost) => console.log(updatedPost))
        .catch((error) => console.log(error));
    });
  }

  function handleSwitch() {
    history.push(`/list`);
  }

  return (
    <div className="Main">
      <div className="About-List">
        <form onSubmit={submitForm} className="Input-Form">
          <label>
            <h2 className="Input-Form_Label">EDIT TITLE</h2>
          </label>
          <input
            className="Input-Form_Input"
            type="text"
            id="title"
            name="title"
            value={post.title}
            placeholder="EDIT NOW"
            onChange={handleChange}
          />
          <label>
            <h2 className="Input-Form_Label">EDIT POST</h2>
          </label>
          <textarea
            className="Input-Form_Textarea"
            type="text"
            id="body"
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
      <button className="Input-Button GoBack" onClick={handleSwitch}>
        <p>Back To List</p>
      </button>
    </div>
  );
}
