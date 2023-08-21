import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react'
import StyleAddAddress from '../../../styles/code/addresses/StyleAddAddress'
import { Icon } from '../../../constant/Icon';
import { useGoBack } from '../../../utils/GoBack';
import { useRoute } from '@react-navigation/native';

interface RouteParams {
  name: string;
}

const AddAddress = () => {
  const goback = useGoBack();
  const { name } = useRoute().params as RouteParams;
  console.log(name)
  return (
    <View style={StyleAddAddress.container}>
      <View style={StyleAddAddress.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleAddAddress.iconBack} />
        </TouchableOpacity>
        <Text style={StyleAddAddress.textHeader}>Thêm địa chỉ mới</Text>
      </View>
      <View style={StyleAddAddress.body}>
        <View style={StyleAddAddress.viewbody1}>
          <View style={StyleAddAddress.viewhome}>
            <Text style={StyleAddAddress.textTitle}>Tên địa chỉ</Text>
            {/* //làm một cái nếu có name thì hiện đoạn view còn nếu không có thì ẩn đi hiện textinput */}
            {name ?
              <View style={StyleAddAddress.viewtexthome}>
                <Text style={StyleAddAddress.texthome}>{name}</Text>
              </View>
              :
              <View style={StyleAddAddress.viewinput}>
                <TextInput style={StyleAddAddress.textinput} placeholder="Nhà / Cơ quan / Gym /..." />
              </View>
            }
          </View>
          <View style={StyleAddAddress.viewhome}>
            <Text style={StyleAddAddress.textTitle}>Địa chỉ</Text>
            <TouchableOpacity style={StyleAddAddress.viewtextinput}>
              <Text style={StyleAddAddress.textinput}>Chọn địa chỉ</Text>
              <Image source={Icon.RIGHT} style={StyleAddAddress.iconArrow} />
            </TouchableOpacity>
          </View>
          <View style={StyleAddAddress.viewhome}>
            <Text style={StyleAddAddress.textTitle}>Tòa nhà, số tầng</Text>
            <View style={StyleAddAddress.viewinput}>
              <TextInput style={StyleAddAddress.textinput} placeholder="Tòa nhà, số tầng" />
            </View>
          </View>
          <View style={StyleAddAddress.viewhome}>
            <Text style={StyleAddAddress.textTitle}>Cổng</Text>
            <View style={StyleAddAddress.viewinput}>
              <TextInput style={StyleAddAddress.textinput} placeholder="Cổng" />
            </View>
          </View>
          <View style={StyleAddAddress.viewhome}>
            <Text style={StyleAddAddress.textTitle}>Ghi chú khác</Text>
            <View style={StyleAddAddress.viewinput}>
              <TextInput style={StyleAddAddress.textinput} placeholder="Hướng dẫn giao hàng" />
            </View>
          </View>
        </View>
        <View style={StyleAddAddress.viewbody2}>
          <View style={StyleAddAddress.viewhome}>
            <Text style={StyleAddAddress.textTitle}>Tòa nhà, số tầng</Text>
            <View style={StyleAddAddress.viewinput}>
              <TextInput style={StyleAddAddress.textinput} placeholder="Tên người nhận" />
            </View>
          </View>
          <View style={StyleAddAddress.viewhome}>
            <Text style={StyleAddAddress.textTitle}>Số điện thoại</Text>
            <View style={StyleAddAddress.viewinput}>
              <TextInput style={StyleAddAddress.textinput} placeholder="Số điện thoại" />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <View style={StyleAddAddress.viewbutton}>
          <Text style={StyleAddAddress.textbutton}>Xong</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AddAddress