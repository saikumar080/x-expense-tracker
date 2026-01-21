import { useState } from "react";
import { SnackbarProvider } from "notistack";
import WalletBalance from "./Components/WalletBalance/WalletBalance";
import ExpenseModal from "./Components/ExpenseForm/ExpenseModal";
import ExpenseList from "./Components/ExpenseForm/ExpenseList";
import CategoryPieChart from "./Components/Charts/CatergoryPieChart";
import ExpenseBarChart from "./Components/Charts/ExpenseBarChart";
import Header from "./Components/Header";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <SnackbarProvider maxSnack={3}>
        <div className="container">
           <Header  />
           <div className="summary-grid">
              <WalletBalance className="summary-card" />
              <ExpenseList className="summary-card" />
              <CategoryPieChart className="summary-card" />
           </div>
           <div className="main-section">
            <div className="transactions">
              <ExpenseList />
            </div>
            <div className="top-expenses">
              <ExpenseBarChart />
            </div>

           </div>
          <ExpenseModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
    </SnackbarProvider>
  );
}

export default App;