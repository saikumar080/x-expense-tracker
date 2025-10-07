import React from "react";
import Box from "@mui/material/Box"
import { Card, Grid } from "@mui/material";
import ExpenseChart from "../PieChart/PieChart";
import AddExpense from "../ExpenseForm/AddExpense";
import WalletDisplay from "../WalletBalance/WalletDisplay";
const ExpenseTrackerHeader=()=>{
    return(
        <>
           
            <Grid 
              container 
              spacing={3} 
              alignItems={"stretch"} 
              sx={{ p:3,
              bgcolor:" #4B4B4B", 
              border:'1px solid #555',
              borderRadius:2, 
              boxShadow:3,
              display:"flex", justifyContent:"space-around"
            }}
              
            >
              {/* Wallet Display Component */}
              <Grid item xs={12} md={4} sx={{display:"flex", justifyContent:"center"}}>
               <WalletDisplay />
              </Grid>
              {/* Add Expense Component */}
             <Grid item xs={12} md={4} sx={{display:"flex", justifyContent:"center"}}>
                <AddExpense/>
              </Grid>

              {/* Expense Chart */}
              <Grid item xs={12} md={4} sx={{display:"flex", justifyContent:"center"}}>
                <Card sx={{flex:1, p:2,bgcolor:"#4b4b4b", borderRadius:3, display:"flex",alignItems:"center", justifyContent:"center",minHeight:260, boxShadow:"0 4px 10px rgba(0,0,0,0.3)"}} variant={"outlined"}>
                  <ExpenseChart />
                </Card>
              </Grid>
            
            </Grid>
         
        </>
    )
}
export default ExpenseTrackerHeader;