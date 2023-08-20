import { View, Text, Image } from 'react-native';
import React from 'react'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import { Icon, TabCoffee } from '../../../constant/Icon'
import { useGoBack } from '../../../utils/GoBack'
import StyleSaveAddress from '../../../styles/code/addresses/StyleAddress'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../../data/types/navigation/TypeStack';
import { useNavigation } from '@react-navigation/native';

const Address = () => {
  const goback = useGoBack();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const handeleGeneral = () => {
    //@ts-ignore
    navigation.navigate('AddAddress')
  }

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
          <TouchableOpacity style={StyleSaveAddress.viewAddress} onPress={handeleGeneral}>
            <Image source={TabCoffee.HOME} style={StyleSaveAddress.iconAddress} />
            <Text style={StyleSaveAddress.textAddress}>Thêm địa chỉ nhà</Text>
          </TouchableOpacity>
          <View style={StyleSaveAddress.line} />
          <TouchableOpacity style={StyleSaveAddress.viewAddress} onPress={handeleGeneral}>
            <Image source={Icon.ADDRESS} style={StyleSaveAddress.iconAddress} />
            <Text style={StyleSaveAddress.textAddress}>Thêm địa chỉ công ty</Text>
          </TouchableOpacity>
          <View style={StyleSaveAddress.line} />
          <TouchableOpacity style={StyleSaveAddress.viewAddress} onPress={handeleGeneral}>
            <Image source={Icon.PLUS} style={StyleSaveAddress.iconplus} />
            <Text style={StyleSaveAddress.textAddress}>Thêm địa chỉ mới</Text>
          </TouchableOpacity>
          <View style={StyleSaveAddress.line} />
        </View>
      </View>
    </GestureHandlerRootView>
  )
}

export default Address