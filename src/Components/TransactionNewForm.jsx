import { useState } from 'react'
import { useNavigate  } from 'react-router-dom'
import { nanoid } from 'nanoid'
import "./TransactionNewForm.css"

const API = import.meta.env.VITE_API_URL

export default function TransactionNewForm() {

    let navigate = useNavigate()

    const [ display, setDisplay ] = useState("none") 

    const [transaction, setTransactionDetails] = useState(
        {
            id: nanoid(7),
            item_name: "",
            amount: 0,
            date: "",
            from: "",
            category: ""
        }
    )

// Functions For Input Change 
    function handleTextChange(event){
        setTransactionDetails({...transaction, [event.target.id]: event.target.value})
    } 

    function handleNumberChange(event){
        setTransactionDetails({ ...transaction, [event.target.id]: Number(event.target.value) })
    }

    function handleDateChange(event) {
        setTransactionDetails({...transaction, [event.target.id]: event.target.value})
    }

    function handleCategoryChange(event) {
        if (event.target.value === "Other") {
            setDisplay("block")
        } else {
            setDisplay("none")
            setTransactionDetails({...transaction, [event.target.id]: event.target.value})
        }
    }

    function handleCheckboxChange(event){
        if (event.target.id === "withdraw") {
            setTransactionDetails({ ...transaction, amount: transaction.amount > 0 ? transaction.amount * -1 : transaction.amount * 1 });
        }
        if (event.target.id === "deposit") {
            setTransactionDetails({ ...transaction, amount: transaction.amount < 0 ? transaction.amount * -1 : transaction.amount * 1});
        }
    };
    
// Function To Add Transaction
    function addTransaction() {
        fetch(`${API}/transactions`, {
            method: "POST",
            body: JSON.stringify(transaction),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            navigate(`/transactions/${transaction.id}`)
        })
        .catch((error) => console.error(error))
    }

// Function For Submitting Form
    function handleSubmit(e) {
        e.preventDefault()
        addTransaction()
        setTransactionDetails(
            {
                id: nanoid(7),
                item_name: "",
                amount: 0,
                date: "",
                from: "",
                category: ""
            }
        )
    }

    return (
        <div className='newTransaction'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date" >
                <div className='newTransaction__label'>
                Date
                </div>
                <br />
                    <input
                    id="date"
                    type="date"
                    value={transaction.date}
                    onChange={handleDateChange}
                    placeholder="Date"
                    required
                    />
                </label>
                <br />
                <label htmlFor="item_name">
                <div className='newTransaction__label'>
                Name
                </div>
                <br />
                    <input
                    id="item_name"
                    type="text"
                    value={transaction.item_name}
                    onChange={handleTextChange}
                    placeholder="Name"
                    required
                    />
                </label>
                <br />
                <label htmlFor="amount">
                <div className='newTransaction__label'>
                Amount
                </div>
                <br />
                    <input
                    id="amount"
                    value={transaction.amount}
                    type="number"
                    onChange={handleNumberChange}
                    placeholder="Amount"
                    required
                    />
                </label>
                <br />
                <div className='newTransaction__deposit-withdraw'>
                <label htmlFor="deposit">
                <div className="newTransaction__label">
                Deposit
                </div> 
                <br />
                    <input
                    id="deposit"
                    name="checkbox"
                    type="checkbox"
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    checked={transaction.amount > 0}
                    />
                </label>
                <br />
                <label htmlFor="withdraw">
                <div className="newTransaction__label">
                Withdraw
                </div> 
                <br />
                    <input
                    id="withdraw"
                    name="checkbox"
                    type="checkbox"
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    checked={transaction.amount < 0}
                    />
                </label>
                <br />
                </div>
                <label htmlFor="from">
                <div className='newTransaction__label'>
                From
                </div>
                <br />
                    <input
                    id="from"
                    type="text"
                    value={transaction.from}
                    onChange={handleTextChange}
                    placeholder="From"
                    required
                    />
                </label>
                <br />
                <label htmlFor="category">
                <div className='newTransaction__label'>
                Category
                </div>
                <br />
                    <select
                    className='newTransaction__select'
                    id="category"
                    name="category"
                    onChange={handleCategoryChange}
                    required
                    >
                        <option>Please Select One</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                        <option>Other</option>
                    </select>
                </label>
                <br />
                <div style={{display: display}}>
                <label htmlFor='category'>
                    <div className='newTransaction__label'>
                    Enter Category
                    </div>
                <br />
                <input
                    id="category"
                    type="text"
                    value={transaction.category}
                    onChange={handleTextChange}
                    placeholder="Enter Category"
                    required
                    />
                </label>
                </div>
                <br />
                <button type="submit" className='newTransaction__button'>Add New Transaction</button>
            </form>
        </div>
    )
}