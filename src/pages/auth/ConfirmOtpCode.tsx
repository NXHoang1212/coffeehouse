import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import StyleConfirmOtp from '../../styles/auth/StyleConfirmOtp'
import VeriftyInput from '../../components/otp/VeriftyOtp'

const ConfirmOtpCode = () => {
  const [code, setCode] = useState<string>('')
  //đếm ngược thời gian gửi lại mã otp 120s
  const [time, setTime] = useState<number>(120)
  //đếm ngược thời gian gửi lại mã otp 120s hết 120s sẽ ngưng đếm
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
        <VeriftyInput />
        <VeriftyInput />
        <VeriftyInput />
        <VeriftyInput />
        <VeriftyInput />
        <VeriftyInput />
      </View>
      <View style={StyleConfirmOtp.viewfail}>
        <Text style={StyleConfirmOtp.textfail}>Bạn không nhận được mã?</Text>
        <TouchableOpacity>
          <Text style={StyleConfirmOtp.textsendagain}>Gửi lại {time}s</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ConfirmOtpCode