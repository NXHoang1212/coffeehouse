import { View, Text, TouchableOpacity, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react'
import { DetailProduct, Products } from '../../data/types/product/Product.entity';
import { Icon } from '../../constant/Icon';
import { FormatPrice } from '../../utils/FormatPrice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/navigation/TypeStack';
import StyleItemDetailProduct from '../../styles/item/StyleItemDetailProduct';

interface PropsDetailItemProduct {
    item: DetailProduct;
}

const ItemDetailProduct = ({ item }: PropsDetailItemProduct) => {

    return (
        <View style={StyleItemDetailProduct.container}>
            <View style={StyleItemDetailProduct.viewbody}>
                <TouchableOpacity>
                    <View style={StyleItemDetailProduct.viewProduct}>
                        <View>
                            <FastImage
                                style={StyleItemDetailProduct.imageproduct}
                                source={{
                                    uri: item.image as string,
                                    priority: FastImage.priority.high,
                                }}
                            />
                        </View>
                        <View style={StyleItemDetailProduct.viewitemtextproduct}>
                            <Text style={StyleItemDetailProduct.textname}>{item.name}</Text>
                            <Text style={StyleItemDetailProduct.textprice}>{FormatPrice(item.price)}</Text>
                        </View>
                        <TouchableOpacity style={StyleItemDetailProduct.viewiconplus}>
                            <Image source={Icon.PLUS} style={StyleItemDetailProduct.iconplus} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemDetailProduct