import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useExpense } from "../../context/ExpenseContext";
import { groupByCategory } from "../../utils/dataTransformers";

const COLORS = ["#ffeb3b", "#00C49F", "#6200ea", "#FF8042"];

function CategoryPieChart() {
  const { state } = useExpense();
  const data = groupByCategory(state.expenses);

  if (data.length === 0) return null;

  // Determine width & height dynamically
  const screenWidth = window.innerWidth;

  let chartWidth = 380;
  let chartHeight = 280;
  let outerRadius = 110;

  if (screenWidth <= 636) {
    // Mobile
    chartWidth = 280;
    chartHeight = 300;
    outerRadius = 90;
  } else if (screenWidth <= 900) {
    // Tablet
    chartWidth = 320;
    chartHeight = 300;
    outerRadius = 100;
  }

  return (
    <PieChart width={chartWidth} height={chartHeight}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="45%"
        outerRadius={outerRadius}
        paddingAngle={4}
        labelLine={false}
      >
        {data.map((_, i) => (
          <Cell key={i} fill={COLORS[i % COLORS.length]} />
        ))}
      </Pie>

      <Tooltip />

      <Legend
        verticalAlign="bottom"
        align="center"
        wrapperStyle={{
          fontSize: "13px",
          paddingTop: 10,
          display: screenWidth < 360 ? "none" : "block"
        }}
      />
    </PieChart>
  );
}

export default CategoryPieChart;
