import { useState, useEffect } from 'react'
import "./Transactions.css"
import Transaction from './Transaction'

const API = import.meta.env.VITE_API_URL

export default function Transactions({ amountColor, setAmountColor,  totalAmount, setTotalAmount }) {

    const [ transactions, setTransactions ] = useState([])

    useEffect(() => {
        const transactionsTotal = transactions.reduce((a, b) => a + b.amount, 0)
        if (transactionsTotal > 500) {
            setAmountColor("green")
        } else if (transactionsTotal < 500 && transactionsTotal > 0) {
            setAmountColor("yellow")
        } else {
            setAmountColor("red")
        }
    },[transactions])

    useEffect(() => {
        fetch(`${API}/transactions`)
        .then((response) => response.json())
        .then((responseJSON) => setTransactions(responseJSON))
        .catch((error) => console.error(error));
    }, [])

    useEffect(() => {
        setTotalAmount(transactions.reduce((a, b) => a + b.amount, 0).toFixed(2))
    },[transactions])

    return (
        <div className='Transactions'>
            <div className='Transactions__total-amount'>
                <span>Bank Account Total:</span>
                <span>
                    <p>$</p>
                </span>
                <span>
                    <p className='Transactions__total-amount-number'style={{color:amountColor}}>{transactions.length ? totalAmount : 0}</p>
                </span>
            </div>
            <hr />
            <div className='Transactions__header'>
            <span>
                <p>Date</p>
            </span>
            <span>
                <p>From</p>
            </span>
            <span>
                <p>Description</p>
            </span>
            <span>
                <p>Type</p>
            </span>
            <span>
                <p>Amount</p>
            </span>
            <span>
                {" "}
            </span>
            </div>
            <hr />
            {transactions.map(transaction => {
                return <Transaction 
                key={transaction.id} 
                transaction={transaction}
                transactions={transactions}
                setTotalAmount={setTotalAmount}
                setAmountColor={setAmountColor}
                />
            })}
        </div>
    )
}