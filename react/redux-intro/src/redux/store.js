import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import TodoReducer from './todoSlice'
import UserReducer from './userSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: TodoReducer,
        user: UserReducer

    },
})

export default store