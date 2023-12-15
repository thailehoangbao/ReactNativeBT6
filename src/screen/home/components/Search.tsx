import { View, Text, Image } from 'react-native'
import React from 'react'
import { InputWidthIcon } from '../../../components/CustomInput'
import { styleHome } from '../StyleHome'
import { IMAGES } from '../../../constant/constant'

export default function Search() {
    return (
        <View style={styleHome.search}>
            <InputWidthIcon />
            <View style={styleHome.containerRecipe}>
                <Image source={IMAGES.receiptBookmark} style={{ width: 80, height: 80}} />

                <View style={{flex:1,marginLeft:12}}>
                    <Text>You have 12 receipt that? You see receipt</Text>
                    <Text style={styleHome.recipesLink}>See yours Recipes?</Text>
                </View>
            </View>
        </View>
    )
}