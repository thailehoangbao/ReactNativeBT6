import { createStackNavigator } from "@react-navigation/stack"
import { SCREENS } from "../constant/constant"
import Home from "../screen/home/Home"
import SplashScreen from "../screen/splashscreen/SplashScreen"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SetttingScreen from "../screen/settingscreen/SetttingScreen";
import SearchScreen from "../screen/searchscreen/SearchScreen";
import {Image} from 'react-native'
import { MainStackParamList } from "./TypeCheck";
import { style } from "./Style";
import Tickscreen from "../screen/tickscreen/Tickscreen";


const Stack = createStackNavigator<MainStackParamList>()

export const MainNavigation = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name={SCREENS.SPLASHSCREEN} component={SplashScreen} />
        {/* <Stack.Screen name={SCREENS.HOME} component={Home} /> */}
        <Stack.Screen name={SCREENS.BUTTONTABS} component={MyTabs} />
    </Stack.Navigator>
)

const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name={SCREENS.HOME} component={Home} options={{
                tabBarLabel: SCREENS.HOME,
                tabBarIcon: () => (
                    <Image source={require('../images/homeicon.png')} style={style.icons}/>
                )
            }} />
            <Tab.Screen name={SCREENS.SETTING} component={SetttingScreen} options={{
                tabBarLabel: SCREENS.HOME,
                tabBarIcon: () => (
                    <Image source={require('../images/settingicons.png')} style={style.icons}/>
                )
            }} />
            <Tab.Screen name={SCREENS.TICKSCREEN} component={Tickscreen} options={{
                tabBarLabel: SCREENS.HOME,
                tabBarIcon: () => (
                    <Image source={require('../images/tickicons.png')} style={style.icons}/>
                )
            }} />
            <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} options={{
                tabBarLabel: SCREENS.HOME,
                tabBarIcon: () => (
                    <Image source={require('../images/searchicons.png')} style={style.icons}/>
                )
            }} />
        </Tab.Navigator>
    );
}