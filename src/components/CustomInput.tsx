import { View, Text,Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { style } from './Style'
import { ICONS } from '../constant/constant'

export const InputWidthIcon = () => (
    <View style={style.containerInput}>
        <Image style={style.icons} source={ICONS.search}/>
        <TextInput 
            style={style.input} 
            placeholder='Bạn đang tìm gì ?'
        />
    </View>
)