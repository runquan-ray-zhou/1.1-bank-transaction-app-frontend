import Transactions from "../Components/Transactions";

export default function Index({ amountColor, setAmountColor, totalAmount, setTotalAmount }) {
  return (
    <div className="Index">
      <Transactions
      totalAmount={totalAmount}
      setTotalAmount={setTotalAmount}
      amountColor={amountColor} 
      setAmountColor={setAmountColor}
      />
    </div>
  );
}