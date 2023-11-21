import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleItemSelectedAddress } from '../../styles/item/StyleItemSelectedAddress';
import { CheckBox } from 'react-native-elements';
import { Icon } from '../../constant/Icon';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';

type Props = {
  address: any;
  showDoneButton: boolean;
};

const ItemSelectedAddressOrder: React.FC<Props> = ({ address, showDoneButton }) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const [reason, setReason] = useState<string>('');

  const handleChooseAddress = () => {
    setReason(address);
    console.log("🚀 ~ file: ItemSelectedAddressOrder.tsx:22 ~ reason:", reason)
  }

  return (
    <SafeAreaView style={StyleItemSelectedAddress.container}>
      <View style={StyleItemSelectedAddress.body}>
        <View style={StyleItemSelectedAddress.checkbox}>
          <CheckBox
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="#FF5F24"
            uncheckedColor="#FF5F24"
            checked={reason === address}
            onPress={() => handleChooseAddress()}
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
      </View>
      <View>
        {showDoneButton && (
          <View style={StyleItemSelectedAddress.viewbutton}>
            <View style={StyleItemSelectedAddress.heightadd}>
              <TouchableOpacity style={StyleItemSelectedAddress.viewadd}
                onPress={() => navigation.navigate('StackHomeNavigate' as any, { screen: 'SaveAddress' })}>
                <Text style={StyleItemSelectedAddress.textdone}>Thêm địa chỉ mới</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={StyleItemSelectedAddress.viewdone}
              onPress={() => navigation.navigate('TabHomeNavigate' as any, { screen: 'Đơn hàng', params: { address: address } })}>
              <Text style={StyleItemSelectedAddress.textdone}>{address.done}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ItemSelectedAddressOrder;
