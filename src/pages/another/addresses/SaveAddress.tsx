import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import { Icon, TabCoffee } from '../../../constant/Icon'
import { useGoBack } from '../../../utils/GoBack'
import StyleSaveAddress from '../../../styles/code/addresses/StyleAddress'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../../data/types/TypeStack';
import { useNavigation } from '@react-navigation/native';
import { useGetAddressIdQuery } from '../../../service/api/IndexAddress';
import { useSelector } from 'react-redux';
import { FlashList } from '@huunguyen312/flash-list';
import ItemAddress from '../../../components/item/ItemAddress';
import { useIsFocused } from '@react-navigation/native';

const Address: React.FC = () => {
  const goback = useGoBack();
  const isFocused = useIsFocused();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const id = useSelector((state: any) => state.user._id)
  console.log("🚀 ~ file: SaveAddress.tsx:18 ~ Address ~ id:", id)
  //refetch là hàm để gọi lại api
  const { data, refetch } = useGetAddressIdQuery(id)
  const Addressess = data?.data;
  console.log("🚀 ~ file: SaveAddress.tsx:21 ~ Address ~ Address:", Addressess)

  const handeleGeneral = (name: string) => {
    //@ts-ignore
    navigation.navigate('AddAddress', { name });
  }

  useEffect(() => {
    refetch()
  }, [isFocused])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={StyleSaveAddress.container}>
        <View style={StyleSaveAddress.viewheader}>
          <TouchableOpacity onPress={goback}>
            <Image source={Icon.BACK} style={StyleSaveAddress.iconBack} />
          </TouchableOpacity>
          <Text style={StyleSaveAddress.textHeader}>Địa chỉ đã lưu</Text>
        </View>
        <View style={StyleSaveAddress.viewbody}>
          <TouchableOpacity style={StyleSaveAddress.viewAddress} onPress={() => handeleGeneral('Nhà')}>
            <Image source={TabCoffee.HOME} style={StyleSaveAddress.iconAddress} />
            <Text style={StyleSaveAddress.textAddress}>Thêm địa chỉ nhà</Text>
          </TouchableOpacity>
          <View style={StyleSaveAddress.line} />
          <TouchableOpacity style={StyleSaveAddress.viewAddress} onPress={() => handeleGeneral('Công ty')}>
            <Image source={Icon.ADDRESS} style={StyleSaveAddress.iconAddress} />
            <Text style={StyleSaveAddress.textAddress}>Thêm địa chỉ công ty</Text>
          </TouchableOpacity>
          <View style={StyleSaveAddress.line} />
          <TouchableOpacity style={StyleSaveAddress.viewAddress} onPress={() => handeleGeneral('')}>
            <Image source={Icon.PLUS} style={StyleSaveAddress.iconplus} />
            <Text style={StyleSaveAddress.textAddress}>Thêm địa chỉ mới</Text>
          </TouchableOpacity>
          <View style={StyleSaveAddress.line} />
          <View style={StyleSaveAddress.viewitem}>
            <FlashList
              data={Addressess}
              renderItem={({ item }) => <ItemAddress item={item} />}
              keyExtractor={(item: any) => item._id}
              estimatedItemSize={200}
            />
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  )
}

export default Address