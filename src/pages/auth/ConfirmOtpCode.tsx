import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import StyleConfirmOtp from '../../styles/auth/StyleConfirmOtp';
import {useNavigation, useRoute} from '@react-navigation/native';
import VeriftyInput from '../../components/otp/VeriftyOtp';
import {confirmOtp} from '../../service/methods/LoginSendOtp';

type PropsParams = {
  phone: string;
};

const ConfirmOtpCode = () => {
  const navigation = useNavigation();
  const {phone} = useRoute().params as PropsParams;
  const [time, setTime] = useState<number>(120);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const inputRefs = useRef<TextInput[]>([]);

  const handleInputChange = (text: string, index: number) => {
    if (text === '') {
      return;
    }
    if (index === 5) {
      return;
    }
    const nextInputRef = inputRefs.current[index + 1];
    if (nextInputRef) {
      nextInputRef.focus();
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
        <Text style={StyleConfirmOtp.textsend}>
          Một mã xác thực gồm 6 số đã được gửi đến số điện thoại
        </Text>
      </View>
      <View style={StyleConfirmOtp.body}>
        {otp.map((value, index) => (
          <VeriftyInput
            key={index}
            value={value}
            onChangeText={text => {
              const otpClone = [...otp];
              otpClone[index] = text;
              setOtp(otpClone);
              handleInputChange(text, index);
            }}
            onCompleted={() => {
              if (index === 5) {
                confirmOtp(phone, navigation);
              }
            }}
            inputRef={(ref: any) => (inputRefs.current[index] = ref)}
          />
        ))}
      </View>
      <View style={StyleConfirmOtp.viewfail}>
        <Text style={StyleConfirmOtp.textfail}>Bạn không nhận được mã?</Text>
        {/* @ts-ignore */}
        <TouchableOpacity onPress={() => setTime(120)}>
          <Text style={StyleConfirmOtp.textsendagain}>Gửi lại {time}s</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmOtpCode;
