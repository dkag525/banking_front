import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageArray from "../../ImageArray/imageArray";

const SideNav = () => {
  const navigate = useNavigate();
  // const [blueImage, setBlueImage] = useState("");

  const handleclick = (item) => {
    console.log(item);

    if (item.route === "dashboard") {
      navigate("/");
    } else if (item.route === "transaction") {
      navigate("/transaction");
    } else if (item.route === "accounts") {
      navigate("/accounts");
    } else if (item.route === "investments") {
      navigate("/investments");
    } else if (item.route === "creditcards") {
      navigate("/credit_card");
    } else if (item.route === "loans") {
      navigate("/loans");
    } else if (item.route === "services") {
      navigate("/services");
    } else if (item.route === "setting") {
      navigate("/settings");
    }
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
// src={item.route === "transaction" ? item.imageblue : item.image}
export default SideNav;
