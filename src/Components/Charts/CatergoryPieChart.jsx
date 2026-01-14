import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useExpense } from "../../context/ExpenseContext";
import { groupByCategory } from "../../utils/dataTransformers";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function CategoryPieChart() {
  const { state } = useExpense();
  const data = groupByCategory(state.expenses);

  if (data.length === 0) return null;

  return (
    <PieChart width={350} height={300}>
      <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
        {data.map((_, i) => (
          <Cell key={i} fill={COLORS[i % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default CategoryPieChart;
