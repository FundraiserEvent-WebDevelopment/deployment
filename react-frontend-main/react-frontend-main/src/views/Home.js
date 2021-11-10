import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Member from "../components/Member";
import Slide from "../components/Slide";

import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Carousel from "react-material-ui-carousel";

import downArrow from "../images/down-arrow.png";
import aboutImage from "../images/about.svg";

import cabImage from "../images/cab.png";
import wsaImage from "../images/wsa.jpg";
import wmuImage from "../images/western.png";

import aapiImage from "../images/aapi.png";
import blmImage from "../images/blm.png";

import carouselImage from "../images/carousel.jpg";
import carouselImage2 from "../images/carousel2.jpg";
import carouselImage3 from "../images/carousel3.jpg";

export default function Home() {
  const styleAccordion = {
    backgroundColor: "#00000000",
    boxShadow: "none",
  };

  const styleAccSummary = {
    fontWeight: "bold",
  };

  const carouselSlides = [
    {
      title: "Kzoo Pottery",
      desc: "A collection of hand-painted ceramic pottery made by students from downtown Kalamazoo",
      img: carouselImage,
    },
    {
      title: "Kzoo Pottery",
      desc: "A collection of hand-painted ceramic pottery made by students from downtown Kalamazoo",
      img: carouselImage2,
    },
    {
      title: "CD Paintings",
      desc: "Custom-made CD paintings made by students in Valley 2 WMU",
      img: carouselImage3,
    },
  ];

  return (
    <div>
      <div id="home" class="main">
        <h1>Student Fundraiser Name</h1>
        <span>
          November 16th 2021 @ 6-9pm • Western Michigan University • In-person
        </span>
        <div class="buttons">
          <Button variant="contained">Sign up as a vendor</Button>
          <Button variant="contained">
            <Link to="/vendors">Check out vendors</Link>
          </Button>
        </div>
        <HashLink smooth to="/#about">
          <img src={downArrow} alt="" />
        </HashLink>
      </div>

      <div id="about">
        <img src={aboutImage} alt="" />
        <div class="about-text">
          <h3>Showcase your work</h3>
          <p>
            The NAME is a fundraising event focused on providing students an
            opportunity to showcase their works, crafts, and services on campus
          </p>
          <h3>Make a change</h3>
          <p>
            From handmade jewelry, fresh pastries, and awe-spiring drawings, we
            aim to raise money for the <b>AAPI community</b> and the{" "}
            <b>BLM Movement.</b>
          </p>
        </div>
      </div>

      <div id="details">
        <div class="details-content">
          <h2>Frequently Asked Questions</h2>
          <Accordion disableGutters sx={styleAccordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={styleAccSummary}
            >
              When and where would the event be held?
            </AccordionSummary>
            <AccordionDetails>
              The event will be held on the 18th of November at 5-8pm located at
              WMU flagpoles!
            </AccordionDetails>
          </Accordion>
          <Accordion disableGutters sx={styleAccordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={styleAccSummary}
            >
              Who can participate as a vendor?
            </AccordionSummary>
            <AccordionDetails>
              Any Western Michigan University student is eligible to be a
              vendor.
            </AccordionDetails>
          </Accordion>
          <Accordion disableGutters sx={styleAccordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={styleAccSummary}
            >
              When is the deadline to register as a vendor?
            </AccordionSummary>
            <AccordionDetails>
              Anyone who wishes to be considered as a vendor should sign-up
              using the Google Form provided by the 15th of November.
            </AccordionDetails>
          </Accordion>
          <Accordion disableGutters sx={styleAccordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={styleAccSummary}
            >
              Can non-students participate?
            </AccordionSummary>
            <AccordionDetails>
              Only Western Michigan University students are eligible to
              participate.
            </AccordionDetails>
          </Accordion>
          <Accordion disableGutters sx={styleAccordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={styleAccSummary}
            >
              How to register as a vendor?
            </AccordionSummary>
            <AccordionDetails>
              Anyone who is interested to be a vendor should sign-up using this
              Google Form link.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div id="detailsbackground"></div>
      <div id="vendor-showcase">
        <h2>Participating Vendors</h2>
        <Carousel navButtonsAlwaysVisible>
          {carouselSlides.map((slide) => (
            <Slide {...slide} />
          ))}
        </Carousel>
      </div>

      <div id="sponsors">
        <h2>Our Sponsors</h2>
        <div>
          <img src={cabImage} alt="" />
          <img src={wsaImage} alt="" />
          <img src={wmuImage} alt="" />
        </div>
        <h2>Who we're fundraising for:</h2>
        <div>
          <img src={aapiImage} alt="" />
          <img src={blmImage} alt="" />
        </div>
      </div>

      <div id="contact" class="contacts">
        <span>Contact us at cab-culturalevents@wmich.edu!</span>
      </div>
    </div>
  );
}
