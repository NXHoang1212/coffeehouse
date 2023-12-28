import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import styleOther from '../../styles/another/StyleOther';
import { Icon, infores } from '../../constant/Icon';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsOther } from '../../data/types/StackOrther';
import { useNavigation } from '@react-navigation/native';
import { StackHomeNavigateNameEnum, StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import SignOut from '../../components/profile/SignOut';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/Store';
import { clearUser } from '../../redux/slices/AuthSlice';
import { removeCart } from '../../redux/slices/CartSlice';
import { resetStore } from '../../redux/store/Store';
import { ResetLoggedIn } from '../../redux/slices/IsLoggedIn';
import { setShowLoading } from '../../redux/slices/IsLoadingSlice';
import { useGetDiscountQuery } from '../../service/api/IndexDiscount';
import ActivityIndicator from '../../components/activity/ActivityIndicator';
import { COLOR } from '../../constant/Color';
import IconPromo from '../../assets/Svg/IconPromo';
import IconNotify from '../../assets/Svg/IconNotify';
import FastImage from 'react-native-fast-image';
import IconLogin from '../../assets/Svg/IconLogin';
import IconStar from '../../assets/Svg/IconStar';
import IconComments from '../../assets/Svg/IconComments';


const Other = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.root.isLoggedIn.isLoggedIn);
  const isLoading = useSelector((state: RootState) => state.isLoading.isShowLoading);
  const [visible, setVisible] = useState<boolean>(false);
  const link = 'https://thecoffeehouse.com/pages/dieu-khoan-su-dung';
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsOther>>();
  const navigationDad = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const { data: dataDiscount } = useGetDiscountQuery();
  const count = dataDiscount?.data.length;
  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor('#fff');
  const onCancelPress = () => {
    setVisible(false);
  };
  const onOKPress = () => {
    dispatch(setShowLoading({ isShowLoading: true }));
    setTimeout(() => {
      dispatch(clearUser());
      dispatch(ResetLoggedIn());
      resetStore();
      setVisible(false);
      dispatch(setShowLoading({ isShowLoading: false }));
    }, 1000);
  };
  const handleLogout = () => {
    setVisible(true);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#fff');
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styleOther.container}>
      {isLoading ? <View style={styleOther.viewloading}><ActivityIndicator /></View> : null}
      <View style={styleOther.viewheader}>
        <Text style={styleOther.textheader}>Khác</Text>
        <TouchableOpacity style={styleOther.viewpromo}
          onPress={() => navigationDad.navigate(isLoggedIn ? 'StackHomeNavigate' : ('AuthStackUser' as any), { screen: 'DiscountUser' })}>
          <IconPromo style={styleOther.iconpromo} fill={COLOR.ORANGEBOLD} />
          {isLoggedIn ? (<Text style={styleOther.textpromo}>{count}</Text>) : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={styleOther.viewnotify}
          onPress={() => navigationDad.navigate(isLoggedIn ? 'StackHomeNavigate' : ('AuthStackUser' as any), { screen: 'Notifee' })}>
          <IconNotify style={styleOther.iconnotify} />
        </TouchableOpacity>
      </View>
      <View style={styleOther.body}>
        <Text style={styleOther.textbodysup}>Tiện ích</Text>
        <View style={styleOther.viewbody}>
          <View style={styleOther.viewutilities}>
            <TouchableOpacity
              style={styleOther.utilities}
              onPress={() => navigation.navigate(isLoggedIn ? 'HistoryOrder' : ('AuthStackUser' as any),)}>
              <Image
                style={styleOther.iconutilities}
                source={infores.HISTORY}
              />
              <Text style={styleOther.textutilities}>Lịch sử đơn hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styleOther.utilities}
              onPress={() => navigationDad.navigate('StackHomeNavigate' as any, { screen: 'Rules', params: { link } })}>
              <Image style={styleOther.iconrules} source={infores.RULES} />
              <Text style={styleOther.textutilities}>Điều Khoản</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styleOther.music}
            onPress={() => navigationDad.navigate('StackHomeNavigate' as any, { screen: 'PlayMusic' })}>
            <Image style={styleOther.iconmusic} source={infores.MUSIC} />
            <Text style={styleOther.textutilities}>Nhạc đang phát</Text>
          </TouchableOpacity>
        </View>
        <Text style={styleOther.textother}>Hỗ trợ</Text>
        <View style={styleOther.viewsupport}>
          <TouchableOpacity style={styleOther.support}
            onPress={() => navigationDad.navigate(isLoggedIn ? 'StackHomeNavigate' : ('AuthStackUser' as any), { screen: 'FeedBackOrder' })}>
            <IconStar style={styleOther.iconsupport} fill={COLOR.BLACK} />
            <Text style={styleOther.textsupport}>Đánh giá đơn hàng</Text>
            <Image style={styleOther.iconright} source={Icon.RIGHT} />
          </TouchableOpacity>
          <View style={styleOther.line} />
          <TouchableOpacity
            style={styleOther.support}
            onPress={() => navigationDad.navigate('StackHomeNavigate' as any, { screen: 'ContactFeedBack' })}>
            <IconComments style={styleOther.iconsupport} fill={COLOR.BLACK} />
            <Text style={styleOther.textsupport}>Liên hệ và góp ý</Text>
            <Image style={styleOther.iconright} source={Icon.RIGHT} />
          </TouchableOpacity>
        </View>
        <Text style={styleOther.textaccount}>Tài khoản</Text>
        <View style={styleOther.viewaccount}>
          <TouchableOpacity
            style={styleOther.account}
            onPress={() => navigation.navigate(isLoggedIn ? 'Information' : ('AuthStackUser' as any))}>
            <Image style={styleOther.iconaccount} source={infores.ACCOUNT} />
            <Text style={styleOther.textinfor}>Thông tin cá nhân</Text>
            <Image style={styleOther.iconright} source={Icon.RIGHT} />
          </TouchableOpacity>
          <View style={styleOther.lineinfor} />
          <TouchableOpacity
            style={styleOther.account}
            onPress={() => navigationDad.navigate(isLoggedIn ? 'StackHomeNavigate' : ('AuthStackUser' as any), { screen: 'SaveAddress' })}>
            <Image style={styleOther.iconaddress} source={infores.ADDRESS} />
            <Text style={styleOther.textaddress}>Địa chỉ đã lưu</Text>
            <Image style={styleOther.iconright} source={Icon.RIGHT} />
          </TouchableOpacity>
          <View style={styleOther.lineinfor} />
          <TouchableOpacity
            style={styleOther.account}
            onPress={() => navigation.navigate('Setting')}>
            <Image style={styleOther.iconsetting} source={infores.SETTING} />
            <Text style={styleOther.textaddress}>Cài đặt</Text>
            <Image style={styleOther.iconright} source={Icon.RIGHT} />
          </TouchableOpacity>
          <View style={styleOther.lineinfor} />
          {isLoggedIn ? (
            <TouchableOpacity style={styleOther.account} onPress={handleLogout}>
              <Image style={styleOther.iconlogout} source={infores.LOGOUT} />
              <Text style={styleOther.textlogout}>Đăng xuất</Text>
              <Image style={styleOther.iconright} source={Icon.RIGHT} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styleOther.account}
              onPress={() => { navigation.navigate(StackHomeNavigateNameEnum.AuthStackUser as any, { screen: 'Login' }); }}>
              <IconLogin style={styleOther.iconlogout} />
              <Text style={styleOther.textlogout}>Đăng nhập</Text>
              <Image style={styleOther.iconright} source={Icon.RIGHT} />
            </TouchableOpacity>
          )}
        </View>
        <SignOut
          visible={visible}
          title="Xác nhận"
          message="Bạn có muốn đăng xuất không ?"
          onCancelPress={onCancelPress}
          onOKPress={onOKPress}
        />
      </View>
    </View >
  );
};

export default Other;
