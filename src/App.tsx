import React from "react";
import Accounts from "./Components/Accounts"
import Bonus from "./Components/Bonus"

function App() {
  const [account, setAmount] = React.useState<any>({ amount: 0 });
  const [inputvalue, setInputValue] = React.useState<any>(0);
  const [bonus, setBonus] = React.useState({ points: 0 });

  const IncrementPoints = () => {
    setBonus({ points: bonus.points + 1 })
  }
  const onIncrement = () => {
    setAmount({ amount: +account.amount + 1 });
  }
  const onDecrement = () => {
    setAmount({ amount: +account.amount - 1 });
  }
  const incremtByValue = () => {
    setAmount({ amount: account.amount + inputvalue })
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white">

      <h1>App </h1>
      <h2>Current Amount :{account.amount}</h2>
      <h2>Total Bonus : {bonus.points}</h2>

      <Accounts onIncrement={onIncrement} onDecrement={onDecrement} incremtByValue={incremtByValue} account={account} setInputValue={setInputValue} inputvalue={inputvalue} />
      <Bonus IncrementPoints={IncrementPoints} bonus={bonus} />
    </div>

  )
}

export default App
