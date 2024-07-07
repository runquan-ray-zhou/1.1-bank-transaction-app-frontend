import TransactionDetails from "../Components/TransactionDetails";

export default function Show({ setTotalAmount, setAmountColor }) {
  return (
    <div className="Show">
      <TransactionDetails setTotalAmount={setTotalAmount} setAmountColor={setAmountColor}/>
    </div>
  );
}