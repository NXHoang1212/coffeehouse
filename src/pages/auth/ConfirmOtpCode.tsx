import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import StyleConfirmOtp from '../../styles/auth/StyleConfirmOtp'
import { useNavigation } from '@react-navigation/native';
import { OtpInput } from 'react-native-otp-entry';

const ConfirmOtpCode = () => {
  const navigation = useNavigation()
  const [time, setTime] = useState<number>(120)

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(time - 1)
    }, 1000)
    if (time === 0) {
      clearInterval(timer)
    }
    return () => {
      clearInterval(timer)
    }
  }, [time])

  return (
    <View style={StyleConfirmOtp.container}>
      <View style={StyleConfirmOtp.header}>
        <Text style={StyleConfirmOtp.textotp}>Xác nhận Mã OTP</Text>
        <Text style={StyleConfirmOtp.textsend}>Một mã xác thực gồm 6 số đã được gửi đến số điện thoại</Text>
      </View>
      <View style={StyleConfirmOtp.body}>
        <OtpInput numberOfDigits={6} focusColor="black"/>
      </View>
      <View style={StyleConfirmOtp.viewfail}>
        <Text style={StyleConfirmOtp.textfail}>Bạn không nhận được mã?</Text>
        {/* @ts-ignore */}
        <TouchableOpacity onPress={() => navigation.navigate('CreateInformation')}>
          <Text style={StyleConfirmOtp.textsendagain}>Gửi lại {time}s</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ConfirmOtpCode