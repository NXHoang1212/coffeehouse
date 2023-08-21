import { View, Text, Image, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import React, { useState } from 'react'
import StyleLoginUser from '../../styles/auth/StyleLoginUser'
import { Icon, Logo } from '../../constant/Icon'

const LoginUser = () => {
    const [phone, setPhone] = useState<string>('')
    return (
        <View style={StyleLoginUser.container}>
            <View style={StyleLoginUser.viewbackground}>
                <Image source={Logo.LOGINCOFFEE} style={StyleLoginUser.background} />
                <TouchableOpacity>
                    <Image source={Icon.BORDERCANCEL} style={StyleLoginUser.iconcancel} />
                </TouchableOpacity>
            </View>
            <View style={StyleLoginUser.viewhandle}>
                <View style={StyleLoginUser.viewwellcome}>
                    <Text style={StyleLoginUser.textwellcome}>Chào mừng bạn đến với</Text>
                    <Image source={Logo.TEXTLOGO} style={StyleLoginUser.logo} />
                </View>
                <View style={StyleLoginUser.viewinput}>
                    <Image source={Logo.VIETNAM} style={StyleLoginUser.iconvietnam} />
                    <Text style={StyleLoginUser.textinput}>+84</Text>
                    <View style={StyleLoginUser.viewline} />
                    <TextInput
                        style={StyleLoginUser.input}
                        placeholder="Nhập số điện thoại"
                        placeholderTextColor="gray"
                        keyboardType="numeric"
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                    />
                </View>
                <TouchableOpacity>
                    <View style={StyleLoginUser.viewlogin}>
                        <Text style={StyleLoginUser.textlogin}>Đăng nhập</Text>
                    </View>
                </TouchableOpacity>
                <View style={StyleLoginUser.continue}>
                    <View style={StyleLoginUser.lineor} />
                    <Text style={StyleLoginUser.textor}>Hoặc</Text>
                    <View style={StyleLoginUser.lineor} />
                </View>
            </View>
        </View>
    )
}

export default LoginUser