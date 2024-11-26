import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: '',
        todoList: ['task1', 'task2', 'task3']
    },
    reducers: {
        addTask(state) {
            state.todoList.push(state.value);
            state.value = ''
        },
        setTodoInputValue(state, action) {
            // entered input value lies in action.payload.
            // action = { type: '', payload: '' }
            state.value = action.payload;
            console.log(action, 'action in setValue function');
        }
    },
})
export const { addTask, setTodoInputValue } = todoSlice.actions
export default todoSlice.reducer