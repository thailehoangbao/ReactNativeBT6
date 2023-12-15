import { View, Text, Image } from 'react-native'
import React from 'react'
import { IMAGES } from '../../../constant/constant'
import { styleHome } from '../StyleHome'

export default function Toolbar() {
    return (
        <View style={styleHome.toolBar}>
            <View>
                <Text style={styleHome.toolbarTitle}>Hello ByProgammer</Text>
                <Text style={styleHome.subTitle}>What you want to cook today?</Text>
            </View>
            <Image source={IMAGES.avatar} style={styleHome.avatar}/>
        </View>
    )
}