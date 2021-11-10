import React from "react";

export default function Slide(props) {
  return (
    <div class="slide">
      <img src={props.img} alt="" />
      <div class="slide-content">
        <h3>{props.title}</h3>
        <span>{props.desc}</span>
      </div>
    </div>
  );
}
