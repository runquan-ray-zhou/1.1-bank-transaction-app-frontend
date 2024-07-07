// Dependencies
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import About from "./Pages/About";
import Login from "./Pages/Login"
import './App.css'

// Components
import NavBar from "./Components/NavBar";

function App() {

  const [ amountColor, setAmountColor ] = useState("")

  const [ totalAmount, setTotalAmount ] = useState(0)

  return (
    <div className="App">
      <Router>
        <NavBar 
        totalAmount={totalAmount}
        amountColor={amountColor} 
        />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/transactions" element={<Index 
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
              amountColor={amountColor} 
              setAmountColor={setAmountColor}
            />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:id" element={<Show 
            setAmountColor={setAmountColor}
            setTotalAmount={setTotalAmount}
            />} />
            <Route path="/transactions/:id/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App
