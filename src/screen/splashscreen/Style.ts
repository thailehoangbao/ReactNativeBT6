import {StyleSheet} from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constant/constant'
export const style = StyleSheet.create({
    container: {
        flex: 1
    },
    absolute: {
        width:'100%',
        height: '100%',
        position:'absolute'
    },
    containerContent: {
        height:350,
        bottom: 0,
        padding: SIZES.paddingLarge,
    },
    title: {
        fontSize: FONTS.fontLarge,
        color: COLORS.white,
        fontWeight: '700'
    }
})