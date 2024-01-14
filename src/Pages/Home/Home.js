import React from "react";
import SideNav from "../../Component/Navbar/SideNav";

const Home = () => {
  return (
    <div className="MainContainer">
      <div className="item Header">Header</div>
      <div className="item SideBar">
        <SideNav />
      </div>
      <div className="item Content">Content</div>
    </div>
  );
};

export default Home;
