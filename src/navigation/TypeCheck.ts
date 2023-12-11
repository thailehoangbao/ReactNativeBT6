import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { SCREENS } from '../constant/Constant';
import type { RouteProp } from '@react-navigation/native';

export type MainStackParamList = {
    HOME: undefined,
    SPLASHSCREEN: undefined,
    BUTTONTABS: undefined
};

export type PropsPush = NativeStackScreenProps<MainStackParamList,SCREENS.HOME>
export type PropsPushButtonTabsPage = NativeStackNavigationProp<MainStackParamList,SCREENS.BUTTONTABS>

export type PropsRoute = RouteProp<MainStackParamList,SCREENS.HOME>

