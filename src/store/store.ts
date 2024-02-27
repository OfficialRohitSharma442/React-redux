import { configureStore } from '@reduxjs/toolkit';
import accountResucer from "../slices/accountSlice";
import bonusReducer from "../slices/bonusSlice"
import rewardReducer from '../Reducers/reward';
// import { Provider } from 'react-redux';


export const store = configureStore({
    reducer: {
        account: accountResucer,
        bonus: bonusReducer,
        reward: rewardReducer

    }
})
