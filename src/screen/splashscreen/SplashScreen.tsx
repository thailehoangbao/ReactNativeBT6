import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, SCREENS, TEXT } from '../../constant/constant'
import LinearGradient from 'react-native-linear-gradient'
import { style } from './Style'
import { OutlineButton, PrimaryButton } from '../../components/CustomButton'


export default function SplashScreen() {

    return (
        <View style={style.container}>
            <Image source={IMAGES.backgroundSlashGreen} resizeMode='repeat' />
            <LinearGradient colors={[COLORS.transparent, COLORS.black]} style={style.absolute}>
                <View style={[style.absolute, style.containerContent]}>
                    <Text style={style.title}>Cooking Delicious Food Easily</Text>
                    <Text style={{ color: "#ccc" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsa error veniam recusandae tempore explicabo id voluptatibus illum perspiciatis eveniet. Eveniet a possimus doloribus animi vel dolore architecto minima facere? </Text>
                    <PrimaryButton style={{ marginBottom: 12, marginTop: 12 }} title={TEXT.LOGIN}  />
                    <OutlineButton title={TEXT.SIGNUP} />
                </View>
            </LinearGradient>
        </View>
    )
}