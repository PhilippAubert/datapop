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
          <label className="Input-Form_Label" for="title">
            ENTER TITLE
          </label>
          <input type="text" key="id" id="text_id" placeholder="enter title" />
          <label className="Input-Form_Label" for="post">
            ENTER POST
          </label>
          <textarea type="text" id="id" placeholder="write post here" />
          <button type="submit">send post</button>
        </form>
      </div>
    </div>
  );
}
