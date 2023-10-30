import React from "react";

import Img1 from "../assets/img1.webp";
import Img2 from "../assets/scroll4.png";
import Img3 from "../assets/img2.webp";
import Img4 from "../assets/scroll5.webp";
import Img5 from "../assets/scroll6.webp";
import Img6 from "../assets/scroll7.webp";
import Img7 from "../assets/img3.webp";
import Img8 from "../assets/img4.webp";
import Img9 from "../assets/img5.webp";
import Img10 from "../assets/img6.webp";
import Img11 from "../assets/img7.webp";
import Img12 from "../assets/scroll8.webp";
import Img13 from "../assets/scroll9.webp";
import Img14 from "../assets/scroll10.webp";
import { ReactComponent as Scroll1 } from "../assets/scroll1.svg";
import { ReactComponent as Scroll2 } from "../assets/scroll2.svg";
import { ReactComponent as Scroll3 } from "../assets/scroll3.svg";
import "../css/Scroll.css";

function Scroll() {
  return (
    <div className="main-wrapper">
      <div className="wrapper-1">
        <div className="main-container">
          <div className="container-1-scroll">
            <h1>
              Lowest Prices
              <br />
              Best Quality Shopping
            </h1>
            <div className="inner-container">
              <Scroll1 />
              <span>Free Delivery</span>
              <div className="separator"></div>
              <Scroll2 />
              <span>CashOn Delivery</span>
              <div className="separator"></div>
              <Scroll3 />
              <span>Easy Return</span>
            </div>
            <button className="button">
              <img src={Img2} alt="" />
              <p>Download the Meesho App</p>
            </button>
          </div>
          <div className="container-2-scroll">
            <img src={Img1} alt="" className="img" />
          </div>
        </div>
      </div>
      <div className="wrapper-separator">
        <div className="wrapper-separator-1"></div>
        <span className="wrapper-text">Top Categories to choose from</span>
        <div className="wrapper-separator-2"></div>
      </div>
      <div className="wrapper-2">
        <div className="main-container">
          <img className="scroll-img" src={Img3} alt="" />
          <div className="container-3-scroll">
            <img className="container-img-1" src={Img4} alt="" />
            <img className="container-img-2" src={Img5} alt="" />
            <img className="container-img-2" src={Img6} alt="" />
          </div>
        </div>
      </div>
      <div className="wrapper-2">
        <div className="main-container">
          <img className="scroll-img" src={Img7} alt="" />
          <div className="container-4-scroll">
            <img className="container-img-3" src={Img8} alt="" />
          </div>
          <div className="container-5-scroll">
            <div className="inner-container-2">
                <img className="container-img-4" src={Img12} alt="" />
                <img className="container-img-4" src={Img9} alt="" />
            </div>
            <div className="inner-container-2">
                <img className="container-img-4" src={Img13} alt="" />
                <img className="container-img-4" src={Img10} alt="" />
            </div>
            <div className="inner-container-2">
                <img className="container-img-4" src={Img14} alt="" />
                <img className="container-img-4" src={Img11} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Scroll;
