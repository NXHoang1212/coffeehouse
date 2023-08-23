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
const Information = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const goback = useGoBack();
  const focusNameProps = FocusName();
  const focusHoProps = FocusHo();
  const focusEmailProps = FocusEmail();
  const [Firstname, setFirstName] = useState<string>('');
  const [Lastname, setLastName] = useState<string>('');
  const [Email, setEmail] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date())
  const [open, setOpen] = useState<boolean>(false)
  const [genderModalVisible, setGenderModalVisible] = useState<boolean>(false);
  const [selectedGender, setSelectedGender] = useState<string>('');
  const handleGenderSelection = (selectedGender: string) => {
    setSelectedGender(selectedGender); // Cập nhật giới tính được chọn
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
              value={Firstname}
              onChangeText={(name) => setFirstName(name)}
              onFocus={focusNameProps.onFocusName}
              onBlur={focusNameProps.onBlurName}
            />
          </View>
          <View style={[StyleInformation.input, focusHoProps.focusHo && StyleInformation.focusedInput]}>
            <TextInput
              style={StyleInformation.textinput}
              placeholder="Nhập họ của bạn"
              value={Lastname}
              onChangeText={(name) => setLastName(name)}
              onFocus={focusHoProps.onFocusHo}
              onBlur={focusHoProps.onBlurHo}
            />
          </View>
          <View style={[StyleInformation.input, focusEmailProps.focusEmail && StyleInformation.focusedInput]}>
            <TextInput
              style={StyleInformation.textinput}
              placeholder="Email của bạn"
              value={Email}
              onChangeText={(name) => setEmail(name)}
              onFocus={focusEmailProps.onFocusEmail}
              onBlur={focusEmailProps.onBlurEmail}
            />
          </View>
          <View style={StyleInformation.inputdate}>
            <TextInput
              style={StyleInformation.textinput}
              value={FormatDate(date)}
              placeholder="Chọn ngày sinh"
              onTouchStart={() => [Keyboard.dismiss, setOpen(true)]}
            />
            <Image source={infores.DATEPICKER} style={StyleInformation.iconcalendar} />
            <DatePicker modal mode="date" open={open} date={date} locale='vi'
              onConfirm={(date) => { setOpen(false), setDate(date) }}
              onCancel={() => { setOpen(false) }} />
          </View>
          <View>
            <TouchableOpacity onPress={() => setGenderModalVisible(true)} style={StyleInformation.inputdate}>
              <Text style={StyleInformation.textinput}>
                {selectedGender || 'Chọn giới tính'}
              </Text>
              <Image source={Icon.DOWN} style={StyleInformation.icondown} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[StyleInformation.update, (!Firstname && !Lastname && !Email && !selectedGender) && StyleInformation.disabledUpdate]}
            disabled={!Firstname && !Lastname && !Email && !selectedGender}>
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