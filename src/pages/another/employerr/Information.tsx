import { View, Text, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView, Keyboard, } from 'react-native';
import React, { useState } from 'react';
import { ThemLightStatusBar } from '../../../constant/ThemLight';
import StyleInformation from '../../../styles/another/StyleInformation';
import { Icon, infores } from '../../../constant/Icon';
import { useGoBack } from '../../../utils/GoBack';
import DatePicker from 'react-native-date-picker';
import ModalOptionGender from '../../../components/modal/OptionGender';
import { FormatDate } from '../../../utils/FormatDate';
import { FocusEmail, FocusHo, FocusName } from '../../../hooks/Focus';
import { useSelector } from 'react-redux';
import { MonitorChangeInput } from '../../../utils/MonitorInput';
import { ApiUpdateUser, UploadAvatar } from '../../../service/api/IndexUser';
import { Messenger } from '../../../utils/ShowMessage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../../data/types/TypeStack';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/Store';
import { setUser } from '../../../redux/slices/AuthSlice';
import OptionsCamera from '../../../components/modal/OptionsCamera';
import IconDelete from '../../../assets/Svg/IconDelete';
import IconDownMenu from '../../../assets/Svg/IconDownMenu';

const Information = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const goback = useGoBack();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const dispatch = useDispatch<AppDispatch>();
  const focusNameProps = FocusName();
  const focusHoProps = FocusHo();
  const focusEmailProps = FocusEmail();
  const user = useSelector((state: RootState) => state.root.user);
  const id = user._id;
  const [name, setName] = useState<string>(user.name);
  const [holder, setHolder] = useState<string>(user.holder);
  const [email, setEmail] = useState<string>(user.email);
  const [gender, setGender] = useState<string>(user.gender);
  const [birthday, setBirthday] = useState<string>(user.birthday);
  const [open, setOpen] = useState<boolean>(false);
  const [genderModalVisible, setGenderModalVisible] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<any>('' || user.avatar);

  const [emailInputDisabled, setEmailInputDisabled] = useState<boolean>(!!email);
  const [birthdayInputDisabled, setBirthdayInputDisabled] = useState<boolean>(!!birthday);
  const [isAnyFieldEmpty, setIsAnyFieldEmpty] = useState<boolean>(true);
  const [show, setshow] = useState<boolean>(false);

  const monitorChangeInput = (fieldName: string, newValue: string) => {
    MonitorChangeInput(
      fieldName,
      newValue,
      setName,
      setHolder,
      setEmail,
      setGender,
      setBirthday,
      setIsAnyFieldEmpty,
      setAvatar,
    );
    if (fieldName === 'name' && newValue === user.name) {
      setIsAnyFieldEmpty(true);
    } else if (fieldName === 'holder' && newValue === user.holder) {
      setIsAnyFieldEmpty(true);
    } else if (fieldName === 'email' && newValue === user.email) {
      setIsAnyFieldEmpty(true);
    } else if (fieldName === 'gender' && newValue === user.gender) {
      setIsAnyFieldEmpty(true);
    } else if (fieldName === 'birthday' && newValue === user.birthday) {
      setIsAnyFieldEmpty(true);
    } else if (fieldName === 'avatar' && newValue === user.avatar) {
      setIsAnyFieldEmpty(true);
    } else {
      setIsAnyFieldEmpty(false);
    }
  };

  const handleUpdateUser = async () => {
    const data: any = {
      _id: id,
      name: name,
      holder: holder,
      email: email,
      gender: gender,
      birthday: birthday,
    };
    const res = await ApiUpdateUser(id, data);
    if (avatar !== user.avatar) {
      const resUploadAvatar = await UploadAvatar(id, avatar);
      if (resUploadAvatar) {
        Messenger('Cập nhật avatar thành công', 'success');
      } else {
        Messenger('Cập nhật avatar thất bại', 'error');
      }
    } else {
      Messenger('Không có avatar mới', 'error')
    }
    if (res) {
      Messenger('Cập nhật thành công', 'success');
      dispatch(setUser({ ...res, avatar: avatar }));
      navigation.navigate('Other' as any);
    }
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
        <TouchableOpacity onPress={() => setshow(true)}>
          <View style={StyleInformation.viewimg}>
            {avatar ? (
              <Image
                source={{ uri: avatar }}
                style={StyleInformation.iconavatar}
              />
            ) : (
              <Image source={Icon.AVATAR} style={StyleInformation.iconavatar} />
            )}
            <Image
              source={infores.CAMERA}
              style={StyleInformation.iconcamera}
            />
          </View>
        </TouchableOpacity>
        <View style={StyleInformation.viewinput}>
          <View
            style={[
              StyleInformation.input,
              focusNameProps.focusName && StyleInformation.focusedInput,
            ]}>
            <TextInput
              style={StyleInformation.textinput}
              placeholder="Nhập tên của bạn *"
              value={name}
              onChangeText={value => monitorChangeInput('name', value)}
              onFocus={focusNameProps.onFocusName}
              onBlur={focusNameProps.onBlurName}
            />
          </View>
          <View
            style={[
              StyleInformation.input,
              focusHoProps.focusHo && StyleInformation.focusedInput,
            ]}>
            <TextInput
              style={StyleInformation.textinput}
              placeholder="Nhập họ của bạn"
              value={holder}
              onChangeText={value => monitorChangeInput('holder', value)}
              onFocus={focusHoProps.onFocusHo}
              onBlur={focusHoProps.onBlurHo}
            />
          </View>
          <View
            style={[
              StyleInformation.input,
              (focusEmailProps.focusEmail && StyleInformation.focusedInput) ||
              (emailInputDisabled && StyleInformation.disabledInput),
            ]}>
            <TextInput
              style={StyleInformation.textinput}
              placeholder="Email của bạn"
              value={email}
              onChangeText={value => monitorChangeInput('email', value)}
              onFocus={() => {
                focusEmailProps.onFocusEmail();
                setEmailInputDisabled(false);
              }}
              onBlur={() => {
                focusEmailProps.onBlurEmail();
                setEmailInputDisabled(!!email);
              }}
              editable={!emailInputDisabled}
            />
          </View>
          <View
            style={[
              StyleInformation.inputdate,
              birthdayInputDisabled && StyleInformation.disabledInput,
            ]}>
            <TextInput
              style={StyleInformation.textinput}
              value={birthday ? FormatDate(new Date(birthday)) : ''}
              placeholder="Chọn ngày sinh"
              onChangeText={value => monitorChangeInput('birthday', value)}
              onFocus={() => {
                Keyboard.dismiss();
                setBirthdayInputDisabled(false);
                setOpen(true);
              }}
              editable={!birthdayInputDisabled}
            />
            <Image
              source={infores.DATEPICKER}
              style={StyleInformation.iconcalendar}
            />
            <DatePicker
              modal
              mode="date"
              open={open}
              date={birthday ? new Date(birthday) : new Date()}
              locale="vi"
              onConfirm={date => {
                setOpen(false), setBirthday(date.toISOString());
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => setGenderModalVisible(true)}
              style={StyleInformation.inputdate}>
              <Text style={StyleInformation.textinput}>
                {gender || 'Chọn giới tính'}
              </Text>
              <IconDownMenu style={StyleInformation.icondown} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            disabled={isAnyFieldEmpty}
            style={[
              StyleInformation.update,
              isAnyFieldEmpty && StyleInformation.disabledUpdate,
            ]}
            onPress={handleUpdateUser}>
            <Text style={StyleInformation.textupdate}>Cập nhật tài khoản</Text>
          </TouchableOpacity>

          <TouchableOpacity style={StyleInformation.viewdelete}>
            <IconDelete style={StyleInformation.icondelete} />
            <Text style={StyleInformation.textdelete}>Xóa tài khoản</Text>
          </TouchableOpacity>
          <ModalOptionGender
            visible={genderModalVisible}
            onClose={() => setGenderModalVisible(false)}
            onSelectGender={selectedGender => {
              monitorChangeInput('gender', selectedGender);
              setGenderModalVisible(false);
            }}
          />
          <OptionsCamera
            show={show}
            onDismiss={() => setshow(false)}
            enableBackDropDismiss
            setAvatar={(newAvatar: string) =>
              monitorChangeInput('avatar', newAvatar)
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Information;
