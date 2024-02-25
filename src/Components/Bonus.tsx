import React from "react"


const Bonus = () => {
    const [bonus, setBonus] = React.useState({ points: 0 });

    const IncrementPoints = () => {
        setBonus({ points: bonus.points + 1 })
    }

    return (
        <div className="border border-white-500 p-4 mt-4">
            <h1 className="text-center font-bold text-orange-500 ">Bonus Componet </h1>
            <h2 className="text-yellow-500 font-bold text-center p-4">Total Point:{bonus.points}</h2>
            <div className="flex justify-center gap-8">
                <button className="font-semibold bg-gray-300 text-black p-1" onClick={IncrementPoints}>Inrement + </button>
                {/* <button className="font-semibold bg-gray-300 text-black p-1">Decrement -</button>
                <input type="text" />
                <button className="font-semibold bg-gray-300 text-black p-1">increment By 0 +</button> */}
            </div>
        </div>
    )
}

export default Bonus