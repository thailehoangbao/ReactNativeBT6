import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, FONTS, ICONS, IMAGES, STORAGE_KEY } from '../../../constant/constant'
import { styleDetail } from '../StyleDetail'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { PropsPushTrendingToDetailPage } from '../../../navigation/TypeCheck'
import Toast from 'react-native-toast-message';
import storage from '../../../storage/storage'
import { TypeBookMark } from '../../../../api/Type'
import { useDispatch } from 'react-redux'


type Props = {
    image: string,
    title: string ,
    id: string
}

export default function HeaderFood({ image,title,id }: Props) {
    const navigation = useNavigation<PropsPushTrendingToDetailPage>()

    const onBookMark = async () => {
        const dispatch = useDispatch();
        // storage.save({
        //     key: 'test',
        //     data: 'Hello Storage'
        // })
        // storage.load({
        //     key: 'test',
        // }).then(data => {
        //     console.log(data);
        // })
        // Toast.show({
        //     type: 'success',
        //     text1: 'Hello Storage',
        //     text2: 'Hello Storage 2'
        // })
        const dataBookMark: TypeBookMark = {
            title,
            image,
            id
        }

        try {
            const data: TypeBookMark[] = await storage.load({key: STORAGE_KEY.bookmark})
            const filterData = data.filter(item => item.id == id);
            console.log(data)
            if (filterData.length == 0) {
                const newData = [...data,dataBookMark]
                storage.save({
                    key: STORAGE_KEY.bookmark,
                    data: newData
                })
                dispatch(await storage.load({key: STORAGE_KEY.bookmark}))
            }
        } 
        catch(err) {
            storage.save({
                key: STORAGE_KEY.bookmark,
                data: [dataBookMark]
            })
        }
    }
    return (
        <View style={styleDetail.cDetail}>
            <Image source={{ uri: image }} style={styleDetail.imageStyle} />
            <View style={styleDetail.cContent}>
                <View style={styleDetail.cTop}>
                    <TouchableOpacity onPress={() => { navigation.pop() }}>
                        <Image source={ICONS.left} style={styleDetail.icons} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onBookMark}>
                        <Image source={ICONS.tick} style={styleDetail.icons} />
                    </TouchableOpacity>
                </View>
                <ImageBackground style={styleDetail.cBottomContent} blurRadius={10} source={{ uri: image }}>
                    <View style={styleDetail.cBottomAvatar}>
                        <Image source={IMAGES.avatar} style={styleDetail.avatar} />
                        <View>
                            <Text style={{ color: COLORS.white }}>Recipe By</Text>
                            <Text style={{ color: COLORS.white, fontSize: FONTS.fontSmall, fontWeight: '700' }}>Maria</Text>
                        </View>
                    </View>
                    <Image source={ICONS.right} style={styleDetail.icons} />
                </ImageBackground>
            </View>
        </View>
    )
}