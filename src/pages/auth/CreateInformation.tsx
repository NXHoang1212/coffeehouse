import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Keyboard } from 'react-native';
import React, { useState } from 'react'
import { ThemLightStatusBar } from '../../constant/ThemLight'
import { Icon, infores } from '../../constant/Icon';
import { useGoBack } from '../../utils/GoBack';
import DatePicker from 'react-native-date-picker'
import { formatDate } from '../../utils/FormatDate';
import { FocusEmail, FocusHo, FocusName } from '../../hooks/Focus';
import StyleCreateInformation from '../../styles/auth/StyleCreateInformation';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements'

const CreateInformation = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const goback = useGoBack();
  const [checked, setChecked] = useState<boolean>(false)
  const focusNameProps = FocusName();
  const focusHoProps = FocusHo();
  const focusEmailProps = FocusEmail();
  const [Firstname, setFirstName] = useState<string>('');
  const [Lastname, setLastName] = useState<string>('');
  const [Email, setEmail] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  const [selectedGender, setSelectedGender] = useState<string>('');
  return (
    <View style={StyleCreateInformation.container}>
      <View style={StyleCreateInformation.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleCreateInformation.iconBack} />
        </TouchableOpacity>
        <Text style={StyleCreateInformation.textHeader}>Tạo tài khoản</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={StyleCreateInformation.viewinput}>
          <View style={[StyleCreateInformation.input, focusNameProps.focusName && StyleCreateInformation.focusedInput]}>
            <TextInput
              style={StyleCreateInformation.textinput}
              placeholder="Nhập tên của bạn *"
              value={Firstname}
              onChangeText={(name) => setFirstName(name)}
              onFocus={focusNameProps.onFocusName}
              onBlur={focusNameProps.onBlurName}
            />
          </View>
          <View style={[StyleCreateInformation.input, focusHoProps.focusHo && StyleCreateInformation.focusedInput]}>
            <TextInput
              style={StyleCreateInformation.textinput}
              placeholder="Nhập họ của bạn"
              value={Lastname}
              onChangeText={(name) => setLastName(name)}
              onFocus={focusHoProps.onFocusHo}
              onBlur={focusHoProps.onBlurHo}
            />
          </View>
          <View style={[StyleCreateInformation.input, focusEmailProps.focusEmail && StyleCreateInformation.focusedInput]}>
            <TextInput
              style={StyleCreateInformation.textinput}
              placeholder="Email của bạn"
              value={Email}
              onChangeText={(name) => setEmail(name)}
              onFocus={focusEmailProps.onFocusEmail}
              onBlur={focusEmailProps.onBlurEmail}
            />
          </View>
          <View style={StyleCreateInformation.inputdate}>
            <TextInput
              style={StyleCreateInformation.textinput}
              value={date ? formatDate(new Date(date)) : ''}
              placeholder="Chọn ngày sinh"
              onTouchStart={() => [Keyboard.dismiss(), setOpen(true)]}
            />
            <Image source={infores.DATEPICKER} style={StyleCreateInformation.iconcalendar} />
            <DatePicker modal mode="date" open={open} date={date ? new Date(date) : new Date()} locale='vi'
              onConfirm={(date) => { setOpen(false), setDate(date.toISOString()) }}
              onCancel={() => { setOpen(false) }} />
          </View>
          <View>
            <View style={StyleCreateInformation.dropdown}>
              <Picker
                style={StyleCreateInformation.viewdropdown}
                selectedValue={selectedGender}
                onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}>
                <Picker.Item label="Chưa chọn giới tính" value="java" style={StyleCreateInformation.texdropdown} />
                <Picker.Item label="Nam" value="java" style={StyleCreateInformation.texdropdown} />
                <Picker.Item label="Nữ" value="js" style={StyleCreateInformation.texdropdown} />
              </Picker>
            </View>
          </View>
          <TouchableOpacity
            style={[StyleCreateInformation.update, !checked && StyleCreateInformation.disabledUpdate]}
            disabled={!checked}>
            <Text style={StyleCreateInformation.textupdate}>Tạo tài khoản</Text>
          </TouchableOpacity>

        </View>
        <View style={StyleCreateInformation.viewcheckbox}>
          <CheckBox
            title=
            {<Text style={StyleCreateInformation.textcheckbox}>Tôi đồng ý với các
              <Text style={StyleCreateInformation.textcheckboxprotect}> Điều khoản và điều kiện của The Coffee House</Text>
            </Text>}
            checked={checked}
            onPress={() => setChecked(!checked)}
            containerStyle={StyleCreateInformation.checkbox}
            checkedColor='#000'
            uncheckedColor='#000'
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default CreateInformation