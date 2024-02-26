
import Accounts from "./Components/Accounts"
import Bonus from "./Components/Bonus"
import { useSelector } from "react-redux";

function App() {
  const account = useSelector((state: any) => state.account.amount);
  const points = useSelector((state: any) => state.bonus.points);
  //  console.log(account)
  // const [account, setAmount] = React.useState<any>({ amount: 0 });
  // const [inputvalue, setInputValue] = React.useState<any>(0);
  // const [bonus, setBonus] = React.useState({ points: 0 });

  // const IncrementPoints = () => {
  //   setBonus({ points: bonus.points + 1 })
  // }
  // const onIncrement = () => {
  //   setAmount({ amount: +account.amount + 1 });
  // }
  // const onDecrement = () => {
  //   setAmount({ amount: +account.amount - 1 });
  // }
  // const incremtByValue = () => {
  //   setAmount({ amount: account.amount + inputvalue })
  // }

  return (
    <div className="min-h-screen bg-gray-800 text-white">

      <h1>App </h1>
      <h2>Current Amount :{account}</h2>
      <h2>Total Bonus : {points}</h2>

      <Accounts />
      <Bonus />
    </div>

  )
}

export default App
