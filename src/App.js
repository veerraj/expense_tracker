import { useState } from 'react';
import ExpensesFilter from './components/Expense/ExpenseFilter';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Header from './components/UI/Header';

function App() {

  const [expenses,setExpenses] = useState( [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ])

  const [editData,setEditData] = useState(null);

  const saveExpenseHandler = (enteredExpenseData) => {
    if(editData){
      const index = expenses.findIndex(item=>item.id == enteredExpenseData.id);
      const data = [...expenses];
      data[index] = enteredExpenseData;
      setExpenses(data);
      setEditData(null);
    }else{
      const expenseData = {
        ...enteredExpenseData
      }
      setExpenses((prevState) =>[...prevState, expenseData])
    }
  }

  const editHandler = (id) => {
       if(id){
         const tempData = expenses.filter(item=>item.id == id);
         setEditData(tempData[0]);
       }
  };

  const deleteHandler = (id) => {
     const data = expenses.filter(item=>item.id != id);
     setExpenses(data);
  };



  return (
    <div >
        <Header />
        <NewExpense onSaveData = {saveExpenseHandler} editData={editData} />
        <Expenses items={expenses}
          editHandler={editHandler} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
