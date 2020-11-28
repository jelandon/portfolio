import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Thumbnail(props) {
  return (
    <div className="example">
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="" />
        </div>
        <div>
          <h4>{props.title}</h4>
        </div>
        <div className="project-title">{props.title}</div>
      </Link>
    </div>
  );
}

export default Thumbnail;
