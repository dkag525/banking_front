import React from "react";
import Chip_Card_1 from "../../../Images/Chip_Card_1.png";
import Circle from "../../../Images/Circle.png";

const card1 = () => {
  return (
    <>
      <div className="balance_chip_bar">
        <div className="balance">
          <h6>Balance</h6>
          <h4>$5,756</h4>
        </div>
        <div className="chip">
          <img src={Chip_Card_1} alt="Chip_Card_1" />
        </div>
      </div>
      <div className="cardHolderSection">
        <div className="cardHolderName">
          <h5 className="Card_Holder">CARD HOLDER</h5>
          <h6 className="Name">Eddy Cusuma</h6>
        </div>
        <div className="ExpiryDate">
          <h5 className="Card_Holder">VALID THRU</h5>
          <h6 className="Name">12/22</h6>
        </div>
      </div>
      <div className="CardNumberSection">
        <div className="CardNumber">
          <h6 className="NameNumber">3778**** ****1234</h6>
        </div>
        <div className="CardNumberIcon">
          <img src={Circle} alt="Circle" />
        </div>
      </div>
    </>
  );
};

export default card1;
