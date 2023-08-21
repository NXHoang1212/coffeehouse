import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
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
      <View style={StyleEditAddress.body}>
        <View style={StyleEditAddress.viewbody1}>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Tên địa chỉ</Text>
            <View style={StyleEditAddress.viewtexthome}>
              <Text style={StyleEditAddress.texthome}>Nhà</Text>
            </View>
          </View>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Địa chỉ</Text>
            <TouchableOpacity style={StyleEditAddress.viewtextinput}>
              <Text style={StyleEditAddress.textinput}>Chọn địa chỉ</Text>
              <Image source={Icon.RIGHT} style={StyleEditAddress.iconArrow} />
            </TouchableOpacity>
          </View>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Tòa nhà, số tầng</Text>
            <View style={StyleEditAddress.viewinput}>
              <TextInput style={StyleEditAddress.textinput} placeholder="Tòa nhà, số tầng" />
            </View>
          </View>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Cổng</Text>
            <View style={StyleEditAddress.viewinput}>
              <TextInput style={StyleEditAddress.textinput} placeholder="Cổng" />
            </View>
          </View>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Ghi chú khác</Text>
            <View style={StyleEditAddress.viewinput}>
              <TextInput style={StyleEditAddress.textinput} placeholder="Hướng dẫn giao hàng" />
            </View>
          </View>
        </View>
        <View style={StyleEditAddress.viewbody2}>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Tòa nhà, số tầng</Text>
            <View style={StyleEditAddress.viewinput}>
              <TextInput style={StyleEditAddress.textinput} placeholder="Tên người nhận" />
            </View>
          </View>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Số điện thoại</Text>
            <View style={StyleEditAddress.viewinput}>
              <TextInput style={StyleEditAddress.textinput} placeholder="Số điện thoại" />
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <View style={StyleEditAddress.viewbody3}>
            <View style={StyleEditAddress.viewdelete}>
              <Image source={Icon.DELETE} style={StyleEditAddress.icondelete} />
              <Text style={StyleEditAddress.textdelete}>Xóa địa chỉ này</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={StyleEditAddress.viewbutton}>
          <Text style={StyleEditAddress.textbutton}>Xong</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default EditAddress