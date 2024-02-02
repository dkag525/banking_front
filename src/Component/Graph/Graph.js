import React from "react";
import { BarChart } from "../Charts/Bar";
import { PieChart } from "../Charts/PieChart";

const Graph = () => {
  return (
    <div className="WeeklyActivitySec">
      <div className="GraphBarSec">
        <div className="diposit">
          <div className="dipositeGreen">
            <div className="Greendot"></div>
            <p className="Deposit">Deposit</p>
          </div>
          <div className="dipositeBlue">
            <div className="BlueDot"></div>
            <p className="WithDraw">Withdraw</p>
          </div>
        </div>
        <div className="withdraw">
          <BarChart />
        </div>
      </div>
      <div className="GraphPieSec">
        <PieChart />
      </div>
    </div>
  );
};

export default Graph;
