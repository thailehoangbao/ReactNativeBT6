import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, ICONS, IMAGES } from '../../../constant/constant'
import { styleDetail } from '../StyleDetail'



export default function HeaderFood() {
    return (
        <View style={styleDetail.cDetail}>
            <Image source={IMAGES.food3} style={styleDetail.imageStyle} />
            <View style={styleDetail.cContent}>
                <View style={styleDetail.cTop}>
                    <Image source={ICONS.left} style={styleDetail.icons} />
                    <Image source={ICONS.tick} style={styleDetail.icons} />
                </View>
                <View style={styleDetail.cBottomContent}>
                        <View style={styleDetail.cBottomAvatar}>
                            <Image source={IMAGES.avatar} style={styleDetail.avatar} />
                            <View>
                                <Text style={{ color: COLORS.white }}>Recipe By</Text>
                                <Text style={{ color: COLORS.white, fontSize: FONTS.fontSmall, fontWeight: '700' }}>Maria</Text>
                            </View>
                        </View>
                        <Image source={ICONS.right} style={styleDetail.icons} />
                </View>
            </View>
        </View>
    )
}