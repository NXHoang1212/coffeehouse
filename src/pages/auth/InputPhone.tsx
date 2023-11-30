import { View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import React, { useState } from 'react';
import { Icon, Logo } from '../../constant/Icon';
import StyleInputPhone from '../../styles/auth/StyleInputPhone';
import { FocusLogin } from '../../hooks/Focus';
import { useGoBack } from '../../utils/GoBack';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam, } from '../../data/types/TypeStack';
import { signInWithPhoneNumber } from '../../service/methods/LoginSendOtp';

const InputPhone = () => {
  const goBack = useGoBack();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const focusLoginProps = FocusLogin();
  const [phone, setPhone] = useState<string>('');
  const isPhoneValid = phone.length === 10 || phone.length === 9;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={StyleInputPhone.container}>
        <View style={StyleInputPhone.viewheader}>
          <TouchableOpacity onPress={goBack}>
            <Image source={Icon.BACK} style={StyleInputPhone.iconback} />
          </TouchableOpacity>
        </View>
        <View style={StyleInputPhone.viewtext}>
          <Text style={StyleInputPhone.textinputphone}>Nhập số điện thoại</Text>
          <Text style={StyleInputPhone.textphone}>Vui lòng xác nhận số điện thoại của bạn để nhận được nhiều ưu đãi từ nhà</Text>
        </View>
        <View
          style={[
            StyleInputPhone.viewinput,
            focusLoginProps.focusLogin && StyleInputPhone.viewfocusinput,
          ]}>
          <Image source={Logo.VIETNAM} style={StyleInputPhone.iconvietnam} />
          <Text style={StyleInputPhone.textinput}>+84</Text>
          <View style={StyleInputPhone.viewline} />
          <TextInput
            style={StyleInputPhone.input}
            placeholder="Nhập số điện thoại"
            placeholderTextColor="gray"
            keyboardType="numeric"
            maxLength={10}
            value={phone}
            onChangeText={text => setPhone(text)}
            onFocus={focusLoginProps.onFocusLogin}
            onBlur={focusLoginProps.onBlurLogin}
          />
          {phone.length > 0 && (
            <TouchableOpacity onPress={() => { setPhone(''); }}>
              <Image source={Icon.BORDERCANCEL} style={StyleInputPhone.iconcancel} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate(StackHomeNavigateNameEnum.AuthStackUser as any, { screen: 'ConfirmOtpCode' });
            signInWithPhoneNumber(phone, navigation);
            focusLoginProps.onBlurLogin();
          }}
          disabled={!isPhoneValid}>
          <View
            style={[
              StyleInputPhone.viewlogin,
              { backgroundColor: isPhoneValid ? 'orange' : 'gray' },
            ]}>
            <Text style={StyleInputPhone.textlogin}>Đăng nhập</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InputPhone;
