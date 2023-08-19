import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import StylePromoDiscount from '../../styles/code/StylePromoDiscount'
import { Icon, Bean, infores } from '../../constant/Icon';
import LinearGradient from 'react-native-linear-gradient'
import { ThemLightStatusBar } from '../../constant/ThemLight';

const PromoDiscount = () => {
  ThemLightStatusBar('light-content', '#fd7e14');
  return (
    <View style={StylePromoDiscount.container}>
      <LinearGradient colors={['#fd7e14', '#ff4f0a']} style={StylePromoDiscount.viewheader}>
        <View style={StylePromoDiscount.viewtextheader}>
          <Text style={StylePromoDiscount.textheader}>Ưu đãi</Text>
          <Text style={StylePromoDiscount.textsubheader}>Mới</Text>
          <Text style={StylePromoDiscount.textbean}>24 BEAN</Text>
        </View>
        <TouchableOpacity style={StylePromoDiscount.viewvoucher}>
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
          <TouchableOpacity style={StylePromoDiscount.viewmember}>
            <Image source={Bean.KING} style={StylePromoDiscount.iconking} />
            <Text style={StylePromoDiscount.textservice}>Hạng thành viên</Text>
          </TouchableOpacity>
          <TouchableOpacity style={StylePromoDiscount.viewmember}>
            <Image source={Bean.BEAN} style={StylePromoDiscount.iconchangebean} />
            <Text style={StylePromoDiscount.textservice}>Đổi Bean</Text>
          </TouchableOpacity>
        </View>
        <View style={StylePromoDiscount.viewservice}>
          <TouchableOpacity style={StylePromoDiscount.viewmember}>
            <Image source={Bean.BEANHISTORY} style={StylePromoDiscount.iconbeanhistory} />
            <Text style={StylePromoDiscount.textservice}>Hạng thành viên</Text>
          </TouchableOpacity>
          <TouchableOpacity style={StylePromoDiscount.viewmember}>
            <Image source={infores.SERCURITY} style={StylePromoDiscount.iconsercurity} />
            <Text style={StylePromoDiscount.textservice}>Hạng thành viên</Text>
          </TouchableOpacity>
        </View>
        <View style={StylePromoDiscount.viewpromocode}>
          <Text style={StylePromoDiscount.textpromocode}>Phiếu Ưu đãi của bạn</Text>
          <TouchableOpacity style={StylePromoDiscount.viewseeall}>
            <Text style={StylePromoDiscount.textseeallpromocode}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default PromoDiscount