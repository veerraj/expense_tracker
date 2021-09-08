import React, { useEffect, useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [buttonText,setButtonText] = useState("Add");

  // const [input ,setUserInput] = useState({
  //       title:'',
  //       amount:'',
  //       date:''
  // })


  const simplifyDate = (date) => {
        let month = (+date.getMonth() + 1).toString();
        let year = props.editData.date.getFullYear();
        let day = props.editData.date.getDate();

        day = day.length == 1 ? '0'+day : day;
        month = month.length == 2 ? month : '0'+month;

        return year+"-"+month+"-"+day;
  }

  const init = () => {
    if(props.editData){

      const customDate = simplifyDate(props.editData.date);
      setTitle(props.editData.title);
      setAmount(props.editData.amount);
      setDate(customDate);

      setButtonText("Update")
    }
  }

  useEffect(() => {
       init();
  }, [props])

  const titleHandler = (e) => {
    const titleVal = e.target.value;
    setTitle(titleVal);
    //    setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         title:e.target.value
    //     }
    //   })
  };

  const amountHandler = (e) => {
    const amountVal = e.target.value;
    setAmount(amountVal);
    //   setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         amount:e.target.value
    //     }
    //   })
  };

  const dateHandler = (e) => {
    const dateVal = e.target.value;
    setDate(dateVal);
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         date:e.target.value
    //     }
    //   })
  };

  const submitHandler = (e) => {

    e.preventDefault();
    const userData = {
      title,
      amount:+amount,
      date:date ? new Date(date) : '',
    };

    userData['id'] = props.editData && props.editData.id;

    if(userData.title && userData.amount && userData.date){
      props.onSaveExpenseData(userData);

      //reset the form value
      setTitle("");
      setAmount("");
      setDate("");

      setButtonText("Add");
    }else{
      alert("please! fill all the data")
    }


  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={date}
            onChange={dateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">{buttonText} Expense</button>
        </div>
      </div>
    </form>
  );
}
