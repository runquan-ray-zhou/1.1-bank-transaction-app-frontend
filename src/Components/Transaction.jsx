import { Link, useNavigate } from "react-router-dom"
import "./Transaction.css"

const API = import.meta.env.VITE_API_URL

export default function Transaction({ transaction }) {

    let navigate = useNavigate()

    function handleDelete() {
        fetch(`${API}/transactions/${transaction.id}`, {
            method: "DELETE"
        })
        .then(() => navigate(0))
        .catch((error) => console.error(error))
    }

    return (
        <div className="Transaction">
            <span>
            <p>{transaction.date}</p>
            </span>
            <span>
            <p>{transaction.from}</p>
            </span>
            <span>
            <Link to={`/transactions/${transaction.id}`}>{transaction.item_name}</Link>
            </span>
            <span>
            <p>{transaction.category}</p>
            </span>
            <span>
            <p style={{color: transaction.amount < 0 ? "red" : "green"}}>{transaction.amount < 0 ? "-" : ""}${transaction.amount < 0 ? transaction.amount * -1 : transaction.amount}</p>
            </span>
            <span>
            <button onClick={ handleDelete }>Delete</button>
            </span>
        </div>
    )
}