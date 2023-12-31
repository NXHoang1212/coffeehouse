import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { ThemLightStatusBar } from '../../constant/ThemLight';
import StyleChangeBean from '../../styles/code/StyleChangeBean';
import { useGoBack } from '../../utils/GoBack';
import { Icon } from '../../constant/Icon';
import FastImage from 'react-native-fast-image';

const ChangeBean = () => {
  const goback = useGoBack();
  ThemLightStatusBar('dark-content', '#fff');

  return (
    <View style={StyleChangeBean.container}>
      <View style={StyleChangeBean.viewheader}>
        <TouchableOpacity onPress={goback}>
          <FastImage source={Icon.BACK} style={StyleChangeBean.iconBack} />
        </TouchableOpacity>
        <Text style={StyleChangeBean.textHeader}>Đổi Bean</Text>
      </View>
    </View>
  );
};

export default ChangeBean;
