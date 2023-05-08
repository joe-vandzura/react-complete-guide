import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState("2020");

  const updateFilter = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.items.filter( (expense) => {
    return expense.date.getFullYear().toString() === selectedYear
  });


  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onChangeFilterYear={updateFilter} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
