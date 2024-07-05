import { useState, useEffect } from 'react'

import Transaction from './Transaction'

const API = import.meta.env.VITE_API_URL

export default function Transactions() {

    const [ transactions, setTransactions ] = useState([])

    useEffect(() => {
        fetch(`${API}/transactions`)
        .then((response) => response.json())
        .then((responseJSON) => setTransactions(responseJSON))
        .catch((error) => console.error(error));
    }, [])

    return (
        <div>
            <h1>Bank Transactions</h1>
            {transactions.map(transaction => {
                return <Transaction key={transaction.id} transaction={transaction}/>
            })}
        </div>
    )
}