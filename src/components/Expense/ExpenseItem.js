import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

export default function ExpenseItem(props) {

    const editHandler = (id) => {
          props.editHandler(id)
    }

    const deleteHandler = (id) => {
        props.deleteHandler(id)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
              <div className="expense-item__description">
                  <h2 >{props.title}</h2>
                  <div className="expense-item__price">{props.amount}</div>
                  <button className="btn btn-edit" onClick={()=>editHandler(props.id)}>Edit</button>
                  <button className="btn btn-delete" onClick={()=>deleteHandler(props.id)}>Delete</button>
              </div>
        </Card>
    )
}
