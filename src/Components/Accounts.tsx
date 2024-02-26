import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../slices/accountSlice";



const Accounts = () => {
    const amount = useSelector((state: any) => state.account.amount);
    const dispach = useDispatch();
    const [inputvalue, setInputValue] = React.useState<any>(0);
    return (
        <div className="border border-white-500 p-4 mt-4">
            <h1 className="text-center font-bold text-orange-500 ">Account Componet </h1>
            <h2 className="text-yellow-500 font-bold text-center p-4">Amount:${amount}</h2>
            <div className="flex justify-center gap-8">
                <button className="font-semibold bg-gray-300 text-black p-1" onClick={() => dispach(increment())}>Inrement + </button>
                <button className="font-semibold bg-gray-300 text-black p-1" onClick={() => dispach(decrement())}>Decrement -</button>
                <input type="text" className="text-black" onChange={(e) => {
                    setInputValue(+e.target.value)
                }} />
                <button className="font-semibold bg-gray-300 text-black p-1" onClick={() => dispach(incrementByAmount(inputvalue))}>increment By {inputvalue} +</button>
            </div>
        </div>
    )
}

export default Accounts