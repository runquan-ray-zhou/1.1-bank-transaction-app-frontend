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
        <tr className="Transaction">
            <td>
            <p>{transaction.date}</p>
            </td>
            <td>
            <Link to={`/transactions/${transaction.id}`}>{transaction.item_name}</Link>
            </td>
            <td>
            <p>{transaction.from}</p>
            </td>
            <td>
            <p>{transaction.category}</p>
            </td>
            <td>
            <p>{transaction.amount}</p>
            </td>
            <td>
            <button onClick={ handleDelete }>Delete</button>
            </td>
        </tr>
    )
}