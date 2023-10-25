import { useEffect, useState } from "react";
import Menu from "../component/Menu";

const Home = () => {
  const [receivedDataFromIncome, setReceivedDataFromIncome] = useState("");
  const [receivedDataFromExpence, setreceivedDataFromExpence] = useState("");
  const [currentBalance, setcurrentBalance] = useState("");

  // console.log(receivedData);

  useEffect(() => {
    const IncomeBallence = localStorage.getItem("Balance"); // Get data from local storage using the key 'myData'
    setReceivedDataFromIncome(IncomeBallence);
    const ExpenceBalance = localStorage.getItem("BalanceFromExpence");
    setreceivedDataFromExpence(ExpenceBalance);
    setcurrentBalance(receivedDataFromIncome - receivedDataFromExpence);
  }, []);

  return (
    <div>
      <Menu />
      <div className=" flex flex-col justify-center items-center">
        <h1>This is Home Page</h1>
        <p>Income Ballence:{receivedDataFromIncome}</p>
        <p>Expense Ballence:{receivedDataFromExpence}</p>

        <p>Current Data:{currentBalance}</p>
      </div>
    </div>
  );
};

export default Home;
