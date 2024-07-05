import { Link } from "react-router-dom"

export default function Transaction({ transaction }) {
    return (
        <div>
            <Link to={`/transactions/${transaction.id}`}>{transaction.item_name}</Link>
        </div>
    )
}