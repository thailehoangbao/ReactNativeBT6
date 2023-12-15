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
    },
    input: {
        height:50,
        backgroundColor: COLORS.grayColor,
        padding: SIZES.paddingSmall,
        width:'100%',
        color: COLORS.primarycolor
    },
    containerInput: {
        display: "flex",
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.grayColor,
        borderRadius:12,
        overflow: 'hidden',
        paddingLeft: SIZES.paddingMedium,
        width: '100%'
    },
    itemImage: {
        display:'flex',
        borderRadius: 20,
        width:300,
        height:400
    },
    itemContent: {
        position: 'absolute',
        justifyContent:'space-between',
        alignItems:'flex-start',
        width:300,
        height:400,
        bottom:0,
        left:15,
        padding: SIZES.paddingMedium
    },
    itemTextCorlor: {
        color: COLORS.black
    },
    itemContainerContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        height: 70,
        padding: 15,
    },
    item: {
        marginRight: SIZES.marginSmall,
        position: 'relative',
        padding: SIZES.paddingSmall 
    }
})