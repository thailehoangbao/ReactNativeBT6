import { createStackNavigator } from "@react-navigation/stack"
import { ICONS, SCREENS } from "../constant/constant"
import Home from "../screen/home/Home"
import SplashScreen from "../screen/splashscreen/SplashScreen"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SetttingScreen from "../screen/settingscreen/SetttingScreen";
import SearchScreen from "../screen/searchscreen/SearchScreen";
import { MainStackParamList } from "./TypeCheck";
import Tickscreen from "../screen/tickscreen/Tickscreen";
import TabsIcons from "../components/TabsIcons";


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
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    position:"absolute",
                    bottom: 0,
                    left:0,
                    right:0,
                    elevation:1
                }
            }}
        >
            <Tab.Screen name={SCREENS.HOME} component={Home} options={{
                tabBarLabel: SCREENS.HOME,
                tabBarIcon: ({focused}) => (
                    <TabsIcons focused={focused} url={ICONS.home} title={SCREENS.HOME}/>
                )
            }} />
            <Tab.Screen name={SCREENS.SETTING} component={SetttingScreen} options={{
                tabBarLabel: SCREENS.HOME,
                tabBarIcon: ({focused}) => (
                    <TabsIcons focused={focused} url={ICONS.setting} title={SCREENS.SETTING}/>
                )
            }} />
            <Tab.Screen name={SCREENS.TICKSCREEN} component={Tickscreen} options={{
                tabBarLabel: SCREENS.HOME,
                tabBarIcon: ({focused}) => (
                    <TabsIcons focused={focused} url={ICONS.tick} title={SCREENS.TICKSCREEN}/>
                )
            }} />
            <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} options={{
                tabBarLabel: SCREENS.HOME,
                tabBarIcon: ({focused}) => (
                    <TabsIcons focused={focused} url={ICONS.search} title={SCREENS.SEARCH}/>
                )
            }} />
        </Tab.Navigator>
    );
}