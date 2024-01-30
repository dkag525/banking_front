import React from "react";
import Cards from "../../Component/Cards/Cards";
import Photo from "../../Photo/Photo";
import TransactionHistory from "../../TransactionHistory/TransactionHistory";
import Graph from "../../Component/Graph/Graph";
import TransferHistory from "../../TransactionHistory/TranserferHistory";

const Home = () => {
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
          CircleImage={Photo.CircleWhite}
          CardImage={Photo.Chip_Card_White}
        />
        <Cards CircleImage={Photo.CircleBlack} CardImage={Photo.Chip_Card_1} />
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
            {TransferHistory.map((TransferHistorys) => (
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
            <div className="VictorSign">
              <img
                className="VictorImage"
                src={Photo.Vector1_icon}
                alt="Vector1_icon"
              />
            </div>
          </div>
          <div className="Transfer_Amount">B</div>
        </div>
        <div className="balanceHistorySec">Z</div>
      </div>
    </div>
  );
};
export default Home;
