import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react'
import { Icon } from '../../../constant/Icon';
import { useGoBack } from '../../../utils/GoBack';
import StyleEditAddress from '../../../styles/code/addresses/StyleEditAddress';
import { useRoute } from '@react-navigation/native';
import { AddRess } from '../../../data/types/AddRess.entity';

type PropsEditAddress = {
  item: AddRess;
}

const EditAddress: React.FC = () => {
  const goback = useGoBack();
  const { item } = useRoute().params as PropsEditAddress;
  console.log("🚀 ~ file: EditAddress.tsx:16 ~ item:", item)

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
              <Text style={StyleEditAddress.texthome}>{item.name}</Text>
            </View>
          </View>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Địa chỉ</Text>
            <TouchableOpacity style={StyleEditAddress.viewtextinput}>
              <Text style={StyleEditAddress.textinput}>{item.DescribeAddRess}</Text>
              <Image source={Icon.RIGHT} style={StyleEditAddress.iconArrow} />
            </TouchableOpacity>
          </View>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Tòa nhà, số tầng</Text>
            {item.Other ?
              <View style={StyleEditAddress.viewinput}>
                <TextInput style={StyleEditAddress.textvalue} placeholder="Tòa nhà, số tầng" value={item.Other} />
              </View>
              :
              <View style={StyleEditAddress.viewinput}>
                <TextInput style={StyleEditAddress.textinput} placeholder="Tòa nhà, số tầng" />
              </View>
            }
          </View>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Cổng</Text>
            {item.Gate ?
              <View style={StyleEditAddress.viewinput}>
                <TextInput style={StyleEditAddress.textvalue} placeholder="Cổng" value={item.Gate} />
              </View>
              :
              <View style={StyleEditAddress.viewinput}>
                <TextInput style={StyleEditAddress.textinput} placeholder="Cổng" />
              </View>
            }
          </View>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Ghi chú khác</Text>
            {item.NoteOther ?
              <View style={StyleEditAddress.viewinput}>
                <TextInput style={StyleEditAddress.textvalue} placeholder="Hướng dẫn giao hàng" value={item.NoteOther} />
              </View>
              :
              <View style={StyleEditAddress.viewinput}>
                <TextInput style={StyleEditAddress.textinput} placeholder="Hướng dẫn giao hàng" />
              </View>
            }
          </View>
        </View>
        <View style={StyleEditAddress.viewbody2}>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Tên người nhận</Text>
            {item.userId.name ?
              <View style={StyleEditAddress.viewinput}>
                <TextInput style={StyleEditAddress.textvalue} placeholder="Tên người nhận" value={item.userId.name} />
              </View>
              :
              <View style={StyleEditAddress.viewinput}>
                <TextInput style={StyleEditAddress.textinput} placeholder="Tên người nhận" />
              </View>
            }
          </View>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Số điện thoại</Text>
            {
              item.userId.mobile ?
                <View style={StyleEditAddress.viewinput}>
                  <TextInput style={StyleEditAddress.textvalue} placeholder="Số điện thoại" value={item.userId.mobile} />
                </View>
                :
                <View style={StyleEditAddress.viewinput}>
                  <TextInput style={StyleEditAddress.textinput} placeholder="Số điện thoại" />
                </View>
            }
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