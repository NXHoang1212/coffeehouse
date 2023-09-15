import { View, Text, TouchableOpacity, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react'
import StyleItemProduct from '../../styles/item/StyleItemProduct'
import { Products } from '../../data/types/Product.entity';
import { Icon } from '../../constant/Icon';
import { FormatPrice } from '../../utils/FormatPrice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';

interface PropsItemProduct {
    item: Products;
}

const SeacrchItem = ({ item }: PropsItemProduct) => {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
    const handelDetail = () => {
        //@ts-ignore
        navigation.navigate('StackHomeNavigate', { screen: 'DetailOrder', params: { id: item._id } })
    }
    return (
        <View style={StyleItemProduct.container}>
            <View style={StyleItemProduct.viewbody}>
                <TouchableOpacity onPress={handelDetail}>
=======
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam.stackm>>();
    const handleDetail = () => {
        //@ts-ignore
        navigation.navigate('DetailOrder', { id: item._id })
    }

    return (
        <View style={StyleItemProduct.container}>
            <View style={StyleItemProduct.viewbody}>
                <TouchableOpacity onPress={handleDetail}>
>>>>>>> Stashed changes
=======
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam.stackm>>();
    const handleDetail = () => {
        //@ts-ignore
        navigation.navigate('DetailOrder', { id: item._id })
    }

    return (
        <View style={StyleItemProduct.container}>
            <View style={StyleItemProduct.viewbody}>
                <TouchableOpacity onPress={handleDetail}>
>>>>>>> Stashed changes
                    <View style={StyleItemProduct.viewProduct}>
                        <View>
                            <FastImage
                                style={StyleItemProduct.imageproduct}
                                source={{
                                    uri: item.image as string,
                                    priority: FastImage.priority.high,
                                }}
                            />
                        </View>
                        <View style={StyleItemProduct.viewitemtextproduct}>
                            <Text style={StyleItemProduct.textname}>{item.name}</Text>
                            <Text style={StyleItemProduct.textprice}>{FormatPrice(item.price)}</Text>
                        </View>
                        <TouchableOpacity style={StyleItemProduct.viewiconplus}>
                            <Image source={Icon.PLUS} style={StyleItemProduct.iconplus} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SeacrchItem