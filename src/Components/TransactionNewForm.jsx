import { useEffect, useState } from 'react'
import { useNavigate  } from 'react-router-dom'
import { nanoid } from 'nanoid'
import "./TransactionNewForm.css"

const API = import.meta.env.VITE_API_URL

export default function TransactionNewForm() {

    let navigate = useNavigate()

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

    function handleTextChange(event){
        setTransactionDetails({...transaction, [event.target.id]: event.target.value})
    } 

    function handleNumberChange(event){
        setTransactionDetails({ ...transaction, [event.target.id]: Number(event.target.value) })
    }

    function handleDateChange(event) {
        setTransactionDetails({...transaction, [event.target.id]: event.target.value})
    }
    

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
                    placeholder="date"
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
                    placeholder="name"
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
                    placeholder="amount"
                    required
                    />
                </label>
                <br />
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
                    placeholder="from"
                    required
                    />
                </label>
                <br />
                <label htmlFor="category">
                <div className='newTransaction__label'>
                Category
                </div>
                <br />
                    <input
                    id="category"
                    type="text"
                    value={transaction.category}
                    onChange={handleTextChange}
                    placeholder='category'
                    required
                    />
                </label>
                <br />
                <button type="submit" className='newTransaction__button'>Add New Transaction</button>
            </form>
        </div>
    )
}