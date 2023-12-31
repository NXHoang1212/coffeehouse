import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useGoBack } from '../../utils/GoBack';
import { Icon } from '../../constant/Icon';
import StyleNotifee from '../../styles/general/StyleNotifee';
import { ThemLightStatusBar } from '../../constant/ThemLight';
import IconCheck from '../../assets/Svg/IconCheck';
import FastImage from 'react-native-fast-image';

const Notifee = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const goback = useGoBack();
  return (
    <View style={StyleNotifee.container}>
      <View style={StyleNotifee.viewheader}>
        <TouchableOpacity onPress={goback}>
          <FastImage source={Icon.BACK} style={StyleNotifee.iconBack} />
        </TouchableOpacity>
        <Text style={StyleNotifee.textHeader}>Thông báo</Text>
        <TouchableOpacity style={StyleNotifee.handlecheck}>
          <IconCheck style={StyleNotifee.iconBell} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notifee;
