import React from "react";

import "../css/Dropdown.css";

function Dropdown3() {
  return (
    <div className="wrapper">
      <div className="main-container">
        <div className="container">
          <ul>
            <li className="list-header">Topwear</li>
            <li>Top Wear</li>
            <li>All Top Wear</li>
            <li>Tshirts</li>
            <li>Shirts</li>
          </ul>
        </div>
        <div className="container bg-color">
          <ul>
            <li className="list-header">Bottomwear</li>
            <li>Bottom Wear</li>
            <li>Jeans</li>
            <li>Track Pant</li>
            <li>Trousers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Dropdown3;
