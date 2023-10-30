import React from "react";

import "../css/Dropdown.css";

function Dropdown6() {
  return (
    <div className="wrapper">
      <div className="main-container">
        <div className="container">
          <ul>
            <li className="list-header">Make up</li>
            <li>Face</li>
            <li>Eyes</li>
            <li>Lips</li>
            <li>Nails</li>
          </ul>
        </div>
        <div className="container bg-color">
          <ul>
          <li className="list-header">Wellness</li>
            <li>Sanitizers</li>
            <li>Oral Care</li>
            <li>Feminine Hygiene</li>
          </ul>
        </div>
        <div className="container">
          <ul>
          <li className="list-header">Skincare</li>
            <li>Deodorants</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Dropdown6;
