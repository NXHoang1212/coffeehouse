import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import StylePromoDiscount from '../../styles/code/StylePromoDiscount';
import { Icon, Bean, infores } from '../../constant/Icon';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { RootState } from '../../redux/store/Store';
import { useSelector } from 'react-redux';

const PromoDiscount = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const link = 'https://order.thecoffeehouse.com/user-info/accountUser';
  let isLoggedIn = useSelector((state: RootState) => state.IsLoggedIn.isLoggedIn.isLoggedIn);
  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor('#fd7e14');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#fd7e14');
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={StylePromoDiscount.container}>
      <LinearGradient
        colors={['#fd7e14', '#ff4f0a']}
        style={StylePromoDiscount.viewheader}>
        <View style={StylePromoDiscount.viewtextheader}>
          <Text style={StylePromoDiscount.textheader}>Ưu đãi</Text>
          <Text style={StylePromoDiscount.textsubheader}>Mới</Text>
          <Text style={StylePromoDiscount.textbean}>24 BEAN</Text>
        </View>
        <TouchableOpacity
          style={StylePromoDiscount.viewvoucher}
          onPress={() =>
            navigation.navigate(
              isLoggedIn ? 'StackHomeNavigate' : ('AuthStackUser' as any),
              { screen: 'DiscountUser' },
            )
          }>
          <Image source={Icon.PROMO} style={StylePromoDiscount.iconvoucher} />
          <Text style={StylePromoDiscount.textvoucher}>Voucher Của tôi</Text>
        </TouchableOpacity>
        <Image source={Icon.POINTS} style={StylePromoDiscount.iconpoints} />
        <View style={StylePromoDiscount.viewbarcode}>
          {/* api code vào dây  */}
        </View>
      </LinearGradient>
      <View style={StylePromoDiscount.body}>
        <View style={StylePromoDiscount.viewservice}>
          <TouchableOpacity
            style={StylePromoDiscount.viewmember}
            onPress={() =>
              navigation.navigate('StackHomeNavigate' as any, {
                screen: 'RankMember',
              })
            }>
            <Image source={Bean.KING} style={StylePromoDiscount.iconking} />
            <Text style={StylePromoDiscount.textservice}>Hạng thành viên</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={StylePromoDiscount.viewmember}
            onPress={() =>
              navigation.navigate(
                isLoggedIn ? 'StackHomeNavigate' : ('AuthStackUser' as any),
                { screen: 'ChangeBean' },
              )
            }>
            <Image
              source={Bean.BEAN}
              style={StylePromoDiscount.iconchangebean}
            />
            <Text style={StylePromoDiscount.textservice}>Đổi Bean</Text>
          </TouchableOpacity>
        </View>
        <View style={StylePromoDiscount.viewservice}>
          <TouchableOpacity
            style={StylePromoDiscount.viewmember}
            onPress={() =>
              navigation.navigate(
                isLoggedIn ? 'StackHomeNavigate' : ('AuthStackUser' as any),
                { screen: 'HistoryBean' },
              )
            }>
            <Image
              source={Bean.BEANHISTORY}
              style={StylePromoDiscount.iconbeanhistory}
            />
            <Text style={StylePromoDiscount.textservice}>Lịch sử BEAN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={StylePromoDiscount.viewmember}
            onPress={() =>
              navigation.navigate(
                isLoggedIn ? 'StackHomeNavigate' : ('AuthStackUser' as any),
                { screen: 'Rules', params: { link } },
              )
            }>
            <Image
              source={infores.SERCURITY}
              style={StylePromoDiscount.iconsercurity}
            />
            <Text style={StylePromoDiscount.textservice}>
              Quyền lợi của bạn
            </Text>
          </TouchableOpacity>
        </View>
        <View style={StylePromoDiscount.viewpromocode}>
          <Text style={StylePromoDiscount.textpromocode}>
            Phiếu Ưu đãi của bạn
          </Text>
          <TouchableOpacity
            style={StylePromoDiscount.viewseeall}
            onPress={() =>
              navigation.navigate(
                isLoggedIn ? 'StackHomeNavigate' : ('AuthStackUser' as any),
                { screen: 'DiscountUser' },
              )
            }>
            <Text style={StylePromoDiscount.textseeallpromocode}>
              Xem tất cả
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PromoDiscount;
