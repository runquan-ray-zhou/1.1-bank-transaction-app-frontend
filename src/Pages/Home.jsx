import { Link } from "react-router-dom";
import "./Home.css"
import clipboard from "../assets/clipboard-list-svgrepo-com.svg"
import transaction from "../assets/transaction-money-svgrepo-com.svg"

export default function Home() {

    return (
        <div className="home">
            <h1>All Transactions</h1>
                <Link to="/transactions">
                    <button>
                        <img src={clipboard} alt="all transaction icon" />
                    </button>
                </Link>
            <h1>Create New Transactions</h1>
                <Link to="/transactions/new">
                    <button>
                        <img src={transaction} alt="new transaction icon" />
                    </button>
                </Link>
        </div>
    )
}