import { View, Text, Image, TouchableOpacity, TextInput, StatusBar, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ThemLightStatusBar } from '../../constant/ThemLight';
import StyleLoginUser from '../../styles/auth/StyleLoginUser';
import { Icon, Logo } from '../../constant/Icon';
import { useGoBack } from '../../utils/GoBack';
import { FocusLogin } from '../../hooks/Focus';
import { loginFacebook } from '../../service/methods/LoginFacebook';
import { loginGoogle } from '../../service/methods/LoginGoogle';
import { signInWithPhoneNumber } from '../../service/methods/LoginSendOtp';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateNameEnum, StackHomeNavigateTypeParam, } from '../../data/types/TypeStack';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../redux/slices/IsLoggedIn';
import { AppDispatch } from '../../redux/store/Store';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';
import { useGetUserByIdQuery } from '../../service/api/IndexUser';

const LoginUser = () => {
  ThemLightStatusBar('dark-content', 'transparent');
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const goBack = useGoBack();
  const focusLoginProps = FocusLogin();
  const [phone, setPhone] = useState<string>('');
  const isPhoneValid = phone.length === 10;
  const login = () => {
    dispatch(setLoggedIn(true));
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={StyleLoginUser.container}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={StyleLoginUser.viewbackground}>
          <Image source={Logo.LOGINCOFFEE} style={StyleLoginUser.background} />
          <TouchableOpacity onPress={goBack}>
            <Image
              source={Icon.BORDERCANCEL}
              style={StyleLoginUser.iconcancel}
            />
          </TouchableOpacity>
        </View>
        <View style={StyleLoginUser.viewhandle}>
          <View style={StyleLoginUser.viewwellcome}>
            <Text style={StyleLoginUser.textwellcome}>
              Chào mừng bạn đến với
            </Text>
            <Image source={Logo.TEXTLOGO} style={StyleLoginUser.logo} />
          </View>
          <View
            style={[
              StyleLoginUser.viewinput,
              focusLoginProps.focusLogin && StyleLoginUser.viewfocusinput,
            ]}>
            <Image source={Logo.VIETNAM} style={StyleLoginUser.iconvietnam} />
            <Text style={StyleLoginUser.textinput}>+84</Text>
            <View style={StyleLoginUser.viewline} />
            <TextInput
              style={StyleLoginUser.input}
              placeholder="Nhập số điện thoại"
              placeholderTextColor="gray"
              keyboardType="numeric"
              maxLength={10}
              value={phone}
              onChangeText={text => {
                setPhone(text), focusLoginProps.onFocusLogin();
              }}
              onFocus={focusLoginProps.onFocusLogin}
              onBlur={focusLoginProps.onBlurLogin}
            />
          </View>
          <TouchableOpacity onPress={() => { focusLoginProps.onBlurLogin(), signInWithPhoneNumber(phone, navigation) }} disabled={!isPhoneValid}>
            <View style={[StyleLoginUser.viewlogin, { backgroundColor: isPhoneValid ? 'orange' : 'gray' }]}>
              <Text style={StyleLoginUser.textlogin}>Đăng nhập</Text>
            </View>
          </TouchableOpacity>
          <View style={StyleLoginUser.continue}>
            <View style={StyleLoginUser.lineor} />
            <Text style={StyleLoginUser.textor}>HOẶC</Text>
            <View style={StyleLoginUser.lineor} />
          </View>
          <View style={StyleLoginUser.viewloginOther}>
            <TouchableOpacity onPress={() => navigation.navigate(StackHomeNavigateNameEnum.AuthStackUser as any, { screen: 'CreateInformation' },)}>
              <View style={StyleLoginUser.viewapple}>
                <Image source={Logo.APPLE} style={StyleLoginUser.iconfb} />
                <Text style={StyleLoginUser.textloginfb}>
                  Tiếp tục bằng Apple
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => loginFacebook(dispatch, navigation, login)}>
              <View style={StyleLoginUser.viewloginfb}>
                <Image source={Logo.FACEBOOK} style={StyleLoginUser.iconfb} />
                <Text style={StyleLoginUser.textloginfb}>Tiếp tục bằng Facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => loginGoogle(dispatch, navigation, login)}>
              <View style={StyleLoginUser.viewgg}>
                <Image source={Logo.GOOGLE} style={StyleLoginUser.iconfb} />
                <Text style={StyleLoginUser.textgoogle}>Đăng nhập bằng Google</Text>
              </View>
            </TouchableOpacity>
            <Text style={StyleLoginUser.textvn}>Tiếng Việt</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginUser;
