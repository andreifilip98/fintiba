import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './profileSlices';
import moviesReducer from './movieSlices';

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        movies: moviesReducer
    }
});


