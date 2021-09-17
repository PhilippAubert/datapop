import React from "react";
import "./CSS/About.css";
export default function Input() {
  return (
    <div className="Main">
      <div className="About-List">
        <form className="Input-Form">
          <label for="title">
            <h2 className="Input-Form_Label">ENTER TITLE</h2>
          </label>
          <input
            className="Input-Form_Input"
            type="text"
            id="title"
            placeholder="ENTER TITLE"
          />
          <label for="post">
            <h2 className="Input-Form_Label">ENTER POST</h2>
          </label>
          <textarea
            className="Input-Form_Textarea"
            type="text"
            id="text"
            placeholder="WRITE POST HERE"
            cols="30"
            rows="10"
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
