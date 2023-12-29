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


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseCategory, ResponseMeal } from './Type';
export const FoodApi = createApi({
    reducerPath: 'FoodApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1/' }),
    endpoints: builder => ({
        getTrendingMeal: builder.query<ResponseMeal, string>({
            query: (name) => `search.php?s=${name}`
        }),
        getCategories: builder.query<ResponseCategory, void>({
            query: (name) => `categories.php`
        }),
        getDetailMeal: builder.query<ResponseMeal, string>({
            query: (id) => `lookup.php?i=${id}`
        }),
    })
})

export const { useGetTrendingMealQuery, useGetCategoriesQuery,useGetDetailMealQuery } = FoodApi;