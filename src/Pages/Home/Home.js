import React from "react";
import SideNav from "../../Component/Navbar/SideNav";
import TopNav from "../../Component/Navbar/TopNav";
import Dashboard_Content from "../../Component/Dashboard_Content/Dashboard_Content";

const Home = () => {
  return (
    <div className="MainContainer">
      <div className="item Header">
        <TopNav />
      </div>
      <div className="item SideBar">
        <SideNav />
      </div>
      <div className="item Content">
        <Dashboard_Content />
      </div>
    </div>
  );
};

export default Home;
