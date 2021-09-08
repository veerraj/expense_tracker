import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");

  // useEffect(() => {

  // }, [props.items])

  const expenses = props.items.filter(
    (ele) => ele.date.getFullYear() == filterYear
  );

  const selectedYearHandler = (year) => {
    setFilterYear(year);
    // setExpenses((prevState) =>[...prevState, expenseData])
  };
  const editDataHandler = (id) => {
    props.editHandler(id);
  };

  const deleteDataHandler = (id) => {
    props.deleteHandler(id);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        selectedYear={selectedYearHandler}
      />

      <ExpensesChart expenses={expenses} />

      {expenses.length == 0 ? (
        <div className="no-found">
          <h3>No Expense Found.</h3>
        </div>
      ) : (
        expenses.map((element) => (
          <ExpenseItem
            title={element.title}
            amount={element.amount}
            date={element.date}
            key={element.id}
            id={element.id}
            editHandler={editDataHandler}
            deleteHandler={deleteDataHandler}
          />
        ))
      )}
    </Card>
  );
}
