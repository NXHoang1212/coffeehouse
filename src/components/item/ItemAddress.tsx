import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { Icon, infores } from '../../constant/Icon';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { AddRess } from '../../data/types/AddRess.entity';
import StyleItemGetAddress from '../../styles/item/StyleItemAddress';
import { useDispatch } from 'react-redux';
import { setAddress } from '../../redux/slices/AddressSlice';


interface PropsItemProduct {
    item: AddRess;
    isLastItem: any;
}

const ItemAddress: React.FC<PropsItemProduct> = ({ item, isLastItem }) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
    const dispatch = useDispatch();

    // const SelectedAddress = () => {
    //     dispatch(setAddress(item))
    //     //@ts-ignore
    //     navigation.navigate('EditAddress')
    // }

    return (
        <View style={StyleItemGetAddress.container}>
            <TouchableOpacity onPress={() => { dispatch(setAddress(item)); navigation.navigate('EditAddress' as any) }}>
                <View style={StyleItemGetAddress.viewbody}>
                    <View>
                        <Image source={infores.ADDRESS} style={StyleItemGetAddress.iconAddress} />
                    </View>
                    <View style={StyleItemGetAddress.viewitemtext}>
                        {item.name.length > 0 ? <Text style={StyleItemGetAddress.textName}>{item.name}</Text> : null}
                        <Text style={StyleItemGetAddress.textDescribeAddRess}>{item.DescribeAddRess}</Text>
                        <View style={StyleItemGetAddress.viewuser}>
                            <Text style={StyleItemGetAddress.textAddress}>{item.username}</Text>
                            <Text style={StyleItemGetAddress.textPhone}>{item.phone}</Text>
                        </View>
                    </View>
                    <Image source={infores.EDIT} style={StyleItemGetAddress.iconEdit} />
                </View>
                {!isLastItem && <View style={StyleItemGetAddress.line} />}
            </TouchableOpacity>
        </View>
    )
}

export default ItemAddress