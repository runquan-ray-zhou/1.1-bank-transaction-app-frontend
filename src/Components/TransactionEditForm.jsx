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

    function handleCategoryChange(event) {
        setTransactionDetails({...transaction, [event.target.id]: event.target.value})
    }

    function handleCheckboxChange(event){
        if (event.target.id === "withdraw") {
            setTransactionDetails({ ...transaction, amount: transaction.amount > 0 ? transaction.amount * -1 : transaction.amount * 1 });
        }
        if (event.target.id === "deposit") {
            setTransactionDetails({ ...transaction, amount: transaction.amount < 0 ? transaction.amount * -1 : transaction.amount * 1});
        }
    };
    
    function revertDate(str) {

        const monthObj = {
            "Jan" : "01",
            "Feb" : "02",
            "Mar" : "03",
            "Apr" : "04",
            "May" : "05",
            "Jun" : "06",
            "Jul" : "07",
            "Aug" : "08",
            "Sep" : "09",
            "Oct" : "10",
            "Nov" : "11",
            "Dec" : "12",
        }
        
        let splitDate = str.split(" ")
        if (str.includes("-")) {
            return str
        } else {
            return splitDate[2] + "-" + monthObj[splitDate[0]] + "-" + splitDate[1].slice(0,-1)
        }
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
                    value={transaction.date.length ? revertDate(transaction.date) : null}
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
                <div className='editTransaction__deposit-withdraw'>
                <label htmlFor="deposit">
                <div className="editTransaction__label">
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
                <div className="editTransaction__label">
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
                <select
                    className='editTransaction__select'
                    id="category"
                    name="category"
                    onChange={handleCategoryChange}
                    required
                    >
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                    </select>
                </label>
                <br />
                <button type="submit" className='editTransaction__button'>Edit Transaction</button>
            </form>
        </div>
    )
}