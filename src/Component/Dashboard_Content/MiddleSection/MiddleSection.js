import React from "react";
import { BarChart } from "../../Charts/Bar";
import { PieChart } from "../../Charts/PieChart";

const MiddleSection = () => {
  return (
    <div className="MiddleSection">
      <div className="GraphSec-1">
        <div className="Gsec-1">Weekly Activity</div>
        <div className="Gsec-2">
          <div className="Gsec-2A">
            <div className="ellipseBox">
              <div className="GreenDot Dot"></div>
              <div className="deposit DW">Deposit</div>
            </div>
            <div className="ellipseBox">
              <div className="PinkDot Dot"></div>
              <div className="withdraw DW">Withdraw</div>
            </div>
          </div>
          <div className="Gsec-2B">
            <BarChart />
          </div>
        </div>
      </div>
      <div className="GraphSec-2">
        <div className="expenseStatics Gsec-1">Expense Statistics</div>
        <div className="expenseStaticsGraph">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
