import React from "react";
import Card1 from "./mycard/card1";
import Card2 from "./mycard/card2";
import RecentTransaction from "./RecentTransaction/RecentTransaction";
import MiddleSection from "./MiddleSection/MiddleSection";
import BottomSection from "./BottomSection/BottomSection";

const Dashboard_Content = () => {
  return (
    <div className="OverView_page">
      <div className="TopSection">
        <div className="MyCards">
          <div className="MyCards_heading">
            <div className="heading-1 head">My Cards</div>
            <div className="heading-2 head">See All</div>
          </div>
          <div className="MyCards_Two_cards">
            <div className="card-1">
              <Card1 />
            </div>
            <div className="card-2">
              <Card2 />
            </div>
          </div>
        </div>
        <div>
          <RecentTransaction />
        </div>
      </div>
      <div>
        <MiddleSection />
      </div>
      <div>
        <BottomSection />
      </div>
    </div>
  );
};

export default Dashboard_Content;
