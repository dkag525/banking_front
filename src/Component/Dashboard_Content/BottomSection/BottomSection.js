import React, { useState } from "react";
import group_1 from "../../../Images/group_1.png";
import group_2 from "../../../Images/group_2.png";
import group_3 from "../../../Images/group_3.png";
import aeroplane from "../../../Images/aeroplane.png";
import Vector1 from "../../../Images/Vector1.png";
import women_1 from "../../../Images/women_1.jpg";
import man_1 from "../../../Images/man_1.jpg";
import man_2 from "../../../Images/man_2.jpg";
// import backArrow from "../../../Images/backArrow.png";
import { LineChart } from "./../../Charts/LineChart";

const BottomSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNextClick = () => {
    let newIndex = 0;
    newIndex = startIndex + 3;
    if (newIndex <= imageArray.length - 1) {
      setStartIndex(newIndex);
    }
  };

  const handlePrevClick = () => {
    let newIndex = startIndex - 3;
    if (newIndex >= 0) {
      setStartIndex(newIndex);
    }
  };

  let imageArray = [
    { id: 1, name: "Randy Press", position: "CEO", image: group_1 },
    { id: 2, name: "Bob", position: "Director", image: group_2 },
    { id: 3, name: "Charlie", position: "Designer", image: group_3 },
    { id: 4, name: "David", position: "PhotoGrapher", image: group_1 },
    { id: 5, name: "Eva", position: "HR", image: group_2 },
    { id: 6, name: "Goege", position: "CM", image: women_1 },
    { id: 7, name: "Meloni", position: "Manager", image: man_2 },
    { id: 8, name: "Bush", position: "Admin", image: man_1 },
    { id: 9, name: "Lenna", position: "Minister", image: women_1 },
  ];

  return (
    <div className="BottomSection">
      <div className="BottomSec_1">
        <div className="transferTop">
          <h3 className="Gsec-1">Quick Transfer</h3>
        </div>
        <div className="transferBottom">
          <div className="groupSec">
            {/* Card 1 */}

            <button
              className="btn"
              style={{ marginRight: "2rem" }}
              onClick={handlePrevClick}
            >
              <img
                style={{
                  width: "25px",
                  height: "25px",
                  transform: "scaleX(-1)",
                }}
                src={Vector1}
                alt="vector"
              />
            </button>

            {imageArray.slice(startIndex, startIndex + 3).map((person) => (
              <div className="imgSec" key={person.id}>
                <img
                  style={{
                    marginBottom: "10px",
                    width: "6rem",
                    height: "6rem",
                    borderRadius: "50%",
                  }}
                  src={person.image}
                  alt="group_1"
                />
                <p style={{ fontFamily: "mono" }}>{person.name}</p>
                <p style={{ fontSize: "12px", color: "#718EBF" }}>
                  {person.position}
                </p>
              </div>
            ))}

            {/* ............. */}
            <button className="btn">
              <img
                style={{ width: "25px", height: "25px" }}
                src={Vector1}
                alt="vector"
                onClick={handleNextClick}
                // disabled={startIndex === 0}
              />
            </button>
          </div>

          <div className="AmountSec">
            <div className="WriteSec">
              <div className="writeMsg">Write Amount</div>
              <div className="price_1">
                <input type="text" placeholder="525.50" className="Amount" />
                <div className="send">
                  Send{" "}
                  <img
                    style={{ marginLeft: "10px" }}
                    src={aeroplane}
                    alt="aeroplane"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="BottomSec_2">
        <div className="balHistory Gsec-1">Balance History</div>
        <div className="lineGraph">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
