import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './slices';

export const store = configureStore({
    reducer: {
        profile: profileReducer
    }
});


