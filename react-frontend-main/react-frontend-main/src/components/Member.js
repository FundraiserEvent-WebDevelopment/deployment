import React from "react";

export default function Member(props) {
  return (
    <div>
      <img src={props.image} alt="" />
      <h3>{props.name}</h3>
      <span>{props.role}</span>
    </div>
  );
}
