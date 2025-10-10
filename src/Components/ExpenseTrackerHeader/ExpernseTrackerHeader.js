import React from "react";
import { Box, Grid } from "@mui/material";
import ExpenseChart from "../PieChart/PieChart";
import AddExpense from "../ExpenseForm/AddExpense";
import WalletDisplay from "../WalletBalance/WalletDisplay";

const ExpenseTrackerHeader = () => {
  return (
    <Box
      sx={{
        p: 3,
        bgcolor: "#4B4B4B",
        border: "1px solid #555",
        borderRadius: 2,
        boxShadow: 3,
        flexGrow: 1,
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
      >
        {/* Common wrapper style for equal width */}
        {[
          <WalletDisplay key="wallet" />,
          <AddExpense key="add" />,
          <ExpenseChart key="chart" />,
        ].map((Component, i) => (
          <Grid
            item
            xs={12}
            md={3.5}
            key={i}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 340,     // 🔹 same width for all
                minWidth: 340,     // 🔹 fixed to align perfectly
                minHeight: 280,
                display: "flex",
                alignItems: "stretch",
              }}
            >
              {Component}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExpenseTrackerHeader;
