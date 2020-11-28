import React, { Fragment } from "react";
import Projects from "./Projects.js";
import "../App.css";

function Splash() {
  return (
    <Fragment>
      <main>
        <div class="splash">
          <div class="left-splash">Hi there! My name is John and I am a</div>
          <div class="right-splash">
            <div class="strikethrough">
              <s>Front-End Developer</s>
              <br />
              <s>Visual Designer</s>
              <br />
              <s>Product Architect</s>
              <br />
              <s>Content Strategist</s>
              <br />
            </div>
            <div class="answer">PROBLEM SOLVER</div>
          </div>
        </div>
      </main>
      <Projects />
    </Fragment>
  );
}

export default Splash;
