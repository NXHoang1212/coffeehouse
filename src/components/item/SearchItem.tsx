import { View, Text, TouchableOpacity, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import React, { useCallback, useContext, useState } from 'react'
import StyleItemProduct from '../../styles/item/StyleItemProduct'
import { DetailProduct, Products } from '../../data/types/Product.entity';
import { Icon } from '../../constant/Icon';
import { FormatPrice } from '../../utils/FormatPrice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { ProductContext } from '../../service/provider/ProductContext';
import BottomSheetDetailOrder from '../../pages/order/BottomSheetDetailOrder';

interface PropsItemProduct {
    item: Products;
}

const SeacrchItem = ({ item }: PropsItemProduct) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
    const { setProducts } = useContext(ProductContext);
    const [show, setShow] = useState<boolean>(false);
    const onLoad = useCallback(() => {
        FastImage.preload([{ uri: item.image as string }]);
    }, []);
    const handleShowBottomSheet = (item: DetailProduct) => {
        setProducts([item]);
        setShow(true);
      }

    return (
        <View style={StyleItemProduct.container}>
            <View style={StyleItemProduct.viewbody}>
                <TouchableOpacity onPress={() => { setProducts([item]), navigation.navigate('StackHomeNavigate' as any, { screen: 'DetailProduct' }) }}>
                    <View style={StyleItemProduct.viewProduct}>
                        <View>
                            <FastImage
                                style={StyleItemProduct.imageproduct}
                                source={{
                                    uri: item.image as string,
                                    priority: FastImage.priority.normal,
                                    cache: FastImage.cacheControl.immutable,
                                }}
                                resizeMode={FastImage.resizeMode.cover}
                                onLoad={onLoad}
                            />
                        </View>
                        <View style={StyleItemProduct.viewitemtextproduct}>
                            <Text style={StyleItemProduct.textname}>{item.name}</Text>
                            <Text style={StyleItemProduct.textprice}>{FormatPrice(item.price)}</Text>
                        </View>
                        <TouchableOpacity style={StyleItemProduct.viewiconplus} onPress={() => handleShowBottomSheet(item)}>
                            <Image source={Icon.PLUS} style={StyleItemProduct.iconplus} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
            <BottomSheetDetailOrder
                item={item}
                show={show}
                onDismiss={() => setShow(false)} >
            </BottomSheetDetailOrder>
        </View>
    )
}

export default SeacrchItem