import {StyleSheet} from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constant/constant'

export const styleHome = StyleSheet.create({
    home: {
        flex:1,
        backgroundColor: COLORS.white
    },
    toolBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SIZES.paddingSmall
    },
    avatar: {
        width:42,
        height:42,
        borderRadius: 21
    },
    toolbarTitle: {
        fontSize: FONTS.fontMedium,
        color: COLORS.primarycolor,
        fontWeight:'700'
    },
    subTitle: {
        fontSize: FONTS.fontSmall,
        color: COLORS.black
    },
    search: {
        padding: SIZES.paddingSmall
    },
    containerRecipe: {
        backgroundColor: COLORS.secondarycolor,
        borderRadius: 8,
        padding: SIZES.paddingSmall,
        flexDirection: 'row',
        alignItems:'center',
        marginTop: SIZES.marginSmall
    },
    recipesLink : {
        fontWeight: '700',
        color: COLORS.primarycolor,
        marginTop: SIZES.marginSmall
    },
    cTrending: {
        padding: SIZES.paddingSmall
    },
    cTrendingTitle: {
        fontSize: FONTS.fontMedium,
        fontWeight: '700'

    },
    cCategories: {
        padding: SIZES.paddingSmall
    },
    cCategoriesTitleWarrper: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    cCategoriesTitle: {
        fontSize: FONTS.fontMedium,
        fontWeight: '700',
        marginBottom: SIZES.marginSmall 
    },
    itemCCategory: {
        flexDirection: 'row',
        padding: SIZES.paddingSmall,
        backgroundColor: '#f4f4f4',
        borderRadius: 10,
        marginTop:  SIZES.marginSmall
    },
    itemCCategoryImage: {
        borderRadius: 10,
        width:100,
        height:100,
    },
    itemCCategoryText: {
        marginRight: SIZES.marginSmall,
        marginLeft: SIZES.marginSmall,
        flex: 1
    },
    itemCCategoryTitle: {
        fontSize: FONTS.fontSmall,
        fontWeight: '700'
    },
    itemCCategorySubTitle: {
        fontSize: FONTS.fontSmall,
        marginTop: SIZES.marginSmall
    }
})