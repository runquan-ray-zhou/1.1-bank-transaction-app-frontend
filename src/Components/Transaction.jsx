import { Link } from "react-router-dom"
import "./Transaction.css"

export default function Transaction({ transaction }) {
    return (
        <div className="Transaction">
            <p>{transaction.date}</p>
            <Link to={`/transactions/${transaction.id}`}>{transaction.item_name}</Link>
            <p>{transaction.amount}</p>
        </div>
    )
}