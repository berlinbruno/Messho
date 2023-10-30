import React from "react";

import "../css/Dropdown.css";

function Dropdown5() {
  return (
    <div className="wrapper">
      <div className="main-container">
        <div className="container">
          <ul>
            <li className="list-header">Home Furnishing</li>
            <li>Bedsheets</li>
            <li>Doormats</li>
            <li>Curtains & Sheers</li>
            <li>Cushions & Cushion Covers</li> 
            <li>Mattress Protectors</li>
          </ul>
        </div>
        <div className="container bg-color">
          <ul>
            <li className="list-header">Home Decor</li>
            <li>All Home Decor</li>
            <li>Stickers</li>
            <li>Clocks</li>
            <li>Showpieces</li>
          </ul>
        </div>
        <div className="container">
          <ul>
            <li className="list-header">Kitchen & Dining</li>
            <li>Kitchen Storage</li>
            <li>Cookware & Bakeware</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Dropdown5;
