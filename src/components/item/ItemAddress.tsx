import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { Icon, infores } from '../../constant/Icon';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { AddRess } from '../../data/types/AddRess.entity';
import StyleItemGetAddress from '../../styles/item/StyleItemAddress';


interface PropsItemProduct {
    item: AddRess;
}

const ItemAddress: React.FC<PropsItemProduct> = ({ item }) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
    const handleEdit = () => {
        //@ts-ignore
        navigation.navigate('EditAddress', { item });
    }
    return (
        <View style={StyleItemGetAddress.container}>
            <TouchableOpacity onPress={handleEdit}>
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
            </TouchableOpacity>
        </View>
    )
}

export default ItemAddress