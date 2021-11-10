import React, { useState, useEffect } from "react";
import VendorCard from "../components/VendorCard";

export default function Vendors() {
  const [vendorList, setVendorList] = useState([]);
  let vendorCards = [];

  useEffect(() => {
    async function getVendors() {
      try {
        const response = await fetch("http://localhost:8080/vendor");
        const json = await response.json();
        setVendorList([...json]);
      } catch (error) {
        console.log(error, "something went wrong");
      }
    }

    getVendors();
  }, []);

  vendorCards = vendorList.map((vendor) => {
    return <VendorCard {...vendor} />;
  });

  return (
    <div>
      <div id="vendors" class="main">
        <h1>Showcase your work; Make a change.</h1>
        <span>
          November 16th 2021 @ 6-9pm • Western Michigan University • In-person
        </span>
      </div>
      <div id="vendor-list">
        <div class="vendors">{vendorCards}</div>
      </div>
      <div id="contact" class="contacts">
        <span>Contact us at cab-culturalevents@wmich.edu!</span>
      </div>
    </div>
  );
}
