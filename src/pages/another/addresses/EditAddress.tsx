import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react'
import { Icon } from '../../../constant/Icon';
import { useGoBack } from '../../../utils/GoBack';
import StyleEditAddress from '../../../styles/code/addresses/StyleEditAddress';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AddRess } from '../../../data/types/AddRess.entity';
import { MonitorAddressInput } from '../../../utils/MonitorInput';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../../data/types/TypeStack';
import { UpdateAddress } from '../../../service/api/IndexAddress';
import { Messenger } from '../../../utils/ShowMessage';

type PropsEditAddress = {
  item: AddRess;
}

const EditAddress: React.FC = () => {
  const goback = useGoBack();
  const { item } = useRoute().params as PropsEditAddress;
  const id = item._id
  console.log("🚀 ~ file: EditAddress.tsx:22 ~ id:", id)
  console.log("🚀 ~ file: EditAddress.tsx:16 ~ item:", item)
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const [name, setName] = useState<string>(item.name);
  const [address, setAddress] = useState<string>(item.DescribeAddRess);
  const [other, setOther] = useState<string>(item.Other);
  const [gate, setGate] = useState<string>(item.Gate);
  const [note, setNote] = useState<string>(item.NoteOrther);
  const [username, setUsername] = useState<string>(item.username);
  const [phone, setPhone] = useState<string>(item.phone);
  const [isAnyFieldEmpty, setIsAnyFieldEmpty] = useState<boolean>(true);

  const monitorAddressInput = (fieldName: string, newValue: string) => {
    MonitorAddressInput(
      fieldName,
      newValue,
      setName,
      setAddress,
      setOther,
      setGate,
      setNote,
      setUsername,
      setPhone,
      setIsAnyFieldEmpty,
    );
  };

  const handleNavigateMap = () => {
    //@ts-ignore
    navigation.navigate('MapsAddress')
  }

  const handleUpdateAddress = async () => {
    const data: any = {
      name: name,
      DescribeAddRess: address,
      Other: other,
      Gate: gate,
      NoteOrther: note,
      username: username,
      phone: phone,
    }
    console.log("🚀 ~ file: EditAddress.tsx:69 ~ handleUpdateAddress ~ data", data)
    const res = await UpdateAddress(id, data)
    if (res) {
      Messenger('Cập nhật địa chỉ thành công', 'success')
      //@ts-ignore
      navigation.navigate('SaveAddress')
    }
  }



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
              <Text style={StyleEditAddress.texthome}>{name}</Text>
            </View>
          </View>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Địa chỉ</Text>
            <TouchableOpacity style={StyleEditAddress.viewtextinput} onPress={handleNavigateMap}>
              <Text style={StyleEditAddress.textinput}>{address}</Text>
              <Image source={Icon.RIGHT} style={StyleEditAddress.iconArrow} />
            </TouchableOpacity>
          </View>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Tòa nhà, số tầng</Text>
            <View style={StyleEditAddress.viewinput}>
              <TextInput style={StyleEditAddress.textvalue} placeholder="Tòa nhà, số tầng" value={other} onChangeText={(value) => monitorAddressInput('other', value)} />
            </View>
          </View>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Cổng</Text>
            <View style={StyleEditAddress.viewinput}>
              <TextInput style={StyleEditAddress.textvalue} placeholder="Cổng" value={gate} onChangeText={(value) => monitorAddressInput('gate', value)} />
            </View>
          </View>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Ghi chú khác</Text>
            <View style={StyleEditAddress.viewinput}>
              <TextInput style={StyleEditAddress.textvalue} placeholder="Hướng dẫn giao hàng" value={note} onChangeText={(value) => monitorAddressInput('note', value)} />
            </View>
          </View>
        </View>
        <View style={StyleEditAddress.viewbody2}>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Tên người nhận</Text>
            <View style={StyleEditAddress.viewinput}>
              <TextInput style={StyleEditAddress.textvalue} placeholder="Tên người nhận" value={username} onChangeText={(value) => monitorAddressInput('username', value)} />
            </View>
          </View>
          <View style={StyleEditAddress.viewhome}>
            <Text style={StyleEditAddress.textTitle}>Số điện thoại</Text>
            <View style={StyleEditAddress.viewinput}>
              <TextInput style={StyleEditAddress.textvalue} placeholder="Số điện thoại" value={phone} onChangeText={(value) => monitorAddressInput('phone', value)} />
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
      <TouchableOpacity
        style={[StyleEditAddress.disabledUpdate, isAnyFieldEmpty && StyleEditAddress.viewbutton]}
        disabled={isAnyFieldEmpty}
        onPress={handleUpdateAddress}
      >
        <Text style={StyleEditAddress.textbutton}>Xong</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EditAddress