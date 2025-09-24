import React from "react";
 import Display from "../WalletBalance/Display";
import ExpenseForm from "../ExpenseForm/Form";
// import ExpenseSummary from "../ExpenseSummary/Summary";
import Box from "@mui/material/Box"
import { Card, Grid } from "@mui/material";
import ExpenseCHart from "../PieChart/PieChart";
const ExpenseTrackerHeader=()=>{
    return(
        <>
          <Box component={"section"} sx={{p:3, bgcolor:" #4B4B4B", border:'1px solid #555',borderRadius:2, boxShadow:3}}>
           
            <Grid container spacing={3} sx={{display:"flex", justifyContent:"space-around"}}>
              <Grid item xs={12} md={4} sx={{display:"flex"}}>
                <Card sx={{ flex:1,p:2, bgcolor:"#9b9b9b", borderRadius:"10px"}} variant={"outlined"}>
                  < Display />
                </Card>
              </Grid>
              
             <Grid item xs={12} md={4} sx={{display:"flex"}}>
                <Card sx={{ flex:1, p:2}} variant={"outlined"}>
                  <ExpenseForm />
                </Card>
              </Grid>

              <Grid item xs={12} md={4} sx={{display:"flex"}}>
                <Card sx={{flex:1, p:2}} variant={"outlined"}>
                  <ExpenseCHart />
                </Card>
              </Grid>
            
            </Grid>
          </Box>
         
        </>
    )
}
export default ExpenseTrackerHeader;