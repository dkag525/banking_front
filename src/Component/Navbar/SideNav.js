import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageArray from "../../ImageArray/imageArray";

const SideNav = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState("");

  const handleclick = (item) => {
    setDetails(item.name);
    navigate(item.route);
  };

  return (
    <div className="SideNav">
      {imageArray.map((item) => (
        <div
          onClick={() => handleclick(item)}
          key={item.id}
          className="Sidebox1"
        >
          <div
            className={details === item.name ? "leftBoarder" : "rightBoarder"}
          ></div>
          <img
            className="SideNavImage"
            src={details === item.name ? item.imageblue : item.image}
            alt={`${item.name}_icon`}
          />
          <h4 className="SidebarMenu">{item.name}</h4>
        </div>
      ))}
    </div>
  );
};
export default SideNav;
