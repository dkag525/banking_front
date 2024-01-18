import React from "react";
import Deposit_icon from "../../../Images/Deposit_icon.png";
import Deposite_Paypal_icon from "../../../Images/Deposite_Paypal_icon.png";
import Jemi_Wilson_icon from "../../../Images/Jemi_Wilson_icon.png";

const RecentTransaction = () => {
  return (
    <>
      <div className="Transaction_Page">
        <div className="head heading-1 Transaction_Heading_Section">
          Recent Transaction
        </div>
        <div className="card-2 Transaction_History">
          <div className="history-1 historySection">
            <div className="Deposit_icon history_icon">
              <img src={Deposit_icon} alt="Deposit_icon" />
            </div>
            <div className="depositeFromMyCard">
              <h3>Deposite From my Card</h3>
              <h3>28 January 2021</h3>
            </div>
            <div className="Price1 price">
              <h4>-$850</h4>
            </div>
          </div>

          <div className="history-2 historySection">
            <div className="Deposite_Paypal_icon">
              <img src={Deposite_Paypal_icon} alt="Deposit_icon" />
            </div>
            <div className="depositPaypal">
              <h3>Deposite Paypal</h3>
              <h3>25 January 2021</h3>
            </div>
            <div className="Price2 price">
              <h4>+$2,500</h4>
            </div>
          </div>
          <div className="history-3 historySection">
            <div className="Jemi_Wilson_icon">
              <img src={Jemi_Wilson_icon} alt="Deposit_icon" />
            </div>
            <div className="jemiWilSon">
              <h3>Jemi Wilson</h3>
              <h3>21 January 2021</h3>
            </div>
            <div className="Price3 price">
              <h4>+$2,500</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentTransaction;
