import React, { useState } from "react";

const Cards = ({ CardImage, CircleImage }) => {
  return (
    <>
      <div className="AtmCardfrontSide card">
        <div className="balance ATM-details">
          <div className="bal-top">
            <p className="bal1">Balance</p>
            <p className="bal2">$5,756</p>
          </div>
          <div>
            <img src={CardImage} alt="Chip_Card_1" />
          </div>
        </div>
        <div className="Card-Holder-Name ATM-details">
          <div className="bal-top">
            <p className="bal1">CARD HOLDER</p>
            <p className="bal2">Eddy Cusuma</p>
          </div>
          <div className="bal-middle">
            <p className="bal3">VALID THRU</p>
            <p className="bal4">12/22</p>
          </div>
        </div>
        <div className="ATM-Card-Number ATM-details">
          <p>3778**** ****1234</p>
          <img src={CircleImage} alt="CircleBlack" />
        </div>
      </div>
    </>
  );
};

export default Cards;
