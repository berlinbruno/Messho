import React from "react";

import "../css/Dropdown.css";

function Dropdown1() {
  return (
    <div className="wrapper">
      <div className="main-container">
        <div className="container">
          <ul>
            <li className="list-header">All Women Ethnic</li>
            <li>View All</li>
          </ul>
        </div>
        <div className="container bg-color">
          <ul>
            <li className="list-header">Sarees</li>
            <li>All Sarees</li>
            <li>Silk Sarees</li>
            <li>Cotton Silk Sarees</li>
            <li>Cotton Sarees</li>
            <li>Georgette Sarees</li>
            <li>Chiffon Sarees</li>
            <li>Satin Sarees</li>
            <li>Embroidered Sarees</li>
          </ul>
        </div>
        <div className="container">
          <ul>
            <li className="list-header">Kurtis</li>
            <li>All Kurtis</li>
            <li>Anarkali Kurtis</li>
            <li>Rayon Kurtis</li>
            <li>Cotton Kurtis</li>
            <li>Embroidered Kurtis</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Dropdown1;
