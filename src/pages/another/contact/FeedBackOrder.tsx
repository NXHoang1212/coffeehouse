import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { ThemLightStatusBar } from '../../../constant/ThemLight';
import { useGoBack } from '../../../utils/GoBack';
import StyleFeedBackOrder from '../../../styles/another/StyleFeedBackOrder';
import { Icon } from '../../../constant/Icon';
import FastImage from 'react-native-fast-image';
import IconFeedBack from '../../../assets/Svg/IconFeedBack';

const FeedBackOrder: React.FC = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const goback = useGoBack();
  return (
    <View style={StyleFeedBackOrder.container}>
      <View style={StyleFeedBackOrder.viewheader}>
        <TouchableOpacity onPress={goback}>
          <FastImage source={Icon.BACK} style={StyleFeedBackOrder.iconBack} />
        </TouchableOpacity>
        <Text style={StyleFeedBackOrder.textHeader}>Đánh giá đơn hàng</Text>
      </View>
      <View style={StyleFeedBackOrder.viewnoorder}>
        <IconFeedBack style={StyleFeedBackOrder.iconNoOrder} />
        <Text style={StyleFeedBackOrder.textNoOrder}>
          Chưa có đơn hàng nào hoàn tất
        </Text>
      </View>
    </View>
  );
};

export default FeedBackOrder;
