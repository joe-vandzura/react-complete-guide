import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        
        props.onAddExpense(expenseData);
    };

    const [showExpenseForm, setVisibilityOfExpenseForm] = useState(false);
    const [showExpenseFormButton, setVisibilityOfExpenseFormButton] = useState(true);

    const showExpenseFormHandler = () => {
        setVisibilityOfExpenseForm(true);
        setVisibilityOfExpenseFormButton(false);
    };

    let expenseForm;
    let expenseFormButton;

    if (showExpenseForm) {
        const hideExpenseForm = () => {
        setVisibilityOfExpenseForm(false);
        setVisibilityOfExpenseFormButton(true);
        }
        expenseForm = <ExpenseForm hideForm={hideExpenseForm} onSaveExpenseData={saveExpenseDataHandler}/>;
    };

    if (showExpenseFormButton) {
        expenseFormButton = <button onClick={showExpenseFormHandler}>Add Expense</button>;
    }

    return (
    <div className='new-expense'>
        {expenseFormButton}
        {expenseForm}
    </div>
)}

export default NewExpense;