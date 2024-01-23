import React from "react";
import group_1 from "../../../Images/group_1.png";
import group_2 from "../../../Images/group_2.png";
import group_3 from "../../../Images/group_3.png";
import aeroplane from "../../../Images/aeroplane.png";

const BottomSection = () => {
  return (
    <div className="BottomSection">
      <div className="BottomSec_1">
        <div className="transferTop">
          <h3 className="Gsec-1">Quick Transfer</h3>
        </div>
        <div className="transferBottom">
          <div className="groupSec">
            {/* Card 1 */}

            <div className="imgSec">
              <img
                style={{ marginBottom: "10px" }}
                src={group_1}
                alt="group_1"
              />
              <p style={{ fontFamily: "mono" }}>Randy Press</p>
              <p style={{ fontSize: "12px", color: "#718EBF" }}>Director</p>
            </div>

            {/* Card 1 */}

            <div className="imgSec">
              <img
                style={{ marginBottom: "10px" }}
                src={group_1}
                alt="group_1"
              />
              <p style={{ fontFamily: "mono" }}>Randy Press</p>
              <p style={{ fontSize: "12px", color: "#718EBF" }}>Director</p>
            </div>

            {/* Card 1 */}

            <div className="imgSec">
              <img
                style={{ marginBottom: "10px" }}
                src={group_1}
                alt="group_1"
              />
              <p style={{ fontFamily: "mono" }}>Workman</p>
              <p style={{ fontSize: "12px", color: "#718EBF" }}>Designer</p>
            </div>

            {/* ............. */}
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
      <div className="BottomSec_2">D</div>
    </div>
  );
};

export default BottomSection;
