import React from "react";
import { useState } from "react";

import "./Input.css";

export const Input = () => {

  const [values, setValues] = useState({
      title:"",
      post: ""
  })

  const handleValueChange = (identifier, event) => {
    setValues(prev => ({
      ...prev, 
      [identifier]:event.target.value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="main">
        <form 
          onSubmit={handleSubmit}
          className="input--form">
          <label htmlFor="title" className="input--form__label">ENTER TITLE</label>
          <input
            className="input--form__input"
            type="text"
            id="title"
            name="title"
            value={values.title}
            placeholder="ENTER TITLE"
            onChange={(event)=>handleValueChange("title", event)}
          />
          <label className="input--form__label">ENTER POST</label>
          <textarea
            htmlFor="post"
            className="input-form_textarea"
            type="text"
            id="post"
            name="post"
            value={values.post}
            placeholder="WRITE POST HERE"
            onChange={(event)=>handleValueChange("post", event)}
          />
          <p className="input--form__label">PUBLISH</p>
          <button 
            type="submit"
            className="input-button"
          >
            <p>SEND POST</p>
          </button>
        </form>
      </div>
  );
}
