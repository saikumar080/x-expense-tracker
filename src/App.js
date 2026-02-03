import { React} from "react";
import { SnackbarProvider } from "notistack";
import ExpenseBarChart from "./Components/Charts/ExpenseBarChart";
import Header from "./Components/Header";
import "./App.css";

function App() {
 

  return (
    <SnackbarProvider maxSnack={3}>
      <h2 className="header-title">Expense Tracker</h2>
        <div className="container">
           <Header  />
           
           <div className="main-section">
            <div className="edit-expenses">
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