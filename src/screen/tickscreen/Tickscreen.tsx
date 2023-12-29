import { View, Text,SafeAreaView,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import storage from '../../storage/storage'
import { STORAGE_KEY } from '../../constant/constant'
import { TypeBookMark } from '../../../api/Type'
import ItemCategories from '../home/components/ItemCategories'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

export default function Tickscreen() {
  // const [listData,setListData] = useState<TypeBookMark[]>([])
  // const getDataBookMark = async () => {
  //   return await storage.load({key: STORAGE_KEY.bookmark})
  // }
  // useEffect(() => {
  //   getDataBookMark().then((data) =>{
  //     setListData(data)
  //   })
  // },listData)
  const dispatch = useDispatch();
  const listData = useSelector((state: RootState) => state['listdata/bookmark'].listData)
  console.log("kiem tra1 ",listData)
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView>
      {listData.map((item, index) => <ItemCategories key={index} title={item.id} url={item.image} desc={item.title}/>)}
      </ScrollView>
    </SafeAreaView>
  )
}