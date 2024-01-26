import React, { useState } from "react";
import Photo from "../../Photo/Photo";
// import { useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();

  const [isselected, setIsSelected] = useState("Dashboard");

  const handleClicked = (param) => {
    setIsSelected(param);
    if (isselected === "Dashboard") {
      navigate("/");
    } else if (isselected === "Transaction") {
      navigate("/transaction");
    } else if (isselected === "Accounts") {
      navigate("/accounts");
    } else if (isselected === "investments") {
      navigate("/investment");
    } else if (isselected === "credit") {
      navigate("/credit_card");
    } else if (isselected === "loan") {
      navigate("/loans");
    } else if (isselected === "services") {
      navigate("/services");
    } else if (isselected === "Setting") {
      navigate("/settings");
    }
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
              src={Photo.dashboard_blue_icon}
              alt="dashboard_blue_icon"
            />
            <Link to="/" style={{ color: "#2D60FF" }}>
              Dashboard
            </Link>
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
              src={Photo.dashboard_icon}
              alt="dashboard_icon"
            />
            <p>Dashboard</p>
          </div>
        </div>
      )}
      {/* new Line  */}
      {isselected === "Transaction" ? (
        <div
          // to={"/transaction"}
          className="dashboardMainDiv"
          onClick={() => handleClicked("Transaction")}
        >
          <div className="sidebars"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={Photo.transaction_blue_icon}
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
              src={Photo.transaction_icon}
              alt="transaction_icon"
            />
            <p>Transaction</p>
          </div>
        </div>
      )}
      {/* new Line  */}
      {isselected === "Accounts" ? (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("Accounts")}
        >
          <div className="sidebars"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={Photo.accounts_blue_icon}
              alt="accounts_blue_icon"
            />
            <p style={{ color: "#2D60FF" }}>Accounts</p>
          </div>
        </div>
      ) : (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("Accounts")}
        >
          <div className="sidebar"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={Photo.account_icon}
              alt="accounts_icon"
            />
            <p>Accounts</p>
          </div>
        </div>
      )}
      {/* new Line  */}

      {isselected === "investments" ? (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("investments")}
        >
          <div className="sidebars"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={Photo.investment_blue_icon}
              alt="investment_blue_icon"
            />
            <p style={{ color: "#2D60FF" }}>Investments</p>
          </div>
        </div>
      ) : (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("investments")}
        >
          <div className="sidebar"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={Photo.investment_icon}
              alt="investment_icon"
            />
            <p>Investments</p>
          </div>
        </div>
      )}

      {/* new Line  */}

      {isselected === "credit" ? (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("credit")}
        >
          <div className="sidebars"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={Photo.credit_card_blue_icon}
              alt="credit_card_blue_icon"
            />
            <p style={{ color: "#2D60FF" }}>Credit Cards</p>
          </div>
        </div>
      ) : (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("credit")}
        >
          <div className="sidebar"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={Photo.credit_card_icon}
              alt="credit_card_icon"
            />
            <p>Credit Cards</p>
          </div>
        </div>
      )}

      {/* new Line  */}

      {isselected === "loan" ? (
        <div className="dashboardMainDiv" onClick={() => handleClicked("loan")}>
          <div className="sidebars"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={Photo.loan_blue_icon}
              alt="loan_blue_icon"
            />
            <p style={{ color: "#2D60FF" }}>Loans</p>
          </div>
        </div>
      ) : (
        <div className="dashboardMainDiv" onClick={() => handleClicked("loan")}>
          <div className="sidebar"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={Photo.loan_icon}
              alt="loan_icon"
            />
            <p>Loans</p>
          </div>
        </div>
      )}

      {/* new Line  */}

      {isselected === "services" ? (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("services")}
        >
          <div className="sidebars"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={Photo.services_blue_icon}
              alt="services_blue_icon"
            />
            <p style={{ color: "#2D60FF" }}>Services</p>
          </div>
        </div>
      ) : (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("services")}
        >
          <div className="sidebar"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={Photo.service_icon}
              alt="service_icon"
            />
            <p>Services</p>
          </div>
        </div>
      )}

      {/* new Line  */}

      {isselected === "privileges" ? (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("privileges")}
        >
          <div className="sidebars"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={Photo.myPrivileges_icon}
              alt="myPrivileges_icon"
            />
            <p style={{ color: "#2D60FF" }}>My Privileges</p>
          </div>
        </div>
      ) : (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("privileges")}
        >
          <div className="sidebar"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={Photo.myPrivileges_icon}
              alt="myPrivileges_icon"
            />
            <p>My Privileges</p>
          </div>
        </div>
      )}

      {/* new Line  */}

      {isselected === "Setting" ? (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("Setting")}
        >
          <div className="sidebars"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={Photo.setting_blue_icon}
              alt="setting_blue_icon"
            />
            <p style={{ color: "#2D60FF" }}>Setting</p>
          </div>
        </div>
      ) : (
        <div
          className="dashboardMainDiv"
          onClick={() => handleClicked("Setting")}
        >
          <div className="sidebar"></div>
          <div className="dashboard">
            <img
              className="img dashboardImg"
              src={Photo.setting_icon}
              alt="setting_icon"
            />
            <p>Setting</p>
          </div>
        </div>
      )}

      {/* new Line  */}
    </div>
  );
};

export default SideNav;
