import { useEffect, useState } from 'react'
import { useNavigate  } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL

export default function TransactionNewForm() {

    const [ transactions, setTransactions ] = useState([])

    useEffect(() => {
        fetch(`${API}/transactions`)
        .then((response) => response.json())
        .then((responseJSON) => setTransactions(responseJSON))
        .catch((error) => console.error(error));
    }, [])

    let navigate = useNavigate()

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

    const handleNumberChange = (event) => {
        setTransactionDetails({ ...transaction, [event.target.id]: Number(event.target.value) })
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
            navigate(`/transactions/${transactions.length + 1}`)
        })
        .catch((error) => console.error(error))
    }


    function handleSubmit(e) {
        e.preventDefault()
        addTransaction()
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
        <div>
            New Transaction Form
            <form onSubmit={handleSubmit}>
                <label htmlFor="date" >
                Date
                <br />
                    <input
                    id="date"
                    type="text"
                    value={transaction.date}
                    onChange={handleTextChange}
                    placeholder="date"
                    required
                    />
                </label>
                <br />
                <label htmlFor="item_name">
                Name
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
                Amount
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
                From
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
                Category
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
                <button type="submit">Add New Transaction</button>
            </form>
        </div>
    )
}