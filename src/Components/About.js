import React from "react";
import "./CSS/About.css";
export default function About() {
  return (
    <div className="Main">
      <div className="About-List">
        <div className="About-List__Headline">
          <h1>WRITE YOUR POST HERE </h1>
        </div>
        <form className="Input-Form">
          <h2 className="Input-Form_Label" for="title">
            ENTER TITLE
          </h2>
          <input type="text" key="id" id="text_id" placeholder="enter title" />
          <h2 className="Input-Form_Label" for="post">
            ENTER POST
          </h2>
          <textarea
            className="Input-Form_Textarea"
            type="text"
            id="id"
            placeholder="write post here"
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
