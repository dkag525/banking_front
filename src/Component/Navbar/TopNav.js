import React, { useState } from "react";
import Photo from "../../Photo/Photo";
import magnifyglass from "../../SVG/magnifyglass.svg";

const TopNav = () => {
  const [menuBarList, SetMenuBarList] = useState(true);

  // console.log(menuBarList);
  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  const onMenuclick = () => {
    SetMenuBarList(!menuBarList);
  };

  return (
    <div className={menuBarList === true ? "TopNav" : "TopNav1"}>
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
      <div
        className={menuBarList === true ? "MenuShortList" : "MenuShortList1"}
      >
        <input
          className="Input InputM"
          type="text"
          placeholder="Search"
          style={{
            width: "100px",
            height: "",
            backgroundColor: "#a7a1a1",
            padding: "4px 25px",
          }}
        />
        <p className="MenuShortListItem">Setting</p>
        <p className="MenuShortListItem">Notification</p>
        <img
          className="MenuShortListItem"
          src={Photo.profile_picture}
          alt="ProfilePicture"
          style={{ width: "50px" }}
        />
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
      <div className="MenuBar">
        {menuBarList === true ? (
          <img
            className="ImageMenuBar "
            src={Photo.MenuBar}
            alt="ImageMenuBar"
            name="menu-outline"
            onClick={onMenuclick}
          />
        ) : (
          <img
            className="ImageCrossBar "
            src={Photo.cross}
            alt="ImageCrossBar"
            name="close-outline"
            onClick={onMenuclick}
          />
        )}
      </div>
    </div>
  );
};

export default TopNav;
