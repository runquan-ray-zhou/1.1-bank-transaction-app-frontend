import { Link } from "react-router-dom";
import "./Login.css";
import bankIcon from "../assets/bank-svgrepo-com1.svg";

export default function Login() {
  return (
    <div className="login">
      <div className="circle">
        <div className="circle1">
          <div className="circle2">
            <div className="circle3">
              <img src={bankIcon} alt="bank icon" />
            </div>
          </div>
        </div>
      </div>
      <span>Bank Bankster</span>
      <div className="login-button__container">
        <div className="edition">
          <p>2024 EDITION</p>
        </div>
        <Link to="/home">
          <button className="login-button">ENTER</button>
        </Link>
      </div>
    </div>
  );
}
