import { Link, useNavigate } from "react-router-dom"
import "./Transaction.css"

const API = import.meta.env.VITE_API_URL

export default function Transaction({ transaction }) {

    let navigate = useNavigate()

    function handleDelete() {
        fetch(`${API}/transactions/${transaction.id}`, {
            method: "DELETE"
        })
        .then(() => {
            alert("Transaction Deleted")
            navigate(0)
        })
        .catch((error) => console.error(error))
    }

    return (
        <div className="Transaction">
            <span className="Transaction__date">
            <p>{transaction.date}</p>
            </span>
            <span className="Transaction__from">
            <p>{transaction.from}</p>
            </span>
            <span className="Transaction__name">
            <Link to={`/transactions/${transaction.id}`}>{transaction.item_name}</Link>
            </span>
            <span className="Transaction__type">
            <p>{transaction.category}</p>
            </span>
            <span className="Transaction__amount">
            <p style={{color: transaction.amount < 0 ? "red" : "green"}}>{transaction.amount < 0 ? "-" : ""}${transaction.amount < 0 ? (transaction.amount * -1).toFixed(2) : (transaction.amount).toFixed(2)}</p>
            </span>
            <span className="Transaction__delete">
            <button onClick={ handleDelete }>❌</button>
            </span>
        </div>
    )
}