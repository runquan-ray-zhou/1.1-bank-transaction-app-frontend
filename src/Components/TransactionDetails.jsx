import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import "./TransactionDetails.css"

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
        .catch(() => {
            navigate("/notfound")
            console.error(error)
        })
    }, [id, navigate])

    function handleDelete() {
        fetch(`${API}/transactions/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            alert("Transaction Deleted")
            navigate("/transactions")
        })
        .catch(() => {
            navigate("/notfound")
            console.error(error)
        })
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
        .catch((error) => {
            navigate("/notfound")
            console.error(error)
        });
    }, [])

    useEffect(() => {
        setTotalAmount(transactions.reduce((a, b) => a + b.amount, 0).toFixed(2))
    },[transactions])

    return (
        <div className='Details'>
            <div className='Details__title'>
                <h1>Transaction Details</h1>
            </div>
            <hr />
            <div className='Details__values'>
                <span>
                    <p>Amount:</p><p>{transaction.amount}</p>
                </span>
                <span>
                    <p>Transaction Date:</p><p>{transaction.date}</p>
                </span>
                <span>
                    <p>Name:</p><p>{transaction.item_name}</p>
                </span>
                <span>
                    <p>From:</p><p>{transaction.from}</p>
                </span>
                <span>
                    <p>Category:</p><p>{transaction.category}</p>
                </span>
            </div>
            <div className='Details__buttons'>
                <Link to={`/transactions`}>
                <button>📜</button>
                </Link>
                <Link to={`/transactions/${id}/edit`}>
                <button>✍️</button>
                </Link>
                <button onClick={ handleDelete }>❌</button>
            </div>
        </div>
    )
}