import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar({ totalAmount, amountColor }) {

  return (
    <nav>
      <span><p style={{color:amountColor}}>{totalAmount < 0 ? "-" : ""}${totalAmount < 0 ? totalAmount * -1 : totalAmount}</p></span>
        <Link to="/">
          <button>🏦</button>
        </Link>
        <Link to="/home">
          <button>🏠</button>
        </Link>
        <Link to="/transactions">
          <button>📜</button>
        </Link>
        <Link to="/transactions/new">
          <button>🆕</button>
        </Link>
        <Link to="/about">
          <button>ℹ️</button>
        </Link>
    </nav>
  );
}