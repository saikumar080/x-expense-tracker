import React from "react";
import { SnackbarProvider } from "notistack";
import ExpenseBarChart from "./Components/Charts/ExpenseBarChart";
import Header from "./Components/Header";
import RecentTransactions from "./Components/Transcations/RecentTranscations";
import "./App.css";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <h1 className="header-title">Expense Tracker</h1>
      <div className="container">
        <Header />

        {/* MAIN SECTION */}
        <div className="main-content">
          <div className="recent-transactions">
            
            <RecentTransactions />
          </div>

          <div className="top-expenses">
          
            <ExpenseBarChart />
          </div>
        </div>
      </div>
    </SnackbarProvider>
  );
}

export default App;
