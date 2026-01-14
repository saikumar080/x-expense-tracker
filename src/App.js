import { useState } from "react";
import { SnackbarProvider } from "notistack";
import WalletBalance from "./Components/WalletBalance";
import ExpenseModal from "./Components/ExpenseModal";
import ExpenseList from "./Components/ExpenseList";
import CategoryPieChart from "./Components/Charts/CatergoryPieChart";
import ExpenseBarChart from "./Components/Charts/ExpenseBarChart";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <SnackbarProvider maxSnack={3}>
        <div className="container">
          <header>
            <h1>Expense Tracker</h1>
            <WalletBalance />
            <button className="add-btn" onClick={() => setOpen(true)}>
              Add Expense
            </button>
          </header>

          <main className="grid">
            <section className="expenses">
              <ExpenseList />
            </section>

            <section className="charts">
              <h2>Expense Summary</h2>
              <CategoryPieChart />

              <h2>Expense Trends</h2>
              <ExpenseBarChart />
            </section>
          </main>

          <ExpenseModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
    </SnackbarProvider>
  );
}

export default App;