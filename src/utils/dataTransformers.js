export function groupByCategory(expenses) {
  const map = {};

  expenses.forEach(e => {
    map[e.category] = (map[e.category] || 0) + e.amount;
  });

  return Object.keys(map).map(key => ({
    name: key,
    value: map[key]
  }));
}
