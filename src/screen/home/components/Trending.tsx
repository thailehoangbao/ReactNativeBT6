import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ItemFood from '../../../components/ItemFood'
import { styleHome } from '../StyleHome'
import { useGetTrendingMealQuery } from '../../../../api/FoodApi'
import { useNavigation } from '@react-navigation/native'
import { PropsPushTrendingToDetailPage } from '../../../navigation/TypeCheck'
import { SCREENS } from '../../../constant/constant'

export default function Trending() {
    const {data,isLoading} = useGetTrendingMealQuery('rice');
    const navigation = useNavigation<PropsPushTrendingToDetailPage>()
    const onSendToDetailPage = (id:string) => {
        navigation.push(SCREENS.DETAIL,{id})
    } 
    return (
        <View style={styleHome.cTrending}>
            <Text style={styleHome.cTrendingTitle}>Top Trending</Text>
            <FlatList 
                style={{borderRadius: 12}}
                data={data?.meals ?? []}
                horizontal
                renderItem={({item}) => <ItemFood id={item.idMeal} onPress={onSendToDetailPage} url={item.strMealThumb} title={item.strMeal} category={item.strInstructions} tags={item.strTags}/>}
            />
        </View>
    )
}