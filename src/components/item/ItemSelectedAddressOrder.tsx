import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleItemSelectedAddress } from '../../styles/item/StyleItemSelectedAddress';
import { CheckBoxBorder } from '../custom/CheckBox';
import { Icon } from '../../constant/Icon';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import FastImage from 'react-native-fast-image';
import { Messenger } from '../../utils/ShowMessage';

interface Props {
  address: any;
  showDoneButton: boolean;
};

const ItemSelectedAddressOrder: React.FC<Props> = ({ address, showDoneButton }) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const [reason, setReason] = useState<string>('');

  const handleDone = () => {
    if (reason === '') {
      Messenger('Vui lòng chọn địa chỉ giao hàng', 'error');
    } else {
      navigation.navigate('TabHomeNavigate' as any, { screen: 'Đơn hàng', params: { address: reason } });
    }
  }

  return (
    <SafeAreaView style={StyleItemSelectedAddress.container}>
      <TouchableOpacity style={StyleItemSelectedAddress.body} onPress={() => handleDone()}>
        <View style={StyleItemSelectedAddress.checkbox}>
          <CheckBoxBorder
            checked={reason === address}
            onPress={() => setReason(address)}
          />
        </View>
        <View style={StyleItemSelectedAddress.viewheader}>
          <View>
            <FastImage source={Icon.DELIVERYADDRESS} style={StyleItemSelectedAddress.imageheader} />
          </View>
          <View style={StyleItemSelectedAddress.viewtextheader}>
            <Text style={StyleItemSelectedAddress.textheader}>{address.name}
            </Text>
            <Text style={StyleItemSelectedAddress.textdetail}>{address.DescribeAddRess}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View>
      </View>
    </SafeAreaView>
  );
};

export default ItemSelectedAddressOrder;
