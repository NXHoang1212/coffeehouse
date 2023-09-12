import { View, Text, TouchableOpacity, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react'
import StyleItemProduct from '../../styles/item/StyleItemProduct'
import { Products } from '../../data/types/Product.entity';
import { Icon } from '../../constant/Icon';
import { FormatPrice } from '../../utils/FormatPrice';

interface PropsItemProduct {
    item: Products;
}

const SeacrchItem = ({ item }: PropsItemProduct) => {
    return (
        <View style={StyleItemProduct.container}>
            <View style={StyleItemProduct.viewbody}>
                <TouchableOpacity>
                    <View style={StyleItemProduct.viewProduct}>
                        <View>
                            <FastImage
                                style={StyleItemProduct.imageproduct}
                                source={{
                                    uri: item.image,
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