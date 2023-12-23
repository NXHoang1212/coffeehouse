import { View, Text, TouchableOpacity, Linking, Alert, Button, } from 'react-native';
import React, { useCallback } from 'react';
import { ThemLightStatusBar } from '../../../constant/ThemLight';
import StyleContacFeedBack from '../../../styles/another/StyleContactFeedback';
import { useGoBack } from '../../../utils/GoBack';
import { Icon, contact, infores } from '../../../constant/Icon';
import { Image } from 'react-native-animatable';

const ContactFeedBack = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const goback = useGoBack();
  return (
    <View style={StyleContacFeedBack.container}>
      <View style={StyleContacFeedBack.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleContacFeedBack.iconBack} />
        </TouchableOpacity>
        <Text style={StyleContacFeedBack.textHeader}>Liên hệ và góp ý</Text>
      </View>
      <View style={StyleContacFeedBack.viewcontact}>
        <View style={StyleContacFeedBack.viewcontactitem}>
          <TouchableOpacity
            style={StyleContacFeedBack.handlecontact}
            onPress={() => Linking.openURL('tel:18006936')}>
            <Image
              source={contact.PHONE}
              style={StyleContacFeedBack.iconContact}
            />
            <View style={StyleContacFeedBack.viewtextcontact}>
              <Text style={StyleContacFeedBack.textContact}>Tổng đài</Text>
              <Text style={StyleContacFeedBack.textContact}>18006936</Text>
            </View>
            <Image source={Icon.RIGHT} style={StyleContacFeedBack.iconright} />
          </TouchableOpacity>
          <View style={StyleContacFeedBack.line} />
          <TouchableOpacity
            style={StyleContacFeedBack.handlecontact}
            onPress={() => Linking.openURL('mailto:hi@thecoffeehouse.vn')}>
            <Image
              source={contact.PHONE}
              style={StyleContacFeedBack.iconContact}
            />
            <View style={StyleContacFeedBack.viewtextcontact}>
              <Text style={StyleContacFeedBack.textContact}>Email</Text>
              <Text style={StyleContacFeedBack.textContact}>
                hi@thecoffeehouse.vn
              </Text>
            </View>
            <Image source={Icon.RIGHT} style={StyleContacFeedBack.iconright} />
          </TouchableOpacity>
          <View style={StyleContacFeedBack.line} />
          <TouchableOpacity
            style={StyleContacFeedBack.handlecontact}
            onPress={() => Linking.openURL('https://www.thecoffeehouse.com/')}>
            <Image source={contact.WEB} style={StyleContacFeedBack.iconweb} />
            <View style={StyleContacFeedBack.viewtextcontact}>
              <Text style={StyleContacFeedBack.textContact}>Website</Text>
              <Text style={StyleContacFeedBack.textContact}>
                www.thecoffeehouse.com
              </Text>
            </View>
            <Image source={Icon.RIGHT} style={StyleContacFeedBack.iconright} />
          </TouchableOpacity>
          <View style={StyleContacFeedBack.line} />
          <TouchableOpacity
            style={StyleContacFeedBack.handlecontact}
            onPress={() =>
              Linking.openURL('https://www.facebook.com/The.Coffee.House.2014')
            }>
            <Image
              source={contact.FACEBOOK}
              style={StyleContacFeedBack.iconweb}
            />
            <View style={StyleContacFeedBack.viewtextcontact}>
              <Text style={StyleContacFeedBack.textContact}>Facebook</Text>
              <Text style={StyleContacFeedBack.textContact}>
                facebook.com/The.Coffee.House.2014
              </Text>
            </View>
            <Image source={Icon.RIGHT} style={StyleContacFeedBack.iconright} />
          </TouchableOpacity>
          <View style={StyleContacFeedBack.line} />
          <TouchableOpacity
            style={StyleContacFeedBack.handlecontact}
            onPress={() => Linking.openURL('tel:18006936')}>
            <Image
              source={contact.FEEDBACK}
              style={StyleContacFeedBack.iconweb}
            />
            <View style={StyleContacFeedBack.viewtextcontact}>
              <Text style={StyleContacFeedBack.textContact}>
                Gửi góp ý về ứng dụng
              </Text>
              <Text style={StyleContacFeedBack.textContact}>18006936</Text>
            </View>
            <Image source={Icon.RIGHT} style={StyleContacFeedBack.iconright} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContactFeedBack;
