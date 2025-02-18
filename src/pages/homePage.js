import React from "react";

import Navbar from "../Navbar.js";

import './homePage.css'

import image1 from '../images/Image1.jpeg';
import image2 from '../images/Image2.jpeg';

export default function Homepage() {
  return (
    <div className="homepage-container">
      {/* Top Banner */}
      <Navbar />

      {/* Two Pictures Section */}
      <div className="homepage-images-container">
        <div className="image-wrapper">
          <img src={image1} alt="Image 1" className="images" />
          <p className="mt-2 text-gray-800">Image 1 Name</p>
        </div>

        <div className="image-wrapper">
          <img src={image2} alt="Image 2" className="images" />
          <p className="mt-2 text-gray-800">Image 2 Name</p>
        </div>
      </div>
    </div>
  );
}