import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from './paginationSlice'
import movieReducer from './movieSlice'

const store = configureStore({
    reducer: {
        pagination: paginationReducer,
        movies: movieReducer
    },
})

export default store