import React, { useEffect, useState } from "react";

const Cards = ({
  CardImage,
  CircleImage,
  backgroundcolor,
  cardname,
  balmiddle,
  atmcardnumber,
}) => {
  const [color, setColor] = useState("");
  const [newColor, setNewColor] = useState("");
  const [newColors, setNewColors] = useState("");
  const [newColornumber, setNewColornumber] = useState("");

  useEffect(() =>
    setColor(
      backgroundcolor === "backgroundcolorblue"
        ? "AtmCardfrontSide"
        : "AtmCardbackSide",
      [backgroundcolor]
    )
  );

  useEffect(() =>
    setNewColor(cardname === "white" ? "bal-top" : "bal-tops", [cardname])
  );

  useEffect(() =>
    setNewColors(balmiddle === "white" ? "bal-middle" : "bal-middles", [
      balmiddle,
    ])
  );

  useEffect(() =>
    setNewColornumber(
      atmcardnumber === "blue" ? "ATM-Card-Number" : "ATM-Card-Numbers",
      [atmcardnumber]
    )
  );

  return (
    <>
      <div className={`card ${color}`}>
        <div className="balance ATM-details">
          <div className={`${newColor}`}>
            <p className="bal1 ">Balance</p>
            <p className="bal2 ">$5,756</p>
          </div>
          <div>
            <img src={CardImage} alt="Chip_Card_1" />
          </div>
        </div>
        <div className="Card-Holder-Name ATM-details">
          <div className={`${newColor}`}>
            <p className="bal1">CARD HOLDER</p>
            <p className="bal2">Eddy Cusuma</p>
          </div>
          <div className={`${newColors}`}>
            <p className="bal3">VALID THRU</p>
            <p className="bal4">12/22</p>
          </div>
        </div>
        <div className={`ATM-details ${newColornumber}`}>
          <p>3778**** ****1234</p>
          <img src={CircleImage} alt="CircleBlack" />
        </div>
      </div>
    </>
  );
};

export default Cards;
