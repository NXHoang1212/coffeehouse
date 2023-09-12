import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react'
import { Icon } from '../../../constant/Icon';
import StyleSetting from '../../../styles/code/ordinary/StyleSetting';
import { useGoBack } from '../../../utils/GoBack';
import ToggleSwitch from 'toggle-switch-react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateNameEnum, StackHomeNavigateTypeParam } from '../../../data/types/TypeStack';
import { useNavigation } from '@react-navigation/native';
import { StackParamsOther } from '../../../data/types/StackOrther';

const Setting = () => {
  const url = 'https://thecoffeehouse.com/pages/chuyen-ca-phe-va-tra';
  const goback = useGoBack();
  const [isOn, setIsOn] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsOther>>();
  const navigationDad = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const handeleGeneral = () => {
    //@ts-ignore
    navigationDad.navigate(StackHomeNavigateNameEnum.StackHomeUrl, { screen: 'AboutCoffee', params: { url: url } })
  }
  return (
    <View style={StyleSetting.container}>
      <View style={StyleSetting.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleSetting.iconBack} />
        </TouchableOpacity>
        <Text style={StyleSetting.textHeader}>Cài đặt</Text>
      </View>
      <View style={StyleSetting.body}>
        <View style={StyleSetting.viewgeneral}>
          <TouchableOpacity style={StyleSetting.handlegeneral}>
            <Image source={Icon.NOTIFY} style={StyleSetting.iconGeneral} />
            <Text style={StyleSetting.textGeneral}>Nhận thông báo</Text>
            <View style={StyleSetting.icontoggle}>
              <ToggleSwitch isOn={isOn} onColor="#00D1FF" offColor="#E5E5E5" size="medium" onToggle={isOn => setIsOn(isOn)} />
            </View>
          </TouchableOpacity>
          <View style={StyleSetting.line} />
          <TouchableOpacity style={StyleSetting.handlegeneral} onPress={() => navigation.navigate('DeepLinkAccount')}>
            <Image source={Icon.LINK} style={StyleSetting.iconGeneral} />
            <Text style={StyleSetting.textGeneral}>Liên kết tài khoản</Text>
            <Image source={Icon.RIGHT} style={StyleSetting.iconright} />
          </TouchableOpacity>
          <View style={StyleSetting.line} />
          <TouchableOpacity style={StyleSetting.handlegeneral} onPress={handeleGeneral}>
            <Image source={Icon.ABOUT} style={StyleSetting.iconGeneral} />
            <Text style={StyleSetting.textGeneral}>Về chúng tôi</Text>
            <Image source={Icon.RIGHT} style={StyleSetting.iconright} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Setting