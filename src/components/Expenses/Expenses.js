import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import React, {useState} from "react";

const Expenses = (props) =>{

    const [year,setYear] = useState('2020');

    const passExpenseFilter = (expenseYear) =>{
        setYear(expenseYear);
    };

    const filterExpenses = props.data.filter(expense =>{
        return expense.date.getFullYear().toString() === year;
    });

    let expensesContent = <p>No expenses found.</p>

    if(filterExpenses.length >0){
        expensesContent = filterExpenses.map( (expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />);
    };


    return(
        <div>
      
        <Card className="expenses">
        <ExpenseFilter selected={year} passExpenseFilter = {passExpenseFilter}/>
        {expensesContent}
        {/* {filterExpenses.length === 0 && (expensesContent)}
        {filterExpenses.length > 0 && (filterExpenses.map( (expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))} */}
        {/* {filterExpenses.length === 0 ? (<p>No Expenses Found.</p>) : (filterExpenses.map( (expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))} */}

        </Card>
        </div>
    )

}

export default Expenses;