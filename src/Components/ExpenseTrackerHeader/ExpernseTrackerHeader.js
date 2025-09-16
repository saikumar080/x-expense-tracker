import React from "react";
// import Display from "../WalletBalance/Display";
// import ExpenseForm from "../ExpenseForm/Form";
// import ExpenseSummary from "../ExpenseSummary/Summary";
import Box from "@mui/material/Box"
import { Card } from "@mui/material";
import ExpenseCHart from "../PieChart/PieChart";
const ExpenseTrackerHeader=()=>{
    return(
        <>
          <Box
      sx={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-around",
        backgroundColor:"#9B9B9B",
      }}
    >
     <Card>WalletBalance</Card>
     <Card>ExpenseForm</Card>
      <ExpenseCHart />
    </Box>
        </>
    )
}
export default ExpenseTrackerHeader;