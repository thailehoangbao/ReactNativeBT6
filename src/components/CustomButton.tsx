import { TouchableOpacity } from "react-native-gesture-handler"
import { Text,ViewStyle } from 'react-native'
import { style } from "./Style"
import { useNavigation } from "@react-navigation/native"
import { PropsPushButtonTabsPage } from "../navigation/TypeCheck"
import { SCREENS } from "../constant/constant"

type Props = {
    title: string
    style?: ViewStyle
}

export const PrimaryButton = (props: Props) => {
    const navigation = useNavigation<PropsPushButtonTabsPage>()

    return <TouchableOpacity style={[style.btnPrimary,props.style]} onPress={() => {navigation.push(SCREENS.BUTTONTABS)}}>
        <Text style={style.btnColorWhite}>{props.title}</Text>
    </TouchableOpacity>
}

export const OutlineButton = (props: Props) => {
    return <TouchableOpacity style={style.btnOutline}>
        <Text style={style.btnColorWhite}>{props.title}</Text>
    </TouchableOpacity>
}