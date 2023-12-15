import { View, Text } from 'react-native'
import React from 'react'
import ItemCategories from './ItemCategories'
import { styleHome } from '../StyleHome'
import { COLORS } from '../../../constant/constant'
import { useGetCategoriesQuery } from '../../../../api/FoodApi'


export default function Categories() {
    const data = useGetCategoriesQuery().data?.categories ?? [];

    return (
        <View style={styleHome.cCategories}>
            <View style={styleHome.cCategoriesTitleWarrper}>
                <Text style={styleHome.cCategoriesTitle}>Categories</Text>
                <Text style={{color: COLORS.primarycolor}}>View All</Text>
            </View>
            {data.map((item, index) => <ItemCategories key={index} title={item.strCategory} url={item.strCategoryThumb} desc={item.strCategoryDescription}/>)}
        </View>
    )
}