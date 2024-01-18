import React from "react";
import Chip_Card_1 from "../../../Images/Chip_Card_1.png";
import CircleBlack from "../../../Images/CircleBlack.png";

const card2 = () => {
  return (
    <>
      <div className="balance_chip_bar">
        <div className="balance">
          <h6 className="Bal">Balance</h6>
          <h4>$5,756</h4>
        </div>
        <div className="chip">
          <img src={Chip_Card_1} alt="Chip_Card_1" />
        </div>
      </div>
      <div className="cardHolderSection">
        <div className="cardHolderName">
          <h5 className="Card_Holder1">CARD HOLDER</h5>
          <h6 className="Name1">Eddy Cusuma</h6>
        </div>
        <div className="ExpiryDate">
          <h5 className="Card_Holder1">VALID THRU</h5>
          <h6 className="Name1">12/22</h6>
        </div>
      </div>
      <div className="CardNumberSection">
        <div className="CardNumber">
          <h6 className="NameNumber1">3778**** ****1234</h6>
        </div>
        <div className="CardNumberIcon">
          <img src={CircleBlack} alt="Circle" />
        </div>
      </div>
    </>
  );
};

export default card2;
