import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isExpand, setIsExpand] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsExpand(false);
  };

  const startExpandHandler = () => {
    setIsExpand(true);
  };

  const stopExpandHandler = () => {
    setIsExpand(false);
  };

  return (
    <div className="new-expense">
      {!isExpand && (
        <button onClick={startExpandHandler}>Add New Expense</button>
      )}
      {isExpand && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopExpandHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
