import { useState, useEffect } from 'react'
import "./About.css"
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Radar } from 'react-chartjs-2';
  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  const API = import.meta.env.VITE_API_URL

  export default function About() {

    const [ transactions, setTransactions ] = useState([])

    useEffect(() => {
        fetch(`${API}/transactions`)
        .then((response) => response.json())
        .then((responseJSON) => setTransactions(responseJSON))
        .catch((error) => {
            navigate("/notfound")
            console.error(error)
        });
    }, [])

    const labels = transactions.map(obj => obj.item_name)
    
    const incomeData = transactions.map(obj => {
        if (obj.amount > 0) {
            return obj.amount
        } else {
            return 0
        }
    })

    const expenseData = transactions.map(obj => {
        if (obj.amount < 0) {
            return obj.amount
        } else {
            return 0
        }
    })

    const data = {
        labels,
      datasets: [{
        label: 'Expense',
        data: expenseData,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: 'Income',
        data: incomeData,
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    };
    
    return (
        <div className="about">
            <Radar data={data} />
            <p>Bank Bankster by: Runquan (Ray) Zhou</p>
        </div>
    )
}