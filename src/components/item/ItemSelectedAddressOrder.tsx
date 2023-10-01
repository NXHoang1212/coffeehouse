import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleItemSelectedAddress } from '../../styles/item/StyleItemSelectedAddress'
import { CheckBox } from 'react-native-elements'
import { Icon } from '../../constant/Icon'
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';

type Props = {
    address: any
}

const ItemSelectedAddressOrder: React.FC<Props> = ({ address }) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
    const [selectedAddressType, setSelectedAddressType] = useState<boolean>(false);
    const handleSelectedAddress = (address: any) => {
        if (selectedAddressType === true) {
            //@ts-ignore
            navigation.navigate('TabHomeNavigate', { screen: 'Đơn hàng', params: { item: address } })
        }
    }

    return (
        <SafeAreaView>
            <View style={StyleItemSelectedAddress.container}>
                <View style={StyleItemSelectedAddress.checkbox}>
                    <CheckBox
                        checked={selectedAddressType}
                        onPress={() => setSelectedAddressType(!selectedAddressType)}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checkedColor='#FF5F24'
                        uncheckedColor='#FF5F24'
                    />
                </View>
                <View style={StyleItemSelectedAddress.viewheader}>
                    <View>
                        <Image source={Icon.DELIVERYADDRESS} style={StyleItemSelectedAddress.imageheader} />
                    </View>
                    <View style={StyleItemSelectedAddress.viewtextheader}>
                        <Text style={StyleItemSelectedAddress.textheader}>{address.name}</Text>
                        <Text style={StyleItemSelectedAddress.textdetail}>{address.DescribeAddRess}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={StyleItemSelectedAddress.viewdone} onPress={() => handleSelectedAddress(address)}>
                <Text style={StyleItemSelectedAddress.textdone}>Xong</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ItemSelectedAddressOrder