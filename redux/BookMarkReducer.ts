import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import storage from "../src/storage/storage";
import { STORAGE_KEY } from "../src/constant/constant";
import { TypeBookMark } from "../api/Type";

export const ListDataBookmark = createAsyncThunk(
    'listdata/bookmark',
    async (item) => {
        return item
    }
)
interface BookmarksState {
    listData: TypeBookMark[];
}
const initialState: BookmarksState = {
    listData: [],
};

// Then, handle actions in your reducers:
export const BookMarkSlice = createSlice({
    name: 'listdata/bookmark',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(ListDataBookmark.fulfilled, (state, action: any) => {
            state.listData = action.payload;
        })
    },
})