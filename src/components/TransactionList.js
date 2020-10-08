import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobeState'
export const TransactionList = () => {
    const {transactions,deleteTransaction} =useContext(GlobalContext);
    // console.log("data for tranactions",context)
    return (
        <div>
            <h3>
                History
            </h3>
            <ul>
                {transactions.map((transaction)=>{
                    const sign=transaction.amount<0?'-':'+'
                    return(
                    <li>
                {transaction.text}<span>{sign}${transaction.amount}</span> <button onClick={()=>{deleteTransaction(transaction.id)}}>
                    x
                </button>
            </li>)
                })}
            
            </ul>
            
        </div>
    )
}
