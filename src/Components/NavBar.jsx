import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav>
        <Link to="/">
          <button>Bank Bank</button>
        </Link>
        <Link to="/transactions">
          <button>All Transactions</button>
        </Link>
        <Link to="/transactions/new">
          <button>New Transaction</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
    </nav>
  );
}