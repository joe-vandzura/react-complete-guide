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

  console.log(selectedYear);


  return (
    <div>
      <ExpensesFilter selected={selectedYear} onChangeFilterYear={updateFilter} />
      <Card className="expenses">
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
