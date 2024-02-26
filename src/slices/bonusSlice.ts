import { createSlice } from '@reduxjs/toolkit'

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState: {
        points: 0,
    },
    reducers: {
        increment: (state) => {
            state.points += 1 //immer libeary that make state logice imutable 
        }
    },
})
export const { increment } = bonusSlice.actions

export default bonusSlice.reducer