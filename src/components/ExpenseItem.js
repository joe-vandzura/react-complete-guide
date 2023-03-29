import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 3, 29);
  const expenseTitle = 'Rabbit';
  const expensePrice = 2000.00;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
