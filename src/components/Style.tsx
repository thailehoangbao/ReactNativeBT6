import {StyleSheet} from 'react-native'
import { COLORS, SIZES } from '../constant/constant'
export const style = StyleSheet.create({
    btnPrimary: {
        padding: SIZES.paddingSmall,
        backgroundColor: COLORS.primarycolor,
        borderRadius: 12
    },
    btnColorWhite: {
        color: COLORS.white,
        textAlign: 'center',
        fontWeight: '700'
    },
    btnOutline: {
        padding: SIZES.paddingSmall,
        borderRadius: 12,
        borderWidth:1,
        borderColor: COLORS.primarycolor
    }
})