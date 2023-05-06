import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState("2020");

  const updateFilter = (year) => {
    setSelectedYear(year);
  };


  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onChangeFilterYear={updateFilter} />
      {props.items.filter( (expense) => expense.date.getFullYear().toString() === selectedYear).map( (expense) => (
      <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date} />
      ))}
      </Card>
    </div>
  );
};

export default Expenses;
