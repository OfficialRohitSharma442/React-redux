import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getUserAccount = createAsyncThunk(
    'account/getuser',
    async (userId: number) => {
        const { data } = await axios.get(`http://localhost:8080/accounts/${userId}`);
        return data.amount;
    }
)

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
    extraReducers: (builder) => {
        builder.addCase(getUserAccount.fulfilled, (state, action) => {
            state.amount = action.payload
        })
        .addCase(getUserAccount.pending, (state, action) => {
            state.pending
        })
    }
})
export const { increment, decrement, incrementByAmount } = acountSlice.actions

export default acountSlice.reducer