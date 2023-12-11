// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// // export const searchReceiptFood = createAsyncThunk(
// //     'food/search',
// //     async (value:string, thunkAPI) => {
// //         const data = (await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)).data
// //         return data;
// //     }
// // )

// export type Meal = {
//     idMeal: string;
//     strMeal: string;
//     strInstructions: string;
// }

// export type ResSearch = {
//     meals: Meal[]
// }

// export const foodApi = createApi({
//     reducerPath: 'foodApi',
//     baseQuery: fetchBaseQuery({baseUrl:'https://www.themealdb.com/api/json/v1/1/'}),
//     endpoints: (builder) => ({
//         searchMealByName: builder.query<ResSearch,string>({
//             query:(name) => `search.php?s=${name}`
//         }),
//         lookUpMealById: builder.query({
//             query:(name) => 'lookup.php?i=52772'
//         })

//     })
// })

// export const {useSearchMealByNameQuery} = foodApi;

