import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {

            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    const [isEditing, setEditing] = useState(false);

    const editingHandler =() =>{
        setEditing(!isEditing);
    };
return (
    <div className="new-expense">
        { !isEditing ? <button onClick={editingHandler}>Add New Expense</button>
        :<ExpenseForm editingHandler={editingHandler}  onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
)
}

export default NewExpense;