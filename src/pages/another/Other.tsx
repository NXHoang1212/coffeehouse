import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styleOther from '../../styles/other/StyleOther'
import { Icon, infores } from '../../constant/Icon'
import { ThemLightStatusBar } from '../../constant/ThemLight'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsOther } from '../../data/types/other/StackOrther'
import { useNavigation } from '@react-navigation/native'
import { StackHomeNavigateNameEnum, StackHomeNavigateTypeParam } from '../../data/types/navigation/TypeStack'

const Other = () => {
  const link = 'https://thecoffeehouse.com/pages/dieu-khoan-su-dung'
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsOther>>();
  const navigationDad = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  ThemLightStatusBar('dark-content', '#fff');
  const handeleGeneral = (destination: string) => {
    if (destination === 'PlayMusic') {
      //@ts-ignore
      navigationDad.navigate(StackHomeNavigateNameEnum.StackHomeUrl, { screen: 'PlayMusic', })
    } else if (destination === 'FeedBackOrder') {
      //@ts-ignore
      navigationDad.navigate(StackHomeNavigateNameEnum.StackHomeUrl, { screen: 'FeedBackOrder', })
    } else if (destination === 'ContactFeedBack') {
      //@ts-ignore
      navigationDad.navigate(StackHomeNavigateNameEnum.StackHomeUrl, { screen: 'ContactFeedBack', })
    } else if (destination === 'Location') {
      //@ts-ignore
      navigationDad.navigate(StackHomeNavigateNameEnum.StackHomeUrl, { screen: 'SaveAddress', })
    } else if (destination === 'Rules') {
      //@ts-ignore
      navigationDad.navigate(StackHomeNavigateNameEnum.StackHomeUrl, { screen: 'Rules', params: { url: link } })
    }
  }

  return (
    <View style={styleOther.container}>
      <View style={styleOther.viewheader}>
        <Text style={styleOther.textheader}>Khác</Text>
        <TouchableOpacity style={styleOther.viewpromo}>
          <Image style={styleOther.iconpromo} source={Icon.PROMO} />
        </TouchableOpacity>
        <TouchableOpacity style={styleOther.viewnotify}>
          <Image style={styleOther.iconnotify} source={Icon.NOTIFY} />
        </TouchableOpacity>
      </View>
      <View style={styleOther.body}>
        <Text style={styleOther.textbodysup}>Tiện ích</Text>
        <View style={styleOther.viewbody}>
          <View style={styleOther.viewutilities}>
            <TouchableOpacity style={styleOther.utilities} onPress={() => navigation.navigate('HistoryOrder')}>
              <Image style={styleOther.iconutilities} source={infores.HISTORY} />
              <Text style={styleOther.textutilities}>Lịch sử đơn hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleOther.utilities} onPress={() => handeleGeneral('Rules')}>
              <Image style={styleOther.iconrules} source={infores.RULES} />
              <Text style={styleOther.textutilities}>Điều Khoản</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styleOther.music} onPress={() => handeleGeneral('PlayMusic')}>
            <Image style={styleOther.iconmusic} source={infores.MUSIC} />
            <Text style={styleOther.textutilities}>Nhạc đang phát</Text>
          </TouchableOpacity>
        </View>
        <Text style={styleOther.textother}>Hỗ trợ</Text>
        <View style={styleOther.viewsupport}>
          <TouchableOpacity style={styleOther.support} onPress={() => handeleGeneral('FeedBackOrder')}>
            <Image style={styleOther.iconsupport} source={infores.STAR} />
            <Text style={styleOther.textsupport}>Đánh giá đơn hàng</Text>
            <Image style={styleOther.iconright} source={Icon.RIGHT} />
          </TouchableOpacity>
          <View style={styleOther.line} />
          <TouchableOpacity style={styleOther.support} onPress={() => handeleGeneral('ContactFeedBack')}>
            <Image style={styleOther.iconsupport} source={infores.STAR} />
            <Text style={styleOther.textsupport}>Liên hệ và góp ý</Text>
            <Image style={styleOther.iconright} source={Icon.RIGHT} />
          </TouchableOpacity>
        </View>
        <Text style={styleOther.textaccount}>Tài khoản</Text>
        <View style={styleOther.viewaccount}>
          <TouchableOpacity style={styleOther.account} onPress={() => navigation.navigate('Information')}>
            <Image style={styleOther.iconaccount} source={infores.ACCOUNT} />
            <Text style={styleOther.textinfor}>Thông tin cá nhân</Text>
            <Image style={styleOther.iconright} source={Icon.RIGHT} />
          </TouchableOpacity>
          <View style={styleOther.lineinfor} />
          <TouchableOpacity style={styleOther.account} onPress={() => handeleGeneral('Location')}>
            <Image style={styleOther.iconaddress} source={infores.ADDRESS} />
            <Text style={styleOther.textaddress}>Địa chỉ đã lưu</Text>
            <Image style={styleOther.iconright} source={Icon.RIGHT} />
          </TouchableOpacity>
          <View style={styleOther.lineinfor} />
          <TouchableOpacity style={styleOther.account} onPress={() => navigation.navigate('Setting')}>
            <Image style={styleOther.iconsetting} source={infores.SETTING} />
            <Text style={styleOther.textaddress}>Cài đặt</Text>
            <Image style={styleOther.iconright} source={Icon.RIGHT} />
          </TouchableOpacity>
          <View style={styleOther.lineinfor} />
          <TouchableOpacity style={styleOther.account}>
            <Image style={styleOther.iconlogout} source={infores.LOGOUT} />
            <Text style={styleOther.textlogout}>Đăng xuất</Text>
            <Image style={styleOther.iconright} source={Icon.RIGHT} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Other