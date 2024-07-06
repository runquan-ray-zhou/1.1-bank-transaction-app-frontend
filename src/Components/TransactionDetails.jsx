import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"

const API = import.meta.env.VITE_API_URL

export default function TransactionDetails() {

    const [ transaction, setTransaction ] = useState({})
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