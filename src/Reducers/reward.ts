import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    point: 0
}
export const increment = createAction('reward/increment');
export const incrementByAmount = createAction('reward/incrementByAmount');

const rewardReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state) => {
            state.point++
        })
        .addCase(incrementByAmount, (state, action: any) => {
            state.point += action.payload
        })

})

export default rewardReducer;