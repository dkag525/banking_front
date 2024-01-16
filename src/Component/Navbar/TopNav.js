import React, { useState } from "react";
import iconfinder_1 from "../../Images/iconfinder_1.png";
import magnifyglass from "../../SVG/magnifyglass.svg";
import Setting_Symbol from "../../Images/Setting_Symbol.png";
import bell_icon from "../../Images/bell_icon.png";
import profile_picture from "../../Images/profile_picture.png";

const TopNav = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="TopNav">
      <div className="Navbar">
        <div className="bankdashimg">
          <img src={iconfinder_1} alt="iconfinder_1" />
          <h3 className="BankDash">BankDash.</h3>
        </div>
        <div className="Navbar_1">
          <div className="OverView">
            <h2>OverView</h2>
          </div>
          <div
            style={{
              display: "flex",
              // border: "1px solid black",
              width: "100%",
              alignItems: "center",
              justifyContent: "end",
              gap: "15px",
              // flexWrap: "wrap",
            }}
          >
            <div className="Searchbar">
              <i>
                <img src={magnifyglass} alt="magnifyglass" />
              </i>
              <input
                onChange={handleSearch}
                className="input"
                type="text"
                placeholder="Search for something"
                value={searchQuery}
              />
            </div>
            <div>
              <img src={Setting_Symbol} alt="Setting_Symbol" />
            </div>
            <div>
              <img src={bell_icon} alt="bell_icon" />
            </div>
            <div>
              <img src={profile_picture} alt="profile_picture" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
