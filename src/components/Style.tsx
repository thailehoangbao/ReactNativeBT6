import { StyleSheet } from 'react-native'
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
        borderWidth: 1,
        borderColor: COLORS.primarycolor
    },
    tabIconsContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icons: {
        width: 24,
        height: 24,
    },
    tabIconSelected: {
        tintColor: COLORS.primarycolor
    },
    tabIconUnselected: {
        tintColor: COLORS.secondarycolor
    },
    tabButtonLine: {
        position:'absolute',
        bottom: 3,
        height:3,
        width:'100%',
        backgroundColor:COLORS.primarycolor,
        borderRadius:8
    }

})