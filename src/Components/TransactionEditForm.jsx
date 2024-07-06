import { useEffect, useState } from 'react'
import { useParams, useNavigate  } from 'react-router-dom'
import "./TransactionEditForm.css"

const API = import.meta.env.VITE_API_URL

export default function TransactionEditForm() {

    let navigate = useNavigate()
    let { id } = useParams()

    const [transaction, setTransactionDetails] = useState(
        {
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

      useEffect(() => {
        fetch(`${API}/transactions/${id}`)
        .then((res) => {
            return res.json()
        })
        .then((resJSON) => {
            setTransactionDetails(resJSON)
        })
        .catch((error) => console.error(error))
    },[])

    function updateTransaction() {
        fetch(`${API}/transactions/${id}`, {
            method: "PUT",
            body: JSON.stringify(transaction),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            navigate(`/transactions/${id}`)
        })
        .catch((error) => console.error(error))
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        updateTransaction()
        setTransactionDetails(
            {
                item_name: "",
                amount: 0,
                date: "",
                from: "",
                category: ""
            }
        )
    }

    return (
        <div className='editTransaction'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date" >
                <div className='editTransaction__label'>
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
                <div className='editTransaction__label'>
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
                <div className='editTransaction__label'>
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
                <div className='editTransaction__label'>
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
                <div className='editTransaction__label'>
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
                <button type="submit" className='editTransaction__button'>Edit Transaction</button>
            </form>
        </div>
    )
}