// import { createSlice } from "@reduxjs/toolkit";
// // import { searchReceiptFood } from "../../../api/FoodApi";

// export type Meal = {
//     idMeal: string;
//     strMeal: string;
//     strInstructions: string;
// }

// export type DetailType = {
//     detailMessage: string;
//     dataMeal: Meal[];
//     loading: boolean;
// }

// const initialState: DetailType = {
//     detailMessage: 'Hello Detail',
//     dataMeal: [],
//     loading: false
// } 

// export const detailSlice = createSlice({
//     name: 'detail',
//     initialState: initialState,
//     reducers: {},
//     // extraReducers: (builder) => {
//     //     builder.addCase(searchReceiptFood.fulfilled,(state,action) => {
//     //         console.log(action.payload)
//     //         state.dataMeal = action.payload.meals;
//     //         state.loading = true;
//     //     }),
//     //     builder.addCase(searchReceiptFood.pending,(state,action) => {
//     //         state.loading = false;  
//     //     })
//     // }
// }) 

// export default detailSlice.reducer