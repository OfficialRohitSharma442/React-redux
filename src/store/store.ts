import { configureStore } from '@reduxjs/toolkit';
import accountResucer from "../slices/accountSlice";
import bonusReducer from "../slices/bonusSlice"
import rewardReducer from '../Reducers/reward';
import { adminApi } from '../api/adminSlice';
// import { Provider } from 'react-redux';


export const store = configureStore({
    reducer: {
        account: accountResucer,
        bonus: bonusReducer,
        reward: rewardReducer,
        [adminApi.reducerPath]: adminApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(adminApi.middleware),
});
