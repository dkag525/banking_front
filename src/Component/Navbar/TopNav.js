import React, { useState } from "react";
import Photo from "../../Photo/Photo";
import magnifyglass from "../../SVG/magnifyglass.svg";
import Setting_Symbol from "../../Images/Setting_Symbol.png";
import bell_icon from "../../Images/bell_icon.png";

const TopNav = () => {
  // const [searchQuery, setSearchQuery] = useState("");

  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  return (
    <div className="TopNav">
      <div className="topnavChildA NavChild">
        <div className="Iconfinder_logo">
          <img
            className="Iconfinder_image"
            src={Photo.iconfinder_1}
            alt="Iconfinder_logo"
          />
        </div>
        <h1 className="BankDash">BankDash.</h1>
      </div>
      <div className="topnavChildB NavChild">
        <h6 className="heading">Overview</h6>
      </div>
      <div className="topnavChildC NavChild">
        <div className="SearchBar RightPanelTopNav">
          <img
            className="magnifyglass_Image"
            src={magnifyglass}
            alt="magnifyglass"
          />
          <input
            className="Input"
            type="text"
            placeholder="Search For SomeThing"
          />
        </div>
        <div className="Setting_icon RightPanelTopNav">
          <img
            className="Setting_Icon_image"
            src={Photo.Setting_Symbol}
            alt="Setting_icon"
          />
        </div>
        <div className="Bell_Icon RightPanelTopNav">
          <img
            className="Bell_Icon_Image"
            src={Photo.bell_icon}
            alt="Bell_Icon"
          />
        </div>
        <div className="Profile_Picture RightPanelTopNav">
          <img
            className="Profile_Image"
            src={Photo.profile_picture}
            alt="Profile_Image"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
