import { Box } from "@mui/material";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data=[
    {name: "food", value:400},
    {name: "Rent", value:1200},
    {name: "Travel", value:300},
    {name: "Shopping", value:700},
    
];
const COLORS=["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]
const ExpenseChart=()=>{
    return(
        <Box      sx={{
        p: 4,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        fontFamily: "Ubuntu",
        bgcolor: "#9b9b9b",
        width: "100%",
        maxWidth: 300,
        position: "relative",
        mx: "auto",
        mt: 5,
      }}>
      <PieChart width={300} height={250}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </Box>
        
    )
}
export default ExpenseChart;