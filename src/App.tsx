import Accounts from "./Components/Accounts"
import Bonus from "./Components/Bonus"

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">

      <h1>App </h1>
      <h2>Current Amount :</h2>
      <h2>Total Bonus :</h2>

      <Accounts />
      <Bonus />
    </div>

  )
}

export default App
