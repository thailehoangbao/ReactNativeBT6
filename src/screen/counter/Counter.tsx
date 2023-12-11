// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react';
// import {useSelector,useDispatch} from 'react-redux'
// import { RootState } from '../../../redux/store';
// import { increment, incrementByAmount } from './CounterReducer';

// export default function Counter() {
//     const count = useSelector((state: RootState) => state.CounterReducer.count);
//     const dispatch = useDispatch();

//     return (
//         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//             <Text>{count}</Text>
//             <TouchableOpacity 
//                 onPress={() => dispatch(incrementByAmount(3))}
//             >
//                 <Text style={{color:'black'}}>Increment</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }