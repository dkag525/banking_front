import React, { useState } from "react";
import Cards from "../../Component/Cards/Cards";
import Photo from "../../Photo/Photo";
import TransactionHistory from "../../TransactionHistory/TransactionHistory";
import Graph from "../../Component/Graph/Graph";
import TransferHistory from "../../TransactionHistory/TranserferHistory";
import { LineChart } from "../../Component/Charts/LineChart";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newTransferHistory, setNewTransferHistory] = useState([
    ...TransferHistory.slice(currentIndex, currentIndex + 3),
  ]);

  console.log("newTransferHistory", newTransferHistory);
  console.log("currentIndex", currentIndex);

  const handleNextClick = () => {
    const newHistory = TransferHistory.slice(currentIndex, currentIndex + 3);
    if (currentIndex <= TransferHistory.length - 1) {
      setNewTransferHistory(() => [...newHistory]);
      setCurrentIndex(() => currentIndex + 3);
    }
  };

  // const CardStyle1 = {
  //   backgroundColor: "#2d60ff",
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "space-between",
  //   gap: "15px",
  // };
  // const CardStyle2 = {
  //   backgroundColor: "white",
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "space-between",
  //   gap: "15px",
  // };

  // const BalTop1 = {
  //   color: "white",
  //   fontFamily: "Inter,sans-serif,Lato",
  // };
  // const BalTop2 = {
  //   color: "black",
  //   fontFamily: "Inter,sans-serif,Lato",
  // };

  return (
    <div className="dashboardPage">
      {/* ===================Heading Section========================== */}

      <div className="headingSec">
        <div className="headSec1">
          <p className="head1">My Cards</p>
          <p className="head2">See All</p>
        </div>
        <div className="headSec2">Recent Transaction</div>
      </div>

      {/* =============================================
                 Top Content Section
      ============================================= */}

      <div className="AtmCardSec">
        <Cards
          atmcardnumber="blue"
          balmiddle="white"
          cardname="white"
          CircleImage={Photo.CircleWhite}
          CardImage={Photo.Chip_Card_White}
          backgroundcolor="backgroundcolorblue"
        />
        <Cards
          atmcardnumber="white"
          balmiddle="black"
          cardname="black"
          backgroundcolor="backgroundcolorwhite"
          CircleImage={Photo.CircleBlack}
          CardImage={Photo.Chip_Card_1}
        />
        <div className="AtmCardTransaction card">
          {TransactionHistory.map((transaction_history) => (
            <div
              key={transaction_history.id}
              className="Transaction-Top Recent-History"
            >
              <div className="Transaction-ChildA">
                <img src={transaction_history.image} alt="deposite_icon" />
              </div>
              <div
                style={{
                  display: "flex",
                  flex: "1",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div className="Transaction-ChildA">
                  <p className="depositeFrom">
                    {transaction_history.depositeFrom}
                  </p>
                  <p className="depositeDate">{transaction_history.date}</p>
                </div>
                <div className="Transaction-ChildA">
                  <p
                    className={`price ${
                      parseFloat(transaction_history.price.replace("$", "")) < 0
                        ? "colorRed"
                        : "colorGreen"
                    }`}
                  >
                    {transaction_history.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================== Middle Heading Section  ====== */}

      <div className="headingSec">
        <div className="headSec1">
          <p className="head1">Weekly Activity</p>
        </div>
        <div className="headSec2">Expense Statistics</div>
      </div>

      {/* ================== Middle Content Section  ====== */}

      <div>
        <Graph />
      </div>

      {/* ================== Bottom Content Section  ====== */}

      {/* ========Heading Sec Start ============= */}

      <div className="headingSec">
        <div className="headSec1">
          <p className="head1">Quick Transfer</p>
        </div>
        <div className="headSec2">Balance History</div>
      </div>

      {/* ==========Heading Sec Start End============= */}

      <div className="quickTransferSec">
        <div className="quickTransfer">
          <div className="Transfer_History">
            {newTransferHistory.map((TransferHistorys) => (
              <div key={TransferHistorys.id} className="TransferPersondetails">
                <img
                  className="TransferPersonImage"
                  src={TransferHistorys.image}
                  alt="Group1_icon"
                />
                <p className="TransferPersonName">{TransferHistorys.name}</p>
                <p className="TransferPersonPost">
                  {TransferHistorys.designation}
                </p>
              </div>
            ))}
            <div className="VictorSign" onClick={handleNextClick}>
              <img
                className="VictorImage"
                src={Photo.Vector1_icon}
                alt="Vector1_icon"
              />
            </div>
          </div>
          <div className="Transfer_Amount">
            <div className="writeAmount">
              <p>Write Amount</p>
            </div>
            <div className="send_amount_section">
              <div className="Amount">
                <input
                  className="InputAmount"
                  type="text"
                  placeholder="525.50"
                />
              </div>
              <button className="send">
                <p>Send</p>
                <img
                  className="Vector_icon"
                  src={Photo.Vector_icon}
                  alt="Vector_icon"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="balanceHistorySec">
          <LineChart />
        </div>
      </div>
    </div>
  );
};
export default Home;
