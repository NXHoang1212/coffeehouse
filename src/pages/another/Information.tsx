import { View, Text, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView, Keyboard } from 'react-native';
import React, { useState } from 'react'
import { ThemLightStatusBar } from '../../constant/ThemLight'
import StyleInformation from '../../styles/code/StyleInformation'
import { Icon, infores } from '../../constant/Icon';
import { useGoBack } from '../../utils/GoBack';
import DatePicker from 'react-native-date-picker'
import ModalOptionGender from '../../components/modal/OptionGender';
import { FormatDate } from '../../utils/FormatDate';
import { FocusEmail, FocusHo, FocusName } from '../../hooks/Focus';
import { useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

const Information = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const goback = useGoBack();
  const focusNameProps = FocusName();
  const focusHoProps = FocusHo();
  const focusEmailProps = FocusEmail();
  const user = useSelector((state: any) => state.user)
  const id = user._id
  console.log("🚀 ~ file: CreateInformation.tsx:31 ~ CreateInformation ~ _id:", id)
  const [name, setName] = useState<string>(user.name)
  const [holder, setHolder] = useState<string>(user.holder)
  const [email, setEmail] = useState<string>(user.email)
  const [gender, setGender] = useState<string>(user.gender)
  const [birthday, setBirthday] = useState<string>(user.birthday)
  const [open, setOpen] = useState<boolean>(false)
  const [genderModalVisible, setGenderModalVisible] = useState<boolean>(false);
  const handleGenderSelection = (selectedGender: string) => {
    setGender(selectedGender);
    setGenderModalVisible(false); // Đóng Modal sau khi chọn
  };
  return (
    <View style={StyleInformation.container}>
      <View style={StyleInformation.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleInformation.iconBack} />
        </TouchableOpacity>
        <Text style={StyleInformation.textHeader}>Cập nhật thông tin</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={StyleInformation.viewimg}>
            <Image source={Icon.AVATAR} style={StyleInformation.iconavatar} />
            <Image source={infores.CAMERA} style={StyleInformation.iconcamera} />
          </View>
        </TouchableOpacity>
        <View style={StyleInformation.viewinput}>
          <View style={[StyleInformation.input, focusNameProps.focusName && StyleInformation.focusedInput]}>
            <TextInput
              style={StyleInformation.textinput}
              placeholder="Nhập tên của bạn *"
              value={name}
              onChangeText={(name) => setName(name)}
              onFocus={focusNameProps.onFocusName}
              onBlur={focusNameProps.onBlurName}
            />
          </View>
          <View style={[StyleInformation.input, focusHoProps.focusHo && StyleInformation.focusedInput]}>
            <TextInput
              style={StyleInformation.textinput}
              placeholder="Nhập họ của bạn"
              value={holder}
              onChangeText={(name) => setHolder(name)}
              onFocus={focusHoProps.onFocusHo}
              onBlur={focusHoProps.onBlurHo}
            />
          </View>
          <View style={[StyleInformation.input, focusEmailProps.focusEmail && StyleInformation.focusedInput]}>
            <TextInput
              style={StyleInformation.textinput}
              placeholder="Email của bạn"
              value={email}
              onChangeText={(name) => setEmail(name)}
              onFocus={focusEmailProps.onFocusEmail}
              onBlur={focusEmailProps.onBlurEmail}
            />
          </View>
          <View style={StyleInformation.inputdate}>
            <TextInput
              style={StyleInformation.textinput}
              value={birthday ? FormatDate(new Date(birthday)) : ''}
              placeholder="Chọn ngày sinh"
              onTouchStart={() => [Keyboard.dismiss, setOpen(true)]}
            />
            <Image source={infores.DATEPICKER} style={StyleInformation.iconcalendar} />
            <DatePicker
              modal
              mode="date"
              open={open} date={birthday ? new Date(birthday) : new Date()}
              locale='vi'
              onConfirm={(date) => { setOpen(false), setBirthday(date.toISOString()) }}
              onCancel={() => { setOpen(false) }} />
          </View>
          <View>
            <TouchableOpacity onPress={() => setGenderModalVisible(true)} style={StyleInformation.inputdate}>
              <Text style={StyleInformation.textinput}>
                {gender || 'Chọn giới tính'}
              </Text>
              <Image source={Icon.DOWN} style={StyleInformation.icondown} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[StyleInformation.update, (!name && !holder && !email && !gender) && StyleInformation.disabledUpdate]}
            disabled={!name && !holder && !email && !gender}>
            <Text style={StyleInformation.textupdate}>Cập nhật tài khoản</Text>
          </TouchableOpacity>
          <TouchableOpacity style={StyleInformation.viewdelete}>
            <Image source={Icon.DELETE} style={StyleInformation.icondelete} />
            <Text style={StyleInformation.textdelete}>Xóa tài khoản</Text>
          </TouchableOpacity>
          <ModalOptionGender
            visible={genderModalVisible}
            onClose={() => setGenderModalVisible(false)}
            onSelectGender={handleGenderSelection}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Information