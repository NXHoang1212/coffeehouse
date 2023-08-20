import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { Icon } from '../../../constant/Icon';
import { useGoBack } from '../../../utils/GoBack';
import StyleEditAddress from '../../../styles/code/addresses/StyleEditAddress';

const EditAddress = () => {
  const goback = useGoBack();
  return (
    <View style={StyleEditAddress.container}>
      <View style={StyleEditAddress.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleEditAddress.iconBack} />
        </TouchableOpacity>
        <Text style={StyleEditAddress.textHeader}>Sửa địa chỉ đã lưu</Text>
      </View>
    </View>
  )
}

export default EditAddress