import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: true,
        error: false
    },
    reducers: {
        userLoading: (state, action) => {
            state.loading = action.payload;
            state.error = false
        },
        userError: state => {
            state.error = true;
            state.loading = false;
        },
        userData: (state, action) => {
            state.loading = false;
            state.user = action.payload; // imp.
        }
    }
})

export const { userLoading, userData, userError } = userSlice.actions;
export default userSlice.reducer