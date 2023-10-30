import React from "react";

import "../css/Dropdown.css";

function Dropdown2() {
  return (
    <div className="wrapper">
      <div className="main-container">
        <div className="container">
          <ul>
            <li className="list-header">Topwear</li>
            <li>Tops</li>
            <li>Dresses</li>
            <li>Sweaters</li>
            <li>Jumpsuits</li>
          </ul>
        </div>
        <div className="container bg-color">
          <ul>
            <li className="list-header">Bottomwear</li>
            <li>Bottomwear</li>
            <li>Jeans</li>
            <li>Jeggings</li>
            <li>Palazzos</li>
            <li>Shorts</li>
            <li>Skirts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Dropdown2;
