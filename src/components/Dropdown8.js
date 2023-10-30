import React from "react";

import "../css/Dropdown.css";

function Dropdown8() {
  return (
    <div className="wrapper">
      <div className="main-container">
        <div className="container">
          <ul>
          <li className="list-header">Women Bags</li>
            <li>All Women Bags</li>
            <li>Handbags</li>
            <li>Clutches</li>
            <li>Slingbags</li>
          </ul>
        </div>
        <div className="container bg-color">
          <ul>
          <li className="list-header">Men Bags</li>
            <li>All Men Bags</li>
            <li>Men Wallet</li>
          </ul>
        </div>
        <div className="container">
          <ul>
          <li className="list-header">Men Footwear</li>
            <li>Sports Shoes</li>
            <li>Casual Shoes</li>
            <li>Formal Shoes</li>
            <li>Sandals</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Dropdown8;
