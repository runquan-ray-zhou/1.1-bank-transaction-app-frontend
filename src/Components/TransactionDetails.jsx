import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"

const API = import.meta.env.VITE_API_URL

export default function TransactionDetails({ setTotalAmount, setAmountColor }) {

    const [ transaction, setTransaction ] = useState({})
    const [ transactions, setTransactions ] = useState([])
    let { id } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        fetch(`${API}/transactions/${id}`)
        .then((response) => response.json())
        .then((responseJSON) => setTransaction(responseJSON))
        .catch(() => navigate("/notfound"))
    }, [id, navigate])

    function handleDelete() {
        fetch(`${API}/transactions/${id}`, {
            method: "DELETE"
        })
        .then(() => navigate("/transactions"))
        .catch((error) => console.error(error))
    }

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
        <div>
            <div>
                <h1>Transaction Details</h1>
            </div>
            <hr />
            <p>{transaction.amount}</p>
            <p>{transaction.date}</p>
            <p>{transaction.item_name}</p>
            <p>{transaction.from}</p>
            <p>{transaction.category}</p>
            <Link to={`/transactions`}>
            <button>Back</button>
            </Link>
            <Link to={`/transactions/${id}/edit`}>
            <button>Edit</button>
            </Link>
            <button onClick={ handleDelete }>Delete</button>
        </div>
    )
}