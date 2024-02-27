import { createAction, createSlice } from '@reduxjs/toolkit'

const incrementByAmount = createAction('account/incrementByAmount')



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
    extraReducers: (builder) => {
        builder.addCase(incrementByAmount, (state, action: any) => {
            if (action.payload >= 100) {

                state.points++;
            } else {
                state
            }
        })
    }
})
export const { increment } = bonusSlice.actions

export default bonusSlice.reducer