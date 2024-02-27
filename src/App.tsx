
import Accounts from "./Components/Accounts"
import Bonus from "./Components/Bonus"
import { useSelector } from "react-redux";
import Reward from "./Components/Reward";

function App() {
  const account = useSelector((state: any) => state.account.amount);
  const points = useSelector((state: any) => state.bonus.points);

  return (
    <div className="min-h-screen bg-gray-800 text-white">

      <h1>App </h1>
      <h2>Current Amount :{account}</h2>
      <h2>Total Bonus : {points}</h2>

      <Accounts />
      <Bonus />
      <Reward />
    </div>

  )
}

export default App
