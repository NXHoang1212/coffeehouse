import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import StylePromoDiscount from '../../styles/code/StylePromoDiscount'
import { Icon, Bean, infores } from '../../constant/Icon';
import LinearGradient from 'react-native-linear-gradient'
import { ThemLightStatusBar } from '../../constant/ThemLight';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/navigation/TypeStack';
import { useAuth } from '../../hooks/UseAuth';

const PromoDiscount = () => {
  const { isLoggedIn } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  ThemLightStatusBar('light-content', '#fd7e14');
  const link = 'https://order.thecoffeehouse.com/user-info/accountUser'
  const handeleGeneral = (destination: string) => {
    if (destination === 'DiscountUser') {
      //@ts-ignore
      navigation.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'DiscountUser' })
    } else if (destination === 'HistoryBean') {
      //@ts-ignore
      navigation.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'HistoryBean' })
    } else if (destination === 'ChangeBean') {
      //@ts-ignore
      navigation.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'ChangeBean' })
    } else if (destination === 'PermissionProfit') {
      //gắn url vào đây
      //@ts-ignore
      navigation.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'Rules', params: { link } })
    } else if (destination === 'RankMember') {
      //@ts-ignore
      navigation.navigate('StackHomeNavigate', { screen: 'RankMember' })
    }
  }

  return (
    <View style={StylePromoDiscount.container}>
      <LinearGradient colors={['#fd7e14', '#ff4f0a']} style={StylePromoDiscount.viewheader}>
        <View style={StylePromoDiscount.viewtextheader}>
          <Text style={StylePromoDiscount.textheader}>Ưu đãi</Text>
          <Text style={StylePromoDiscount.textsubheader}>Mới</Text>
          <Text style={StylePromoDiscount.textbean}>24 BEAN</Text>
        </View>
        <TouchableOpacity style={StylePromoDiscount.viewvoucher} onPress={() => handeleGeneral('DiscountUser')}>
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
          <TouchableOpacity style={StylePromoDiscount.viewmember} onPress={() => handeleGeneral('RankMember')}>
            <Image source={Bean.KING} style={StylePromoDiscount.iconking} />
            <Text style={StylePromoDiscount.textservice}>Hạng thành viên</Text>
          </TouchableOpacity>
          <TouchableOpacity style={StylePromoDiscount.viewmember} onPress={() => handeleGeneral('ChangeBean')}>
            <Image source={Bean.BEAN} style={StylePromoDiscount.iconchangebean} />
            <Text style={StylePromoDiscount.textservice}>Đổi Bean</Text>
          </TouchableOpacity>
        </View>
        <View style={StylePromoDiscount.viewservice}>
          <TouchableOpacity style={StylePromoDiscount.viewmember} onPress={() => handeleGeneral('HistoryBean')}>
            <Image source={Bean.BEANHISTORY} style={StylePromoDiscount.iconbeanhistory} />
            <Text style={StylePromoDiscount.textservice}>Lịch sử BEAN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={StylePromoDiscount.viewmember} onPress={() => handeleGeneral('PermissionProfit')}>
            <Image source={infores.SERCURITY} style={StylePromoDiscount.iconsercurity} />
            <Text style={StylePromoDiscount.textservice}>Quyền lợi của bạn</Text>
          </TouchableOpacity>
        </View>
        <View style={StylePromoDiscount.viewpromocode}>
          <Text style={StylePromoDiscount.textpromocode}>Phiếu Ưu đãi của bạn</Text>
          <TouchableOpacity style={StylePromoDiscount.viewseeall} onPress={() => handeleGeneral('DiscountUser')}>
            <Text style={StylePromoDiscount.textseeallpromocode}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default PromoDiscount