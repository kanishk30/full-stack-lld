import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import TodoReducer from './todoSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: TodoReducer

    },
})

export default store