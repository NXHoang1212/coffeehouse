import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import StyleAddAddress from '../../../styles/code/addresses/StyleAddAddress'
import { Icon } from '../../../constant/Icon';
import { useGoBack } from '../../../utils/GoBack';

const AddAddress = () => {
  const goback = useGoBack();
  return (
    <View style={StyleAddAddress.container}>
      <View style={StyleAddAddress.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleAddAddress.iconBack} />
        </TouchableOpacity>
        <Text style={StyleAddAddress.textHeader}>Thêm địa chỉ mới</Text>
      </View>
    </View>
  )
}

export default AddAddress