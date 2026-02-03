import React from "react";
import { BarChart, Bar, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { useExpense } from "../../context/ExpenseContext";
import { groupByCategory } from "../../utils/dataTransformers";
import { Typography, Card } from "@mui/material";

function ExpenseBarChart() {
  const { state } = useExpense();
  let data = groupByCategory(state.expenses);

  if (data.length === 0) return null;

  // Sort descending by value so largest bar is on top
  data = data.sort((a, b) => b.value - a.value);

  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          padding: 2,
          margin: 2,
          textAlign: { xs: "center", sm: "center", md: "left" },
        }}
      >
        Top Expenses
      </Typography>
        <Card sx={{ padding: 2, width: "100%", boxSizing: "border-box" }}>

     <ResponsiveContainer width="100%" height={data.length * 80}>
  <BarChart
    data={data}
    layout="vertical"
    margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
    barCategoryGap="30%"
  >
    <YAxis
      type="category"
      dataKey="name"
      width={140}
      axisLine={false}
      tickLine={false}
    />
    <Tooltip />
    <Bar dataKey="value" fill="#1976d2" radius={[6, 6, 6, 6]} barSize={35}>
      <LabelList dataKey="value" position="right" />
    </Bar>
  </BarChart>
</ResponsiveContainer>

    </Card>
    </>
  
  );
}

export default ExpenseBarChart;
