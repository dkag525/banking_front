import React, { useState } from "react";
import Photo from "../../Photo/Photo";
import { useNavigate } from "react-router-dom";

let imageArray = [
  {
    id: 1,
    route: "dashboard",
    name: "Dashboard",
    image: Photo.dashboard_icon,
    imageblue: Photo.dashboard_blue_icon,
  },
  {
    id: 2,
    route: "transaction",
    name: "Transaction",
    image: Photo.transaction_icon,
    imageblue: Photo.transaction_blue_icon,
  },
  {
    id: 3,
    route: "accounts",
    name: "Accounts",
    image: Photo.account_icon,
    imageblue: Photo.accounts_blue_icon,
  },
  {
    id: 4,
    route: "investments",
    name: "Investments",
    image: Photo.investment_icon,
    imageblue: Photo.investment_blue_icon,
  },
  {
    id: 5,
    route: "creditcards",
    name: "Credit Cards",
    image: Photo.credit_card_icon,
    imageblue: Photo.credit_card_blue_icon,
  },
  {
    id: 6,
    route: "loans",
    name: "Loans",
    image: Photo.loan_icon,
    imageblue: Photo.loan_blue_icon,
  },
  {
    id: 7,
    route: "services",
    name: "Services",
    image: Photo.service_icon,
    imageblue: Photo.services_blue_icon,
  },
  {
    id: 8,
    route: "myprivileges",
    name: "My Privileges",
    image: Photo.myPrivileges_icon,
  },
  {
    id: 9,
    route: "setting",
    name: "Setting",
    image: Photo.setting_icon,
    // imageblue: setting_blue_icon,
  },
];

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
