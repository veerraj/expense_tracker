import React from 'react'
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

export default function NewExpense(props) {

    const saveExpenseHandler = (enteredExpenseData) => {
         if(enteredExpenseData.id){
            const expenseData = {
                ...enteredExpenseData
           }
           props.onSaveData(expenseData)
         }else{
            const expenseData = {
                ...enteredExpenseData,
                id:Math.random().toString()
           }
           props.onSaveData(expenseData)
         }
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseHandler} editData={props.editData}/>
        </div>
    )
}
