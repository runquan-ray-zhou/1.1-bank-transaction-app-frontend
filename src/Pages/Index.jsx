import Transactions from "../Components/Transactions";

export default function Index({ transactions, setTransactions, amountColor, setAmountColor, totalAmount, setTotalAmount }) {
  return (
    <div className="Index">
      <Transactions
      totalAmount={totalAmount}
      setTotalAmount={setTotalAmount}
      transactions={transactions} 
      setTransactions={setTransactions} 
      amountColor={amountColor} 
      setAmountColor={setAmountColor}
      />
    </div>
  );
}