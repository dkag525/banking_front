import React, { useState } from "react";
import iconfinder_1 from "../../Images/iconfinder_1.png";
import account_icon from "../../Images/account_icon.png";
import Chip_Card_1 from "../../Images/Chip_Card_1.png";
import credit_card_icon from "../../Images/credit-card_icon.png";
import dashboard_icon from "../../Images/dashboard_icon.png";
import investment_icon from "../../Images/investment_icon.png";
import loan_icon from "../../Images/loan_icon.png";
import myPrivileges_icon from "../../Images/myPrivileges_icon.png";
import service_icon from "../../Images/service_icon.png";
import setting_icon from "../../Images/setting_icon.png";
import transaction_icon from "../../Images/transaction_icon.png";
// import * as images from "../../Images";

const SideNav = () => {
  const [selected, setSelected] = useState("Dashboard");

  const functionColorChange = (param) => {
    setSelected(param);
  };

  return (
    <div className="sidenav">
      <div className="iconfinder_1">
        <img src={iconfinder_1} alt="iconfinder" />
        <h2>BankDash.</h2>
      </div>
      <div className="sidenavOption">
        <div className="Option">
          <ul className="OptionList_UL">
            <li
              style={
                selected === "Dashboard" ? { borderLeft: "2px solid blue" } : {}
              }
              onClick={() => functionColorChange("Dashboard")}
              className="list A"
            >
              <img src={dashboard_icon} alt="dashboard_icon" />
              <p style={selected === "Dashboard" ? { color: "blue" } : {}}>
                Dashboard
              </p>
            </li>
            <li
              style={
                selected === "Transaction"
                  ? { borderLeft: "2px solid blue" }
                  : {}
              }
              onClick={() => functionColorChange("Transaction")}
              className="list B"
            >
              <img src={transaction_icon} alt="transaction_icon" />
              <p style={selected === "Transaction" ? { color: "blue" } : {}}>
                Transaction
              </p>
            </li>
            <li
              style={
                selected === "Accounts" ? { borderLeft: "2px solid blue" } : {}
              }
              onClick={() => functionColorChange("Accounts")}
              className="list C"
            >
              <img src={account_icon} alt="account_icon" />
              <p style={selected === "Accounts" ? { color: "blue" } : {}}>
                Accounts
              </p>
            </li>
            <li
              style={
                selected === "Investments"
                  ? { borderLeft: "2px solid blue" }
                  : {}
              }
              onClick={() => functionColorChange("Investments")}
              className="list D"
            >
              <img src={investment_icon} alt="investment_icon" />
              <p style={selected === "Investments" ? { color: "blue" } : {}}>
                Investments
              </p>
            </li>
            <li
              style={
                selected === "Credit" ? { borderLeft: "2px solid blue" } : {}
              }
              onClick={() => functionColorChange("Credit")}
              className="list E"
            >
              <img src={credit_card_icon} alt="credit_card_icon" />
              <p style={selected === "Credit" ? { color: "blue" } : {}}>
                Credit Cards
              </p>
            </li>
            <li
              style={
                selected === "Loans" ? { borderLeft: "2px solid blue" } : {}
              }
              onClick={() => functionColorChange("Loans")}
              className="list F"
            >
              <img src={loan_icon} alt="loan_icon" />
              <p style={selected === "Loans" ? { color: "blue" } : {}}>Loans</p>
            </li>
            <li
              style={
                selected === "Services" ? { borderLeft: "2px solid blue" } : {}
              }
              onClick={() => functionColorChange("Services")}
              className="list G"
            >
              <img src={service_icon} alt="service_icon" />
              <p style={selected === "Services" ? { color: "blue" } : {}}>
                Services
              </p>
            </li>
            <li
              style={
                selected === "Privileges"
                  ? { borderLeft: "2px solid blue" }
                  : {}
              }
              onClick={() => functionColorChange("Privileges")}
              className="list H"
            >
              <img src={myPrivileges_icon} alt="myPrivileges_icon" />
              <p style={selected === "Privileges" ? { color: "blue" } : {}}>
                My Privileges
              </p>
            </li>
            <li
              style={
                selected === "Setting" ? { borderLeft: "2px solid blue" } : {}
              }
              onClick={() => functionColorChange("Setting")}
              className="list I"
            >
              <img src={setting_icon} alt="setting_icon" />
              <p style={selected === "Setting" ? { color: "blue" } : {}}>
                Setting
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
