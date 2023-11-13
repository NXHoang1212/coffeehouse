import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import StyleHistoryOrder from '../../../styles/another/StyleHistoryOrder';
import {ThemLightStatusBar} from '../../../constant/ThemLight';
import {Icon} from '../../../constant/Icon';
import {useGoBack} from '../../../utils/GoBack';
import {ActiveTab} from '../../../hooks/ActiveTab';

const HistoryOrder = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const goback = useGoBack();
  const {activeTab, handleActiveTab} = ActiveTab('Tab Processing');
  return (
    <View style={StyleHistoryOrder.container}>
      <View style={StyleHistoryOrder.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleHistoryOrder.iconBack} />
        </TouchableOpacity>
        <Text style={StyleHistoryOrder.textHeader}>Lịch sử đơn hàng</Text>
      </View>
    </View>
  );
};

export default HistoryOrder;
