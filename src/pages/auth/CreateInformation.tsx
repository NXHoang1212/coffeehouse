import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Keyboard, } from 'react-native';
import React, { useState } from 'react';
import { ThemLightStatusBar } from '../../constant/ThemLight';
import { Icon, infores } from '../../constant/Icon';
import { useGoBack } from '../../utils/GoBack';
import DatePicker from 'react-native-date-picker';
import { FormatDate } from '../../utils/FormatDate';
import { FocusEmail, FocusHo, FocusName } from '../../hooks/Focus';
import StyleCreateInformation from '../../styles/auth/StyleCreateInformation';
import { Picker } from '@react-native-picker/picker';
import CheckBox from '../../components/custom/CheckBox';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store/Store';
import { ApiUpdateUser } from '../../service/api/IndexUser';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { setInfor } from '../../redux/slices/AuthSlice';
import { RootState } from '../../redux/store/Store';
import FastImage from 'react-native-fast-image';
import { GeneralNotification } from '../../utils/GeneralNotification';

const CreateInformation = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const goback = useGoBack();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const dispatch = useDispatch<AppDispatch>();
  const [checked, setChecked] = useState<boolean>(false);
  const focusNameProps = FocusName();
  const focusHoProps = FocusHo();
  const focusEmailProps = FocusEmail();
  const [open, setOpen] = useState<boolean>(false);
  let user = useSelector((state: RootState) => state.root.user);
  const id = user._id;


  const handle = async () => {
    try {
      const data: any = {
        name: user.name,
        email: user.email,
        holder: user.holder,
        gender: user.gender,
        birthday: user.birthday,
      };
      const response = await ApiUpdateUser(id, data);
      if (response) {
        const user = response;
        dispatch(setInfor(user));
        GeneralNotification();
        navigation.navigate('TabHomeNavigate' as any, { screen: 'Trang chủ' });
      }
    } catch (error: any) {
      console.log("🚀 ~ file: CreateInformation.tsx:54 ~ handle ~ error:", error)
    }
  };

  return (
    <View style={StyleCreateInformation.container}>
      <View style={StyleCreateInformation.viewheader}>
        <TouchableOpacity onPress={goback}>
          <FastImage source={Icon.BACK} style={StyleCreateInformation.iconBack} />
        </TouchableOpacity>
        <Text style={StyleCreateInformation.textHeader}>Tạo tài khoản</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={StyleCreateInformation.viewinput}>
          <View
            style={[
              StyleCreateInformation.input,
              focusNameProps.focusName && StyleCreateInformation.focusedInput,
            ]}>
            <TextInput
              style={StyleCreateInformation.textinput}
              placeholder="Nhập tên của bạn *"
              value={user.name}
              onChangeText={text => dispatch(setInfor({ ...user, name: text }))}
              onFocus={focusNameProps.onFocusName}
              onBlur={focusNameProps.onBlurName}
            />
          </View>
          <View
            style={[
              StyleCreateInformation.input,
              focusHoProps.focusHo && StyleCreateInformation.focusedInput,
            ]}>
            <TextInput
              style={StyleCreateInformation.textinput}
              placeholder="Nhập họ của bạn"
              value={user.holder}
              onChangeText={text => dispatch(setInfor({ ...user, holder: text }))}
              onFocus={focusHoProps.onFocusHo}
              onBlur={focusHoProps.onBlurHo}
            />
          </View>
          <View
            style={[
              StyleCreateInformation.input,
              focusEmailProps.focusEmail && StyleCreateInformation.focusedInput,
            ]}>
            <TextInput
              style={StyleCreateInformation.textinput}
              placeholder="Email của bạn"
              value={user.email}
              onChangeText={text => dispatch(setInfor({ ...user, email: text }))}
              onFocus={focusEmailProps.onFocusEmail}
              onBlur={focusEmailProps.onBlurEmail}
            />
          </View>
          <View style={StyleCreateInformation.inputdate}>
            <TextInput
              style={StyleCreateInformation.textinput}
              // value={birthday ? FormatDate(new Date(birthday)) : ''}
              value={user.birthday ? FormatDate(new Date(user.birthday)) : ''}
              placeholder="Chọn ngày sinh"
              onTouchStart={() => [Keyboard.dismiss(), setOpen(true)]}
            />
            <Image
              source={infores.DATEPICKER}
              style={StyleCreateInformation.iconcalendar}
            />
            <DatePicker
              modal
              mode="date"
              open={open}
              // date={birthday ? new Date(birthday) : new Date()}
              date={user.birthday ? new Date(user.birthday) : new Date()}
              locale="vi"
              onConfirm={date => {
                setOpen(false), dispatch(setInfor({ ...user, birthday: date.toISOString() }));
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
          <View>
            <View style={StyleCreateInformation.dropdown}>
              <Picker
                style={StyleCreateInformation.viewdropdown}
                // selectedValue={gender}
                selectedValue={user.gender}
                // onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                onValueChange={(itemValue, itemIndex) => dispatch(setInfor({ ...user, gender: itemValue }))}
              >
                <Picker.Item
                  label="Chưa chọn giới tính"
                  value="Chưa chọn giới tính"
                  style={StyleCreateInformation.texdropdown}
                />
                <Picker.Item
                  label="Nam"
                  value="Nam"
                  style={StyleCreateInformation.texdropdown}
                />
                <Picker.Item
                  label="Nữ"
                  value="Nữ"
                  style={StyleCreateInformation.texdropdown}
                />
              </Picker>
            </View>
          </View>
          <TouchableOpacity
            style={[
              StyleCreateInformation.update,
              !checked && StyleCreateInformation.disabledUpdate,
            ]}
            disabled={!checked}
            onPress={handle}>
            <Text style={StyleCreateInformation.textupdate}>Tạo tài khoản</Text>
          </TouchableOpacity>
        </View>
        <View style={StyleCreateInformation.viewcheckbox}>
          <CheckBox
            title="Tôi đồng ý với các Điều khoản và điều kiện của The Coffee House"
            checked={checked}
            onPress={() => setChecked(!checked)}
          />
          <Text style={StyleCreateInformation.textcheckbox}>
            Tôi đồng ý với các Điều khoản và điều kiện của The Coffee House
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateInformation;
