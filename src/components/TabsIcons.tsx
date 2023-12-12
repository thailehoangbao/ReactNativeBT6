import { View, Text, Image } from 'react-native'
import React from 'react'
import {style}  from '../components/Style'
import { COLORS } from '../constant/constant'
type Props = {
    title: string
    url: any
    focused: boolean
}

export default function TabsIcons(Props:Props ) {
    return (
        <View style={style.tabIconsContainer}>
            <Image source={Props.url} style={[style.icons,Props.focused ? style.tabIconSelected : style.tabIconUnselected]}/>
            <Text style={{fontSize:10}}>{Props.title}</Text>
            <View style={Props.focused && style.tabButtonLine}/>
        </View>
    )
}