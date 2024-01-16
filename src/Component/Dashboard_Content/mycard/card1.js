import React from "react";
import Chip_Card_1 from "../../../Images/Chip_Card_1.png";

const card1 = () => {
  return (
    <div className="balance_chip_bar">
      <div className="balance">
        <h6>Balance</h6>
        <h4>$5,756</h4>
      </div>
      <div className="chip">
        <img src={Chip_Card_1} alt="Chip_Card_1" />
      </div>
    </div>
  );
};

export default card1;
