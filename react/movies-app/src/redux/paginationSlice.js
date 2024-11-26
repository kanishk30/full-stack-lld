import { createSlice } from '@reduxjs/toolkit'

const paginationSlice = createSlice({
    name: 'paginationSlice',
    initialState: {
        pageNo: 1
    },
    reducers: {
        handlePrev: (state) => {
            if (state.pageNo !== 1) {
                state.pageNo = state.pageNo - 1;
            }
        },
        handleNext: state => {
            state.pageNo = state.pageNo + 1
        }
    },

})

export const { handleNext, handlePrev } = paginationSlice.actions
export default paginationSlice.reducer