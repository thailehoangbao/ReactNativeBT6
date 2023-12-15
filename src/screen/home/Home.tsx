import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Toolbar from './components/Toolbar'
import Search from './components/Search'
import { styleHome } from './StyleHome'
import Trending from './components/Trending'
import { ScrollView } from 'react-native'
import { SIZES } from '../../constant/constant'
import Categories from './components/Categories'

export default function Home() {
    return (
        <SafeAreaView style={styleHome.home}>
            <Toolbar />
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: SIZES.marginSuper,backgroundColor:'white'}}>
                <Search />
                <Trending />
                <Categories />
            </ScrollView>
        </SafeAreaView>
    )
}