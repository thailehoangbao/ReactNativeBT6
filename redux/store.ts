// import { configureStore } from '@reduxjs/toolkit'
// import CounterReducer from '../src/screen/counter/CounterReducer'
// import { foodApi } from '../api/FoodApi'
// // import DetailReducer from '../src/screen/detail/DetailReducer'






// export const store = configureStore({
//     reducer: {
//         CounterReducer: CounterReducer,
//         // DetailReducer: DetailReducer
//         [foodApi.reducerPath]: foodApi.reducer
//     },
//     middleware: (getDefaulftMiddleware) => getDefaulftMiddleware().concat(foodApi.middleware) 
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

import { configureStore } from "@reduxjs/toolkit";
import { FoodApi } from "../api/FoodApi";
import { BookMarkSlice, ListDataBookmark } from "./BookMarkReducer";



export const store = configureStore({
    reducer: {
        [FoodApi.reducerPath]: FoodApi.reducer,
        [BookMarkSlice.reducerPath] : BookMarkSlice.reducer
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(FoodApi.middleware),
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
