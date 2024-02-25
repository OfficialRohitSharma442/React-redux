


const Accounts = ({ onIncrement, onDecrement, incremtByValue, account, setInputValue, inputvalue }: any) => {

    return (
        <div className="border border-white-500 p-4 mt-4">
            <h1 className="text-center font-bold text-orange-500 ">Account Componet </h1>
            <h2 className="text-yellow-500 font-bold text-center p-4">Amount:${account.amount}</h2>
            <div className="flex justify-center gap-8">
                <button className="font-semibold bg-gray-300 text-black p-1" onClick={onIncrement}>Inrement + </button>
                <button className="font-semibold bg-gray-300 text-black p-1" onClick={onDecrement}>Decrement -</button>
                <input type="text" className="text-black" onChange={(e) => {
                    setInputValue(+e.target.value)
                }} />
                <button className="font-semibold bg-gray-300 text-black p-1" onClick={incremtByValue}>increment By {inputvalue} +</button>
            </div>
        </div>
    )
}

export default Accounts