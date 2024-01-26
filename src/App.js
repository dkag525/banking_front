import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Errorpage from "./Pages/Error/Errorpage";
import Transactions from "./Pages/Transactions/Transactions";
import Accounts from "./Pages/Accounts/Accounts";
import Investments from "./Pages/Investments/Investments";
import Credit_Card from "./Pages/Credit_Cards/Credit_Cards";
import Loans from "./Pages/Loans/Loans";
import Services from "./Pages/Services/Services";
import Settings from "./Pages/Setting/Setting";
import TopNav from "./Component/Navbar/TopNav";
import SideNav from "./Component/Navbar/SideNav";

const App = () => {
  return (
    <div>
      <div>
        <TopNav />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaction" element={<Transactions />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/investment" element={<Investments />} />
        <Route path="/credit_card" element={<Credit_Card />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/services" element={<Services />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
};
export default App;
