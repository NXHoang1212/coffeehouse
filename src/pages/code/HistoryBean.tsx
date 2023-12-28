import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useGoBack } from '../../utils/GoBack';
import { ThemLightStatusBar } from '../../constant/ThemLight';
import StyleHistoryBean from '../../styles/code/StyleHistoryBean';
import { Icon } from '../../constant/Icon';
import FastImage from 'react-native-fast-image';

const HistoryBean = () => {
  const goback = useGoBack();
  ThemLightStatusBar('dark-content', '#fff');
  return (
    <View style={StyleHistoryBean.container}>
      <View style={StyleHistoryBean.viewheader}>
        <TouchableOpacity onPress={goback}>
          <FastImage source={Icon.BACK} style={StyleHistoryBean.iconBack} />
        </TouchableOpacity>
        <Text style={StyleHistoryBean.textHeader}>Lịch sử BEAN</Text>
      </View>
    </View>
  );
};

export default HistoryBean;
