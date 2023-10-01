import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styleOther from '../../styles/other/StyleOther'
import { Icon, infores } from '../../constant/Icon'
import { ThemLightStatusBar } from '../../constant/ThemLight'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsOther } from '../../data/types/StackOrther'
import { useNavigation } from '@react-navigation/native'
import { StackHomeNavigateNameEnum, StackHomeNavigateTypeParam } from '../../data/types/TypeStack'
import SignOut from '../../components/profile/SignOut'
import { useAuth } from '../../hooks/UseAuth'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store/Store'
import { clearUser } from '../../redux/slices/AuthSlice'
import { removeCart } from '../../redux/slices/CartSlice'
import { resetStore } from '../../redux/store/Store'

const Other = () => {
  const { isLoggedIn, logout } = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const [visible, setVisible] = useState<boolean>(false);
  const link = 'https://thecoffeehouse.com/pages/dieu-khoan-su-dung'
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsOther>>();
  const navigationDad = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  ThemLightStatusBar('dark-content', '#fff');
  const handeleGeneral = (destination: string) => {
    if (destination === 'HistoryOrder') {
      //@ts-ignore
      navigation.navigate(isLoggedIn ? 'HistoryOrder' : 'AuthStackUser')
    } else if (destination === 'Notifee') {
      //@ts-ignore
      navigationDad.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'Notifee' })
    } else if (destination === 'DiscountUser') {
      //@ts-ignore
      navigationDad.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'DiscountUser' })
    } else if (destination === 'PlayMusic') {
      //@ts-ignore
      navigationDad.navigate('StackHomeNavigate', { screen: 'PlayMusic', })
    } else if (destination === 'FeedBackOrder') {
      //@ts-ignore
      navigationDad.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'FeedBackOrder', })
    } else if (destination === 'ContactFeedBack') {
      //@ts-ignore
      navigationDad.navigate('StackHomeNavigate', { screen: 'ContactFeedBack', })
    } else if (destination === 'Location') {
      //@ts-ignore
      navigationDad.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'SaveAddress', })
    } else if (destination === 'Rules') {
      //@ts-ignore
      navigationDad.navigate('StackHomeNavigate', { screen: 'Rules', params: { link } })
    } else if (destination === 'Setting') {
      //@ts-ignore
      navigationDad.navigate('Setting')
    } else if (destination === 'Information') (
      //@ts-ignore
      navigation.navigate(isLoggedIn ? 'Information' : 'AuthStackUser')
    )
  }
  const onCancelPress = () => {
    setVisible(false);
  };
  const onOKPress = () => {
    dispatch(clearUser());
    dispatch(removeCart());
    resetStore();
    logout();
    setVisible(false);
  };
  const handleLogout = () => {
    setVisible(true);
  }
  return (
    <View style={styleOther.container}>
      <View style={styleOther.viewheader}>
        <Text style={styleOther.textheader}>Khác</Text>
        <TouchableOpacity style={styleOther.viewpromo} onPress={() => handeleGeneral('DiscountUser')}>
          <Image style={styleOther.iconpromo} source={Icon.PROMO} />
        </TouchableOpacity>
        <TouchableOpacity style={styleOther.viewnotify} onPress={() => handeleGeneral('Notifee')}>
          <Image style={styleOther.iconnotify} source={Icon.NOTIFY} />
        </TouchableOpacity>
      </View>
      <View style={styleOther.body}>
        <Text style={styleOther.textbodysup}>Tiện ích</Text>
        <View style={styleOther.viewbody}>
          <View style={styleOther.viewutilities}>
            <TouchableOpacity style={styleOther.utilities} onPress={() => handeleGeneral('HistoryOrder')}>
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
          <TouchableOpacity style={styleOther.account} onPress={() => handeleGeneral('Information')}>
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
          {isLoggedIn ? (
            <TouchableOpacity style={styleOther.account} onPress={handleLogout} >
              <Image style={styleOther.iconlogout} source={infores.LOGOUT} />
              <Text style={styleOther.textlogout}>Đăng xuất</Text>
              <Image style={styleOther.iconright} source={Icon.RIGHT} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styleOther.account}
              onPress={() => {
                //@ts-ignore
                navigation.navigate(StackHomeNavigateNameEnum.AuthStackUser, { screen: 'Login' })
              }}>
              <Image style={styleOther.iconlogout} source={infores.LOGIN} />
              <Text style={styleOther.textlogout}>Đăng nhập</Text>
              <Image style={styleOther.iconright} source={Icon.RIGHT} />
            </TouchableOpacity>
          )}
        </View>
        <SignOut
          visible={visible}
          title='Xác nhận'
          message='Bạn có muốn đăng xuất không ?'
          onCancelPress={onCancelPress}
          onOKPress={onOKPress}
        />

      </View>
    </View>
  )
}

export default Other