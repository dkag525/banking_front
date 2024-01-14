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
import accounts_blue_icon from "../../ImagesBlue/accounts_blue_icon.png";
import dashboard_blue_icon from "../../ImagesBlue/dashboard_blue_icon.png";
import transaction_blue_icon from "../../ImagesBlue/transaction_blue_icon.png";

const SideNav = () => {
  const [isselected, setIsSelected] = useState("Dashboard");

  const handleClicked = (param) => {
    setIsSelected(param);
  };

  return (
    <div className="SideNav">
      {/* new Line  */}
      {isselected === "Dashboard" ? (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("Dashboard")}
        >
          <div className="sidebars"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={dashboard_blue_icon}
              alt="dashboard_blue_icon"
            />
            <p style={{ color: "#2D60FF" }}>Dashboard</p>
          </div>
        </div>
      ) : (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("Dashboard")}
        >
          <div className="sidebar"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={dashboard_icon}
              alt="dashboard_icon"
            />
            <p>Dashboard</p>
          </div>
        </div>
      )}
      {/* new Line  */}
      {isselected === " Transaction" ? (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("Transaction")}
        >
          <div className="sidebars"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={transaction_blue_icon}
              alt="transaction_blue_icon"
            />
            <p style={{ color: "#2D60FF" }}>Transaction</p>
          </div>
        </div>
      ) : (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("Transaction")}
        >
          <div className="sidebar"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={transaction_icon}
              alt="transaction_icon"
            />
            <p>Transaction</p>
          </div>
        </div>
      )}
      {/* new Line  */}
      <div className="dashboardMainDiv">
        <div className="sidebar"></div>
        <div className="dashboard">
          <img
            className="img dashboardImg"
            src={transaction_icon}
            alt="transaction_icon"
          />
          <p>Accounts</p>
        </div>
      </div>

      {/* new Line  */}
      <div className="dashboardMainDiv">
        <div className="sidebar"></div>
        <div className="dashboard">
          <img
            className="img dashboardImg"
            src={investment_icon}
            alt="investment_icon"
          />
          <p>Investments</p>
        </div>
      </div>
      {/* new Line  */}
      <div className="dashboardMainDiv">
        <div className="sidebar"></div>
        <div className="dashboard">
          <img
            className="img dashboardImg"
            src={credit_card_icon}
            alt="credit_card_icon"
          />
          <p>Credit Cards</p>
        </div>
      </div>
      {/* new Line  */}
      <div className="dashboardMainDiv">
        <div className="sidebar"></div>
        <div className="dashboard">
          <img className="img dashboardImg" src={loan_icon} alt="loan_icon" />
          <p>Loans</p>
        </div>
      </div>
      {/* new Line  */}
      <div className="dashboardMainDiv">
        <div className="sidebar"></div>
        <div className="dashboard">
          <img
            className="img dashboardImg"
            src={service_icon}
            alt="service_icon"
          />
          <p>Services</p>
        </div>
      </div>
      {/* new Line  */}
      <div className="dashboardMainDiv">
        <div className="sidebar"></div>
        <div className="dashboard">
          <img
            className="img dashboardImg"
            src={myPrivileges_icon}
            alt="myPrivileges_icon"
          />
          <p>My Privileges</p>
        </div>
      </div>
      {/* new Line  */}
      <div className="dashboardMainDiv">
        <div className="sidebar"></div>
        <div className="dashboard">
          <img
            className="img dashboardImg"
            src={setting_icon}
            alt="setting_icon"
          />
          <p>Setting</p>
        </div>
      </div>
      {/* new Line  */}
    </div>
  );
};

export default SideNav;
