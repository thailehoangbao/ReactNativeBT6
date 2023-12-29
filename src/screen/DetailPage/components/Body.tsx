import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { IMAGES, SIZES } from '../../../constant/constant'
import { styleDetail } from '../StyleDetail'
import { useRoute } from '@react-navigation/native'
import { PropsRouteDetail } from '../../../navigation/TypeCheck'
import { useGetDetailMealQuery } from '../../../../api/FoodApi'
import { Meal } from '../../../../api/Type'
type Props = {
    meal?: Meal
}

export default function Body({meal}: Props) {
    

    return (
        <ScrollView style={styleDetail.cBody}>
            <View style={styleDetail.cBodyFlexRow}>
                <Text style={styleDetail.textHeading}>{meal?.strMeal}</Text>
                <Image source={IMAGES.food3} style={styleDetail.avatar} />
                <Image source={IMAGES.food3} style={styleDetail.avatarMarginLeft} />
                <Image source={IMAGES.food3} style={styleDetail.avatarMarginLeft} />
                <Image source={IMAGES.food3} style={styleDetail.avatarMarginLeft} />
            </View>

            <View style={styleDetail.cBodyFlexRow}>
                <Text style={styleDetail.subText}>
                    {meal?.strCategory}
                </Text>
                <View style={{ paddingRight: SIZES.paddingSmall }}>
                    <Text style={[styleDetail.subText, { textAlign: 'right' }]}>4 People</Text>
                    <Text style={styleDetail.subText}>{meal?.strTags}</Text>
                </View>
            </View>

                <Text style={styleDetail.cIncredientText}>Intructions</Text>
                <Text style={[{ flex: 1 }]}>{meal?.strInstructions}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, error aperiam doloremque deleniti dolore nesciunt sunt pariatur sit. Labore animi ducimus illo? Illo eos, nulla unde nesciunt cum inventore quis!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos laboriosam voluptatem nihil architecto, eligendi aliquam fugit, suscipit quod facilis sapiente quis nemo aliquid, dolorum error. Ducimus quaerat neque exercitationem quos.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, inventore dolorum. A natus ullam voluptates temporibus in ad eius rerum accusantium accusamus fugit, minus magnam eum laudantium magni est unde.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus accusamus fugiat quod autem repellendus asperiores qui quibusdam a, cupiditate id, aliquam odio, ducimus dolore. Quis natus excepturi eius minus in.
                </Text>
            <View>

            </View>

            <View style={{marginTop:SIZES.marginSmall}}>
                <Text style={styleDetail.cIncredientText}>Incredient</Text>
                <View style={styleDetail.cIncredientItem}>
                    <Text>{meal?.strIngredient1}</Text>
                    <Text>{meal?.strMeasure1}</Text>
                </View>

                <View style={styleDetail.cIncredientItem}>
                <Text>{meal?.strIngredient2}</Text>
                    <Text>{meal?.strMeasure2}</Text>
                </View>

                <View style={styleDetail.cIncredientItem}>
                <Text>{meal?.strIngredient3}</Text>
                    <Text>{meal?.strMeasure3}</Text>
                </View>

                <View style={styleDetail.cIncredientItem}>
                <Text>{meal?.strIngredient4}</Text>
                    <Text>{meal?.strMeasure4}</Text>
                </View>

                <View style={styleDetail.cIncredientItem}>
                <Text>{meal?.strIngredient5}</Text>
                    <Text>{meal?.strMeasure5}</Text>
                </View>
            </View>

        </ScrollView>
    )
}