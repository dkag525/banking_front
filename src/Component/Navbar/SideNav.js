import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageArray from "../../ImageArray/imageArray";

const SideNav = () => {
  const navigate = useNavigate();
  // const [blueImage, setBlueImage] = useState("");

  const handleclick = (item) => {
    console.log(item);
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
          <div className="leftBoarder"></div>
          <img src={item.image} alt={`${item.name}_icon`} />
          <h4 className="SidebarMenu">{item.name}</h4>
        </div>
      ))}
    </div>
  );
};
// src={item.id === "transaction" ? item.imageblue : item.image}
export default SideNav;
