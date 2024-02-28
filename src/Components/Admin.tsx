import { useAddAccountMutation, useGetAccountsQuery } from "../api/adminSlice"


const Admin = () => {
    const [AddAccount, response] = useAddAccountMutation();
    const { data, error, isLoading } = useGetAccountsQuery("");
    return (
        <div className="border border-white-500 p-4 mt-4">
            <h1 className="text-center font-bold text-orange-500 ">Admin Componet </h1>
            {/* <h2 className="text-yellow-500 font-bold text-center p-4">Total Point:{points}</h2> */}


            <div>
                {data && data.map((acc: any) => <div className="text-white flex gap-2" ><p>{acc.id}</p> : <p>{acc.amount}</p></div>)}
                {/* <button className="font-semibold bg-gray-300 text-black p-1" onClick={() => dispach(increment())}>Inrement + </button> */}
                {/* <button className="font-semibold bg-gray-300 text-black p-1">Decrement -</button>
                <input type="text" />
                */}
                <button className="font-semibold bg-gray-300 text-black p-1" onClick={() => AddAccount({ amount: 100 * data.length, id: data.length + 1 })}>Add Account</button>
            </div>
        </div>
    )
}

export default Admin