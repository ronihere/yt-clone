import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        
    },
    reducers: {
        setSearchListStore: (state, action) => {
            Object.assign(state, action.payload)
        },
        searchQueryParam: (state, action) => {
            state.queryParam = action.payload
        }
    }
})

export const { setSearchListStore, searchQueryParam } = searchSlice.actions;
export default searchSlice.reducer;