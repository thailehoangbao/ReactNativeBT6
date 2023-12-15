import { View, Text, Image } from 'react-native'
import React from 'react'
import { IMAGES } from '../../../constant/constant'
import { styleHome } from '../StyleHome'

type Props = {
    url : string;
    title: string;
    desc:   string;
}

export default function ItemCategories(props: Props) {
    return (
        <View style={styleHome.itemCCategory}>
            <Image source={{uri: props.url}} resizeMode='cover' style={styleHome.itemCCategoryImage}/>
            <View style={styleHome.itemCCategoryText}>
                <Text style={styleHome.itemCCategoryTitle}>{props.title}</Text>
                <Text style={styleHome.itemCCategorySubTitle} numberOfLines={1}>{props.desc}</Text>
            </View>
        </View>
    )
}