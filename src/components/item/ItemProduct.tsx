import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import React, { useState } from 'react';
import StyleItemProduct from '../../styles/item/StyleItemProduct'
import { DetailProduct, ProductGet, Products } from '../../data/types/Product.entity';
import { Icon } from '../../constant/Icon';
import { FormatPrice } from '../../utils/FormatPrice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import BottomSheetDetailOrder from '../../pages/order/BottomSheetDetailOrder';;
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/UseAuth';


interface PropsItemProduct {
  item: DetailProduct;
  showCategory: boolean;
  isFirstItem: boolean;
}

const ItemProduct = ({ item, showCategory, isFirstItem }: PropsItemProduct) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const { isLoggedIn } = useAuth();
  const [show, setShow] = useState<boolean>(false);
  const handleProductDetail = () => {
    //@ts-ignore
    navigation.navigate('StackHomeNavigate', { screen: 'DetailOrder', params: { id: item._id } })
  }

  const handleShowBottomSheet = (item: DetailProduct) => {
    if (isLoggedIn) {
      setShow(true)
    } else {
      //@ts-ignore
      navigation.navigate('AuthStackUser', { screen: 'Login' })
    }
  }


  return (
    <GestureHandlerRootView>
      <View style={StyleItemProduct.container}>
        <View style={StyleItemProduct.viewbody}>
          {showCategory && isFirstItem && (
            <View style={StyleItemProduct.viewcategories}>
              <Text style={StyleItemProduct.textnamecategories}>{item.category.name}</Text>
            </View>
          )}
          <TouchableOpacity onPress={handleProductDetail}>
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
              <TouchableOpacity style={StyleItemProduct.viewiconplus} onPress={() => handleShowBottomSheet(item)}>
                <Image source={Icon.PLUS} style={StyleItemProduct.iconplus} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <BottomSheetDetailOrder
            item={item}
            show={show}
            onDismiss={() => setShow(false)} >
          </BottomSheetDetailOrder>
        </View>
      </View>
    </GestureHandlerRootView>
  )
}

export default ItemProduct