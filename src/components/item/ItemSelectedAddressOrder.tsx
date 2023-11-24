import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleItemSelectedAddress } from '../../styles/item/StyleItemSelectedAddress';
import { CheckBox } from 'react-native-elements';
import { Icon } from '../../constant/Icon';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';

interface Props {
  address: any;
  showDoneButton: boolean;
};

const ItemSelectedAddressOrder: React.FC<Props> = ({ address, showDoneButton }) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const [reason, setReason] = useState<string>('');

  return (
    <SafeAreaView style={StyleItemSelectedAddress.container}>
      <TouchableOpacity style={StyleItemSelectedAddress.body} onPress={() => navigation.navigate('TabHomeNavigate' as any, { screen: 'Đơn hàng', params: { address: reason } })}>
        <View style={StyleItemSelectedAddress.checkbox}>
          <CheckBox
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="#FF5F24"
            uncheckedColor="#FF5F24"
            checked={reason === address}
            onPress={() => setReason(address)}
          />
        </View>
        <View style={StyleItemSelectedAddress.viewheader}>
          <View>
            <Image source={Icon.DELIVERYADDRESS} style={StyleItemSelectedAddress.imageheader} />
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
