import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        loading: true,
        error: false
    },
    reducers: {
        movieLoading: (state, action) => {
            state.loading = action.payload;
            state.error = false
        },
        movieError: state => {
            state.error = true;
            state.loading = false;
        },
        movieData: (state, action) => {
            console.log('action', action.payload)
            state.loading = false;
            state.movies = action.payload; // imp.
        }
    }
})

export const { movieData, movieError, movieLoading } = movieSlice.actions
export default movieSlice.reducer;