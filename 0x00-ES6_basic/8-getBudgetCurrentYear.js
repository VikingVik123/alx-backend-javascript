function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
  const currentyear = getCurrentYear();

  budget[`income-${currentyear}`] = income;
  budget[`gdp-${currentyear}`] = gdp;
  budget[`capita-${currentyear}`] = capita;

  return budget;
}
