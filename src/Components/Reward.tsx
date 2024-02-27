import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "./../Reducers/reward";
import React from "react";



const Reward = () => {

    const points = useSelector((state: any) => state.reward.point);
    const dispach = useDispatch();
    const [inputboxval, setInputBoxVal] = React.useState<any>(0);

    return (
        <div className="border border-white-500 p-4 mt-4">
            <h1 className="text-center font-bold text-orange-500 ">Reward Componet </h1>
            <h2 className="text-yellow-500 font-bold text-center p-4">Total Point:${points}</h2>


            <div className="flex justify-center gap-8">
                <button className="font-semibold bg-gray-300 text-black p-1" onClick={() => dispach(increment())}>Inrement + </button>
                {/* <button className="font-semibold bg-gray-300 text-black p-1">Decrement -</button> */}
                <input type="text" className="text-black" onChange={(e) => setInputBoxVal(+e.target.value)} />
                <button className="font-semibold bg-gray-300 text-black p-1" onClick={() => dispach(incrementByAmount(inputboxval))}>increment By +{inputboxval} </button>
            </div>
        </div>
    )
}

export default Reward