import { View, Text, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { ICONS, IMAGES, SIZES } from '../constant/constant'
import { BlurView } from '@react-native-community/blur'
import { style } from './Style'

type Props = {
    id: string,
    url : string,
    category: string,
    title: string,
    tags: string,
    onPress?: Function
}

export default function ItemFood(props: Props) {
    return (
        <TouchableOpacity style={style.item}
            onPress={() => {
                if(props.onPress != null) {
                    props.onPress(props.id)
                }
            }}
        >
            <Image style={style.itemImage} source={{uri: props.url}} resizeMode='cover' />
            <View style={style.itemContent}>
                <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                    <BlurView
                        blurType='light'
                        blurAmount={1}
                        blurRadius={12}
                        style={{width:80,height:40,justifyContent: 'center',alignItems: 'center',padding: 2}}
                    >
                        <Text style={style.itemTextCorlor}>{props.category}</Text>
                    </BlurView>
                </View>


                <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                    <BlurView
                        blurType='light'
                        blurAmount={1}
                        style={style.itemContainerContent}
                        blurRadius={12}
                    >
                        <View style={{ justifyContent: 'center', alignItems: 'center' ,flex:1}}>
                            <Text style={style.itemTextCorlor}>{props.title}                                                       {props.tags}</Text>
                        </View>
                        {/* <Image source={ICONS.tick} style={{width:20,height:20}} tintColor={'yellow'}/> */}
                    </BlurView>
                </View>
            </View>
        </TouchableOpacity>
    )
}