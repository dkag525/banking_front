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

  useEffect(() => {
    const ATMCardColor = () => {
      if (backgroundcolor === "backgroundcolorblue") {
        setColor("AtmCardfrontSide");
      } else if (backgroundcolor === "backgroundcolorwhite") {
        setColor("AtmCardbackSide");
      }
    };

    ATMCardColor();
  }, [backgroundcolor]);

  useEffect(() => {
    const ATMCardColors = () => {
      if (cardname === "white") {
        setNewColor("bal-top");
      } else if (cardname === "black") {
        setNewColor("bal-tops");
      }
    };

    ATMCardColors();
  }, [cardname]);

  useEffect(() => {
    const ATMCardColorss = () => {
      if (balmiddle === "white") {
        setNewColors("bal-middle");
      } else if (balmiddle === "black") {
        setNewColors("bal-middles");
      }
    };

    ATMCardColorss();
  }, [balmiddle]);

  useEffect(() => {
    const ATMCardColorsss = () => {
      if (atmcardnumber === "blue") {
        setNewColornumber("ATM-Card-Number");
      } else if (atmcardnumber === "white") {
        setNewColornumber("ATM-Card-Numbers");
      }
    };

    ATMCardColorsss();
  }, [atmcardnumber]);

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
