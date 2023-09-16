import { View, Text, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native';
import React, { useState } from 'react'
import { ThemLightStatusBar } from '../../../constant/ThemLight';
import { Icon } from '../../../constant/Icon';
import { useGoBack } from '../../../utils/GoBack';
import StyleEditAddress from '../../../styles/code/addresses/StyleEditAddress';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AddRess } from '../../../data/types/AddRess.entity';
import { MonitorAddressInput } from '../../../utils/MonitorInput';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../../data/types/TypeStack';
import { UpdateAddress, DeleteAddress } from '../../../service/api/IndexAddress';
import { Messenger } from '../../../utils/ShowMessage';
import Modal from "react-native-modal";

type PropsEditAddress = {
  item: AddRess;
}

const EditAddress: React.FC = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const goback = useGoBack();
  const route = useRoute();
  const { item } = route.params as PropsEditAddress;
  console.log("🚀 ~ file: EditAddress.tsx:25 ~ item:", item)
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const id = item._id;
  const [name, setName] = useState<string>(item.name);
  const [address, setAddress] = useState<string>(item.DescribeAddRess);
  const [other, setOther] = useState<string>(item.Other);
  const [gate, setGate] = useState<string>(item.Gate);
  const [note, setNote] = useState<string>(item.NoteOrther);
  const [username, setUsername] = useState<string>(item.username);
  const [phone, setPhone] = useState<string>(item.phone);
  const [isAnyFieldEmpty, setIsAnyFieldEmpty] = useState<boolean>(true);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

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

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  const handleDeleteAddress = async () => {
    const res = await DeleteAddress(id)
    if (res) {
      Messenger('Xóa địa chỉ thành công', 'success')
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
        <TouchableOpacity onPress={toggleModal}>
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
        onPress={handleUpdateAddress} >
        <Text style={StyleEditAddress.textbutton}>Xong</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible} backdropOpacity={0.2} onBackdropPress={toggleModal}>
        <StatusBar backgroundColor="rgba(0,0,0,0.2)" />
        <View style={StyleEditAddress.modalcontainer}>
          <Text style={StyleEditAddress.textmodalname}>Xác nhận</Text>
          <Text style={StyleEditAddress.textmodalconfimr}>Bạn có chắc chắn muốn xóa địa chỉ này đã lưu rồi không</Text>
          <View style={StyleEditAddress.viewmodalbutton}>
            <TouchableOpacity style={StyleEditAddress.viewmodalcancel} onPress={toggleModal}>
              <Text style={StyleEditAddress.textmodalcancel}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleEditAddress.viewmodaldelete} onPress={handleDeleteAddress}>
              <Text style={StyleEditAddress.textmodaldelete}>Xóa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default EditAddress