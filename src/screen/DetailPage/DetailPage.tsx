import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HeaderFood from './components/HeaderFood'
import Body from './components/Body'
import { useRoute } from '@react-navigation/native'
import { useGetDetailMealQuery } from '../../../api/FoodApi'
import { PropsRouteDetail } from '../../navigation/TypeCheck'
import Toast from 'react-native-toast-message'

export default function DetailPage() {
    const route = useRoute<PropsRouteDetail>()
    const id = route.params?.id
    const { data, isLoading } = useGetDetailMealQuery(id);
    const meal = data?.meals[0];
    return (
        <ScrollView style={{flex:1}}>
            <HeaderFood image={meal?.strMealThumb ? meal?.strMealThumb : 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg'} title={meal?.strMeal ? meal?.strMeal : ''} id={meal?.idMeal ? meal?.idMeal : ''}/>
            <Body meal={meal}/>
            <Toast />
        </ScrollView>
    )
}