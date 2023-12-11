// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { AppDispatch, RootState } from '../../../redux/store'
// import { useSearchMealByNameQuery } from '../../../api/FoodApi'
// // import { searchReceiptFood } from '../../../api/FoodApi'
// // import { Meal } from './DetailReducer'

// export default function Detail() {
//     // const DetailMessage = useSelector((state: RootState) => state.DetailReducer.detailMessage)
//     // const DataMeal = useSelector((state: RootState) => state.DetailReducer.dataMeal)
//     // const dispatch: AppDispatch = useDispatch()
//     const {data,error,isLoading} = useSearchMealByNameQuery('pizza')
//     console.log(data?.meals)
//     return (
//         <View>
//             {/* <Text>{DetailMessage}</Text> */}
//             <TouchableOpacity 
//             // onPress={() => dispatch(searchReceiptFood('bread'))}
//             >
//                 <Text>Click</Text>
//             </TouchableOpacity>
//             {/* {DataMeal.map((data: Meal,key:number) => <Text key={key}>{data.strInstructions}</Text>)} */}
//         </View>
//     )
// }