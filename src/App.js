import React from "react";
import "./App.css";
//import Display from "./Components/WalletBalance/Display";
import ExpenseTrackerHeader from "./Components/ExpenseTrackerHeader/ExpernseTrackerHeader";
import { Typography, Box} from "@mui/material";
function App() {
  return (
    <Box className="App" sx={{p:4}}>
      
     <Typography sx={{fontFamily:"Ubuntu, sans-serif", fontSize:'32px',fontWeight:700, lineHeight:1,color:'#FFFFFF', mb:3}}>Expense Tracker</Typography>
     <ExpenseTrackerHeader />
     
    </Box>
  );
}

export default App;
