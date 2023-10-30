import { ReactComponent as Meesho } from "../assets/Meesho.svg";
import { ReactComponent as Search } from "../assets/Search.svg";
import { ReactComponent as Mobile } from "../assets/Mobile.svg";
import { ReactComponent as Profile } from "../assets/Profile.svg";
import { ReactComponent as Cart } from "../assets/Cart.svg";
import "../css/Nav.css";

import { useState } from "react";

import DropDownDownload from "../components/Download";
import DropDownProfile from"../components/Profile";
import DropDown1 from"../components/Dropdown1";
import DropDown2 from"../components/Dropdown2";
import DropDown3 from"../components/Dropdown3";
import DropDown4 from"../components/Dropdown4";
import DropDown5 from"../components/Dropdown5";
import DropDown6 from"../components/Dropdown6";
import DropDown7 from"../components/Dropdown7";
import DropDown8 from"../components/Dropdown8";
import DropDown9 from"../components/Dropdown9";


function Nav() {

  const [isDropdownDownloadVisible, setDropdownDownloadVisible] = useState(false);
  const [isDropdownProfileVisible, setDropdownProfileVisible] = useState(false);
  const [isDropdown1Visible, setDropdown1Visible] = useState(false);
  const [isDropdown2Visible, setDropdown2Visible] = useState(false);
  const [isDropdown3Visible, setDropdown3Visible] = useState(false);
  const [isDropdown4Visible, setDropdown4Visible] = useState(false);
  const [isDropdown5Visible, setDropdown5Visible] = useState(false);
  const [isDropdown6Visible, setDropdown6Visible] = useState(false);
  const [isDropdown7Visible, setDropdown7Visible] = useState(false);
  const [isDropdown8Visible, setDropdown8Visible] = useState(false);
  const [isDropdown9Visible, setDropdown9Visible] = useState(false);
  
  const handleDownloadMouseEnter = () => {
    setDropdownDownloadVisible(true);
  };

  const handleDownloadMouseLeave = () => {
    setDropdownDownloadVisible(false);
  };
  const handleProfileMouseEnter = () => {
    setDropdownProfileVisible(true);
    setDropdownDownloadVisible(false);
    setDropdown1Visible(false);
    setDropdown2Visible(false);
    setDropdown3Visible(false);
    setDropdown4Visible(false);
    setDropdown5Visible(false);
    setDropdown6Visible(false);
    setDropdown7Visible(false);
    setDropdown8Visible(false);
    setDropdown9Visible(false);
  };

  const handleProfileMouseLeave = () => {
    setDropdownProfileVisible(false);
  };

  const handle1MouseEnter = () => {
    setDropdown1Visible(true);
    setDropdownDownloadVisible(false);
    setDropdownProfileVisible(false);
    setDropdown2Visible(false);
    setDropdown3Visible(false);
    setDropdown4Visible(false);
    setDropdown5Visible(false);
    setDropdown6Visible(false);
    setDropdown7Visible(false);
    setDropdown8Visible(false);
    setDropdown9Visible(false);
  };

  const handle1MouseLeave = () => {
    setDropdown1Visible(false);
  };

  const handle2MouseEnter = () => {
    setDropdown2Visible(true);
  };

  const handle2MouseLeave = () => {
    setDropdown2Visible(false);
  };

  const handle3MouseEnter = () => {
    setDropdown3Visible(true);
  };

  const handle3MouseLeave = () => {
    setDropdown3Visible(false);
  };

  const handle4MouseEnter = () => {
    setDropdown4Visible(true);
  };

  const handle4MouseLeave = () => {
    setDropdown4Visible(false);
  };

  const handle5MouseEnter = () => {
    setDropdown5Visible(true);
  };

  const handle5MouseLeave = () => {
    setDropdown5Visible(false);
  };

  const handle6MouseEnter = () => {
    setDropdown6Visible(true);
    setDropdownDownloadVisible(false);
    setDropdownProfileVisible(false);
    setDropdown1Visible(false);
    setDropdown2Visible(false);
    setDropdown3Visible(false);
    setDropdown4Visible(false);
    setDropdown5Visible(false);
    setDropdown7Visible(false);
    setDropdown8Visible(false);
    setDropdown9Visible(false);
  };

  const handle6MouseLeave = () => {
    setDropdown6Visible(false);
  };

  const handle7MouseEnter = () => {
    setDropdown7Visible(true);
    setDropdownDownloadVisible(false);
    setDropdownProfileVisible(false);
    setDropdown1Visible(false);
    setDropdown2Visible(false);
    setDropdown3Visible(false);
    setDropdown4Visible(false);
    setDropdown5Visible(false);
    setDropdown6Visible(false);
    setDropdown8Visible(false);
    setDropdown9Visible(false);
  };

  const handle7MouseLeave = () => {
    setDropdown7Visible(false);
  };
  const handle8MouseEnter = () => {
    setDropdown8Visible(true);
    setDropdownDownloadVisible(false);
    setDropdownProfileVisible(false);
    setDropdown1Visible(false);
    setDropdown2Visible(false);
    setDropdown3Visible(false);
    setDropdown4Visible(false);
    setDropdown5Visible(false);
    setDropdown6Visible(false);
    setDropdown7Visible(false);
    setDropdown9Visible(false);
  };

  const handle8MouseLeave = () => {
    setDropdown8Visible(false);
  };
  const handle9MouseEnter = () => {
    setDropdown9Visible(true);
    setDropdownDownloadVisible(false);
    setDropdownProfileVisible(false);
    setDropdown1Visible(false);
    setDropdown2Visible(false);
    setDropdown3Visible(false);
    setDropdown4Visible(false);
    setDropdown5Visible(false);
    setDropdown6Visible(false);
    setDropdown7Visible(false);
    setDropdown8Visible(false);
  };

  const handle9MouseLeave = () => {
    setDropdown9Visible(false);
  };

    

    
  return (
    <div className="main">
      <div className="row">
        <div className="section">
            <div className="header">
                <a href="/"><Meesho className="logo" /></a>
            </div>
        <div className="search">
          <div className="search-1">
            <div className="search-icon">
              <Search />
            </div>
            <input
              className="search-input"
              type="text"
              placeholder="Try Saree, Kurti or Search by Product Code"
            />
          </div>
        </div>
        <div className="section-1">
          <div className={"container-1"+ isDropdownDownloadVisible} onMouseLeave={handleDownloadMouseLeave} onMouseEnter={handleDownloadMouseEnter}>
            <Mobile className={"icon"+ isDropdownDownloadVisible}/>
            <span font-size="16px" font-weight="book" color="#353543" className={"style-1"+ isDropdownDownloadVisible}>
              Download App
            </span>
            <div className="download-dropdown"  onMouseEnter={handleDownloadMouseEnter}>{isDropdownDownloadVisible && <DropDownDownload />}</div>
          </div>
          
          <div className="separator"></div>
          <div className="container-1">
            <a href="https://supplier.meesho.com/">
              <span font-size="16px" font-weight="book" color="#353543" className="style-1 pointer">
              Become a Supplier
            </span>
            </a>
          </div>
          <div className="separator"></div>
          <div className="container-1">
            <a href="https://www.meesho.io/news"><span font-size="16px" font-weight="book" color="#353543" className="style-1 pointer">
              Newsroom
            </span></a>
          </div>
          <div className={"container-2"+ isDropdownProfileVisible} onMouseLeave={handleProfileMouseLeave} onMouseEnter={handleProfileMouseEnter}>
            <Profile className={"icon"+ isDropdownProfileVisible}/>
            <span font-size="16px" font-weight="book" color="#353543" className={"style-1"+ isDropdownProfileVisible}>
              Profile
            </span>
            <div className="profile-dropdown"  onMouseEnter={handleProfileMouseEnter}>{isDropdownProfileVisible && <DropDownProfile />}</div>
          </div>
          <div className="container-2 pointer">
            <Cart className="icon"/>
            <span font-size="16px" font-weight="book" color="#353543" className="style-1">
              Cart
            </span>
          </div>
        </div>
        </div>
      </div>
      <div className="row-separator"></div>
      <div className="row">
        <div className="section-2">
        <div className="dropdown" onMouseLeave={handle1MouseLeave} onMouseEnter={handle1MouseEnter}>{isDropdown1Visible && <DropDown1 />}</div>
        <div className="dropdown" onMouseLeave={handle2MouseLeave} onMouseEnter={handle2MouseEnter}>{isDropdown2Visible && <DropDown2 />}</div>
        <div className="dropdown" onMouseLeave={handle3MouseLeave} onMouseEnter={handle3MouseEnter}>{isDropdown3Visible && <DropDown3 />}</div>
        <div className="dropdown" onMouseLeave={handle4MouseLeave} onMouseEnter={handle4MouseEnter}>{isDropdown4Visible && <DropDown4 />}</div>
        <div className="dropdown" onMouseLeave={handle5MouseLeave} onMouseEnter={handle5MouseEnter}>{isDropdown5Visible && <DropDown5 />}</div>
        <div className="dropdown" onMouseLeave={handle6MouseLeave} onMouseEnter={handle6MouseEnter}>{isDropdown6Visible && <DropDown6 />}</div>
        <div className="dropdown" onMouseLeave={handle7MouseLeave} onMouseEnter={handle7MouseEnter}>{isDropdown7Visible && <DropDown7 />}</div>
        <div className="dropdown" onMouseLeave={handle8MouseLeave} onMouseEnter={handle8MouseEnter}>{isDropdown8Visible && <DropDown8 />}</div>
        <div className="dropdown" onMouseLeave={handle9MouseLeave} onMouseEnter={handle9MouseEnter}>{isDropdown9Visible && <DropDown9 />}</div>


            <div className={"container-3"+ isDropdown1Visible} onMouseLeave={handle1MouseLeave} onMouseEnter={handle1MouseEnter}> 
                <span font-size="16px" font-weight="book" color="greyBase" class={"style-1"+(isDropdown1Visible)} className="pointer">Women Ethnic</span>
                
            </div>
            <div className={"container-3"+ isDropdown2Visible} onMouseLeave={handle2MouseLeave} onMouseEnter={handle2MouseEnter}>
                <span font-size="16px" font-weight="book" color="greyBase" className={"style-1"+(isDropdown2Visible)} class="pointer">Women Western</span>
                
            </div>
            <div className={"container-3"+ isDropdown3Visible} onMouseLeave={handle3MouseLeave} onMouseEnter={handle3MouseEnter}>
                <span font-size="16px" font-weight="book" color="greyBase" className={"style-1"+(isDropdown3Visible)} class="pointer">Men</span>
                
            </div>
            <div className={"container-3"+ isDropdown4Visible} onMouseLeave={handle4MouseLeave} onMouseEnter={handle4MouseEnter}>
                <span font-size="16px" font-weight="book" color="greyBase" className={"style-1"+(isDropdown4Visible)} class="pointer">Kids</span>
                
            </div>
            <div className={"container-3"+ isDropdown5Visible} onMouseLeave={handle5MouseLeave} onMouseEnter={handle5MouseEnter}>
                <span font-size="16px" font-weight="book" color="greyBase" className={"style-1"+(isDropdown5Visible)} class="pointer">Home & Kitchen</span>
                
            </div>
            <div className={"container-3"+ isDropdown6Visible} onMouseLeave={handle6MouseLeave} onMouseEnter={handle6MouseEnter}>
                <span font-size="16px" font-weight="book" color="greyBase" className={"style-1"+(isDropdown6Visible)} class="pointer">Beauty & Health</span>
                
            </div>
            <div className={"container-3"+ isDropdown7Visible} onMouseLeave={handle7MouseLeave} onMouseEnter={handle7MouseEnter}>
                <span font-size="16px" font-weight="book" color="greyBase" className={"style-1"+(isDropdown7Visible)} class="pointer">Jewellery & Accessories</span>
                
            </div>
            <div className={"container-3"+ isDropdown8Visible} onMouseLeave={handle8MouseLeave} onMouseEnter={handle8MouseEnter}>
                <span font-size="16px" font-weight="book" color="greyBase" className={"style-1"+(isDropdown8Visible)} class="pointer">Bags & Footwear</span>
                
            </div>
            <div className={"container-3"+ isDropdown9Visible} onMouseLeave={handle9MouseLeave} onMouseEnter={handle9MouseEnter}>
                <span font-size="16px" font-weight="book" color="greyBase" className={"style-1"+(isDropdown9Visible)} class="pointer">Electronic</span>
                
            </div>
        </div>
      </div>
      <div className="row-separator"></div>
    </div>
  );
}
export default Nav;
