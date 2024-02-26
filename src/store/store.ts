import { configureStore } from '@reduxjs/toolkit';
import accountResucer from "../slices/accountSlice";
import bonusReducer from "../slices/bonusSlice"
// import { Provider } from 'react-redux';


export const store = configureStore({
    reducer: {
        account: accountResucer,
        bonus: bonusReducer

    }
})
