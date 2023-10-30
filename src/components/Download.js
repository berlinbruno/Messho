import React from "react";
import Playstore from "../assets/playstore-icon-big.png"
import Appstore from "../assets/appstore-icon-big.png"

import "../css/Download.css"

const DropdownMenu = () => {
  return (
    <div className="dropdown-download">
        <h4>Download From</h4>
        <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pcampaignid=web_share"><img src={Playstore} alt=""/></a>
        <a href="https://apps.apple.com/us/app/meesho-online-shopping/id1457958492"><img src={Appstore} alt=""/></a>
        
    </div>
  );
};

export default DropdownMenu;