import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Carousel from "react-material-ui-carousel";

import SlideCard from "./SlideCard";
import CarouselCard from "./CarouselCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "60%",
  bgcolor: "white",
  boxShadow: 24,
  borderRadius: "8px",
  padding: 4,
  outline: "none",
};

export default function VendorCard(props) {
  const [open, setOpen] = React.useState(false);
  const [images, setImages] = React.useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    async function getImages() {
      try {
        const response = await fetch(
          `http://localhost:8080/vendorimages/${props.id}`
        );
        const json = await response.json();
        setImages([...json]);
      } catch (error) {
        console.log(error, "something went wrong");
      }
    }

    getImages();
  }, []);

  return (
    <div class="slides">
      <Card
        sx={{ width: 300, textTransform: "capitalize" }}
        onClick={handleOpen}
      >
        <Carousel autoPlay={false} indicators={false} class="carousel-card">
          {images.map((slide) => (
            <CarouselCard {...slide} />
          ))}
        </Carousel>
        <CardContent sx={{ height: 100 }}>
          <span className="vendor-name">
            {props.first_name} {props.last_name}
          </span>
          <p>{props.goods_type}</p>
          <p className="price">
            ${props.lower_price} - ${props.upper_price}
          </p>
        </CardContent>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div class="box">
            <Carousel autoPlay={false} class="carousel-modal">
              {images.map((slide) => (
                <SlideCard {...slide} />
              ))}
            </Carousel>
            <div class="box-content">
              <span class="vendor-name">
                {props.first_name} {props.last_name}
              </span>

              <p class="goods-type">{props.goods_type}</p>
              <p class="description">{props.description}</p>

              <p>
                Price range: ${props.lower_price} - ${props.upper_price}
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
