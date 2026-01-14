import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useExpense } from "../../context/ExpenseContext";
import { groupByCategory } from "../../utils/dataTransformers";

function ExpenseBarChart() {
  const { state } = useExpense();
  const data = groupByCategory(state.expenses);

  if (data.length === 0) return null;

  return (
    <BarChart width={400} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" />
    </BarChart>
  );
}

export default ExpenseBarChart;
