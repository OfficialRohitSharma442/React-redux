import { createSlice } from '@reduxjs/toolkit'

export const acountSlice = createSlice({
    name: 'account',
    initialState: {
        amount: 0,
    },
    reducers: {
        increment: (state) => {
            state.amount += 1 //immer libeary that make state logice imutable 
        },
        decrement: (state) => {
            state.amount -= 1
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload
        },
    },
})
export const { increment, decrement, incrementByAmount } = acountSlice.actions

export default acountSlice.reducer