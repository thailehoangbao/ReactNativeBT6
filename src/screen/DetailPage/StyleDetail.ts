import {StyleSheet} from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constant/constant'

export const styleDetail = StyleSheet.create({
    cDetail: {
        position: 'relative'
    },
    imageStyle: {
        width: '100%',
        height: 300,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    icons: {
        width: 28,
        height:28,
        borderRadius:8,
        tintColor: COLORS.white
    },
    avatar: {
        width: 45,
        height: 45,
        marginRight: SIZES.marginSmall,
        borderRadius: 22.5,
        borderWidth:1,
    },
    avatarMarginLeft: {
        width: 45,
        height: 45,
        marginRight: SIZES.marginSmall,
        borderRadius: 22.5,
        borderWidth:1,
        marginLeft: -32
    },
    cContent: {
        flexDirection:'column',
        justifyContent: 'space-between',
        height: 300,
        paddingLeft: SIZES.paddingSmall,
        paddingRight: SIZES.paddingSmall
    },
    cBottomContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SIZES.paddingSmall,
        borderWidth: 1,
        borderColor: COLORS.white,
        borderRadius: 12,
        marginBottom: SIZES.paddingSmall,
        overflow: 'hidden',
    },
    cBottomAvatar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingTop: SIZES.paddingSmall
    },
    cBody: {
        padding: SIZES.paddingSmall
    },
    cBodyFlexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    textHeading: {
        fontSize: FONTS.fontNormal,
        fontWeight: '700',
        flex:1,
    },
    subText: {
        color: COLORS.lightGray
    },
    cIncredientText: {
        fontSize: FONTS.fontNormal,
        fontWeight:  '700'
    },
    cIncredientItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SIZES.marginSmall
    }
})