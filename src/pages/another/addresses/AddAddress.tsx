import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import StyleAddAddress from '../../../styles/another/StyleAddAddress';
import { Icon } from '../../../constant/Icon';
import { useGoBack } from '../../../utils/GoBack';
import { useRoute, useNavigation } from '@react-navigation/native';
import { CreateAddress } from '../../../service/api/IndexAddress';
import { useSelector } from 'react-redux';
import { Messenger } from '../../../utils/ShowMessage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../../data/types/TypeStack';
import { RootState } from '../../../redux/store/Store';
import FastImage from 'react-native-fast-image';

interface RouteParams {
  name: string;
}

const AddAddress: React.FC = () => {
  const goback = useGoBack();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const route = useRoute();
  const { name } = route.params as RouteParams;
  const InforAddress = useSelector((state: RootState) => state.address);
  const [nameAddress, setNameAdddress] = useState<string>(name);
  const user = useSelector((state: RootState) => state.root.user);
  const id = user._id;
  const DescribeAddRess = InforAddress.DescribeAddRess;
  const [Other, SetOther] = useState<string>('');
  const [Gate, SetGate] = useState<string>('');
  const [NoteOther, SetNoteOther] = useState<string>('');
  const [userName, setuserName] = useState<string>(user.name);
  const [Phone, setPhone] = useState<string>(user.mobile);

  const handeleCreateAddress = async () => {
    try {
      const res = await CreateAddress({
        name: nameAddress,
        DescribeAddRess: DescribeAddRess,
        Other: Other,
        Gate: Gate,
        NoteOrther: NoteOther,
        username: userName,
        phone: Phone,
        userId: id,
      });
      if (res) {
        // Messenger('Thêm địa chỉ thành công', 'success');
        Messenger.success('Thêm địa chỉ thành công');
        goback();
      }
    } catch (error: any) {
      console.log('🚀 ~ file: AddAddress.tsx:52 ~ handeleCreateAddress ~ error:', error,);
    }
  };

  return (
    <View style={StyleAddAddress.container}>
      <View style={StyleAddAddress.viewheader}>
        <TouchableOpacity onPress={goback}>
          <FastImage source={Icon.BACK} style={StyleAddAddress.iconBack} />
        </TouchableOpacity>
        <Text style={StyleAddAddress.textHeader}>Thêm địa chỉ mới</Text>
      </View>
      <View style={StyleAddAddress.body}>
        <View style={StyleAddAddress.viewbody1}>
          <View style={StyleAddAddress.viewhome}>
            <Text style={StyleAddAddress.textTitle}>Tên địa chỉ</Text>
            {name ? (
              <View style={StyleAddAddress.viewtexthome}>
                <Text style={StyleAddAddress.texthome}>{name}</Text>
              </View>
            ) : (
              <View style={StyleAddAddress.viewinput}>
                <TextInput
                  style={StyleAddAddress.textinput}
                  placeholder="Nhà / Cơ quan / Gym /..."
                  value={nameAddress}
                  onChangeText={text => setNameAdddress(text)}
                />
              </View>
            )}
          </View>
          <View style={StyleAddAddress.viewhome}>
            <Text style={StyleAddAddress.textTitle}>Địa chỉ</Text>
            <TouchableOpacity
              style={StyleAddAddress.viewtextinput}
              onPress={() => navigation.navigate('MapsAddress' as any)}>
              {DescribeAddRess ? (
                <Text style={StyleAddAddress.textinput}>{DescribeAddRess}</Text>
              ) : (
                <Text style={StyleAddAddress.textinput}>Chọn địa chỉ</Text>
              )}
              <Image source={Icon.RIGHT} style={StyleAddAddress.iconArrow} />
            </TouchableOpacity>
          </View>
          <View style={StyleAddAddress.viewhome}>
            <Text style={StyleAddAddress.textTitle}>Tòa nhà, số tầng</Text>
            <View style={StyleAddAddress.viewinput}>
              <TextInput
                style={StyleAddAddress.textinput}
                placeholder="Tòa nhà, số tầng"
                value={Other}
                onChangeText={text => SetOther(text)}
              />
            </View>
          </View>
          <View style={StyleAddAddress.viewhome}>
            <Text style={StyleAddAddress.textTitle}>Cổng</Text>
            <View style={StyleAddAddress.viewinput}>
              <TextInput
                style={StyleAddAddress.textinput}
                placeholder="Cổng"
                value={Gate}
                onChangeText={text => SetGate(text)}
              />
            </View>
          </View>
          <View style={StyleAddAddress.viewhome}>
            <Text style={StyleAddAddress.textTitle}>Ghi chú khác</Text>
            <View style={StyleAddAddress.viewinput}>
              <TextInput
                style={StyleAddAddress.textinput}
                placeholder="Hướng dẫn giao hàng"
                value={NoteOther}
                onChangeText={text => SetNoteOther(text)}
              />
            </View>
          </View>
        </View>
        <View style={StyleAddAddress.viewbody2}>
          <View style={StyleAddAddress.viewhome}>
            <Text style={StyleAddAddress.textTitle}>Tên người nhận</Text>
            <View style={StyleAddAddress.viewinput}>
              <TextInput
                style={StyleAddAddress.textinput}
                placeholder="Tên người nhận"
                value={userName}
                onChangeText={text => setuserName(text)}
              />
            </View>
          </View>
          <View style={StyleAddAddress.viewhome}>
            <Text style={StyleAddAddress.textTitle}>Số điện thoại</Text>
            <View style={StyleAddAddress.viewinput}>
              <TextInput
                style={StyleAddAddress.textinput}
                placeholder="Số điện thoại"
                value={Phone}
                onChangeText={text => setPhone(text)}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handeleCreateAddress}>
        <View style={StyleAddAddress.viewbutton}>
          <Text style={StyleAddAddress.textbutton}>Xong</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddAddress;
