import React from "react";

export default function CarouselCard(props) {
  return (
    <div class="carousel-card">
      <img src={props.link} alt="" />
    </div>
  );
}
