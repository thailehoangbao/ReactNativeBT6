// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// export type CounterType = {
//     count: number;
// }

// const initialState: CounterType = {
//     count: 1
// } 

// export const counterSlice = createSlice({
//     name: 'counter',
//     initialState: initialState,
//     reducers: {
//         increment: (state) => {
//             state.count++;
//         },
//         incrementByAmount: (state,action: PayloadAction<number>) => {
//             state.count += action.payload
//         }
//     }
// }) 

// export const {increment,incrementByAmount} = counterSlice.actions
// export default counterSlice.reducer