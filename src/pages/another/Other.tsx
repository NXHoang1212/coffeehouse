import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styleOther from '../../styles/other/StyleOther'
import { Icon, infores } from '../../constant/Icon'
import { ThemLightStatusBar } from '../../constant/ThemLight'

const Other = () => {
  ThemLightStatusBar('dark-content', '#fff');
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
            <TouchableOpacity style={styleOther.utilities}>
              <Image style={styleOther.iconutilities} source={infores.HISTORY} />
              <Text style={styleOther.textutilities}>Lịch sử đơn hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleOther.utilities}>
              <Image style={styleOther.iconrules} source={infores.RULES} />
              <Text style={styleOther.textutilities}>Điều Khoản</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styleOther.music}>
            <Image style={styleOther.iconmusic} source={infores.MUSIC} />
            <Text style={styleOther.textutilities}>Nhạc đang phát</Text>
          </TouchableOpacity>
        </View>
        <Text style={styleOther.textother}>Hỗ trợ</Text>
        <View style={styleOther.viewsupport}>
          <TouchableOpacity style={styleOther.support}>
            <Image style={styleOther.iconsupport} source={infores.STAR} />
            <Text style={styleOther.textsupport}>Đánh giá đơn hàng</Text>
            <Image style={styleOther.iconright} source={Icon.RIGHT} />
          </TouchableOpacity>
          <View style={styleOther.line} />
          <TouchableOpacity style={styleOther.support}>
            <Image style={styleOther.iconsupport} source={infores.STAR} />
            <Text style={styleOther.textsupport}>Liên hệ và góp ý</Text>
            <Image style={styleOther.iconright} source={Icon.RIGHT} />
          </TouchableOpacity>
        </View>
        <Text style={styleOther.textaccount}>Tài khoản</Text>
        <View style={styleOther.viewaccount}>
          <TouchableOpacity style={styleOther.account}>
            <Image style={styleOther.iconaccount} source={infores.ACCOUNT} />
            <Text style={styleOther.textinfor}>Thông tin cá nhân</Text>
            <Image style={styleOther.iconright} source={Icon.RIGHT} />
          </TouchableOpacity>
          <View style={styleOther.lineinfor} />
          <TouchableOpacity style={styleOther.account}>
            <Image style={styleOther.iconaddress} source={infores.ADDRESS} />
            <Text style={styleOther.textaddress}>Địa chỉ đã lưu</Text>
            <Image style={styleOther.iconright} source={Icon.RIGHT} />
          </TouchableOpacity>
          <View style={styleOther.lineinfor} />
          <TouchableOpacity style={styleOther.account}>
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