import { useState } from "react";
import Menu from "../component/Menu";

const IncomePage = () => {
  const [amount, setAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  const handleAddIncome = () => {
    // Convert amount to a number before adding
    const income = parseFloat(amount);
    // Check if income is a valid number
    if (!isNaN(income)) {
      // Update the totalAmount state by adding the current income
      setTotalAmount((prevTotal) => prevTotal + income);

      localStorage.setItem("Balance", totalAmount);

      // Clear the input field after adding income
      setAmount("");
    }
  };

  return (
    <div>
      <Menu />
      <div className=" flex justify-center items-center">
        <h1>IncomePage</h1>
      </div>
      <div className=" grid place-content-center">
        <input type="number" value={amount} onChange={handleInputChange} />
      </div>

      <div className=" flex flex-col items-center">
        <button className=" w-[10%]" onClick={handleAddIncome}>
          Add Income
        </button>
        <p className="  text-4xl font-semibold">Total Income: {totalAmount}</p>
      </div>
    </div>
  );
};

export default IncomePage;