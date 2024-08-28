import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
    name: "updateMovies",
    initialState: []
    // id: "",
    // title: "",
    // releaseYear: "",
    ,
    reducers: {
        setMovieList(state, action) {
            state.push(action.payload);
            // state.id = action.payload.id;
            // state.title = action.payload.title;
            // state.releaseYear = action.payload.releaseYear;
        },
        deleteMovieList(state) {
            state = [];
            // state.id = "";
            // state.title = "";
            // state.releaseYear = "";
        }
    }
})

export const { setMovieList, deleteMovieList } = moviesSlice.actions
export default moviesSlice.reducer;