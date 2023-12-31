import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import StyleConfirmOtp from '../../styles/auth/StyleConfirmOtp';
import { useNavigation } from '@react-navigation/native';
import VeriftyInput from '../../components/otp/VeriftyOtp';
import { confirmCode, ConfirmPhone } from '../../service/methods/LoginSendOtp';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/Store';
import { setLoggedIn } from '../../redux/slices/IsLoggedIn';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';

const ConfirmOtpCode = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch<AppDispatch>();
  const [time, setTime] = useState<number>(120);
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<TextInput[]>([]);
  const _id = useSelector((state: RootState) => state.root.user._id);
  const login = () => { dispatch(setLoggedIn(true)) };
  const handleInputChange = (text: string, index: number) => {
    const otpCode = otp.map((item, i) => {
      if (i === index) {
        return text;
      } else {
        return item;
      }
    });
    setOtp(otpCode);
    if (text !== '') {
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    if (time === 0) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <View style={StyleConfirmOtp.container}>
      <View style={StyleConfirmOtp.header}>
        <Text style={StyleConfirmOtp.textotp}>Xác nhận Mã OTP</Text>
        <Text style={StyleConfirmOtp.textsend}>Một mã xác thực gồm 6 số đã được gửi đến số điện thoại</Text>
      </View>
      <View style={StyleConfirmOtp.body}>
        {otp.map((item, index) => (
          <VeriftyInput
            key={index}
            value={item}
            onChangeText={(text) => handleInputChange(text, index)}
            onSubmitEditing={() => {
              if (index === 5) {
                const code = otp.join('');
                if (_id) {
                  //hàm cập nhật số điện thoại
                  ConfirmPhone(code, dispatch, navigation, login, _id);
                  console.log('đang chạy confirm phone');
                } else {
                  //hàm xác thực otp
                  confirmCode(code, dispatch, navigation, login);
                  console.log('đang chạy confirm code');
                }
              }
            }}
            inputRef={(ref: TextInput) => {
              inputRefs.current[index] = ref;
            }}
          />
        ))}
      </View>
      <View style={StyleConfirmOtp.viewfail}>
        <Text style={StyleConfirmOtp.textfail}>Bạn không nhận được mã?</Text>
        <TouchableOpacity onPress={() => setTime(120)}>
          <Text style={StyleConfirmOtp.textsendagain}>Gửi lại {time}s</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmOtpCode;