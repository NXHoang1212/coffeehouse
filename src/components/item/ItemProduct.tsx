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
import { CreateEmptyCart } from '../../service/api/IndexCart';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';
import { Messenger } from '../../utils/ShowMessage';
interface PropsItemProduct {
  item: DetailProduct;
  showCategory: boolean;
  isFirstItem: boolean;
}

const ItemProduct = ({ item, showCategory, isFirstItem }: PropsItemProduct) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const { isLoggedIn } = useAuth();
  const user = useSelector((state: RootState) => state.user.user._id);
  console.log("🚀 ~ file: ItemProduct.tsx:65 ~ user", user)
  const [show, setShow] = useState<boolean>(false);

  const handleProductDetail = () => {
    //@ts-ignore
    navigation.navigate('StackHomeNavigate', { screen: 'DetailOrder', params: { id: item._id } })
  }

  const handleShowBottomSheet = (item: DetailProduct) => {
    if (isLoggedIn) {
      if (!item.size || item.size.length === 0 && !item.topping || item.topping.length === 0) {
        // Nếu sản phẩm không có thông tin size và topping, thêm sản phẩm vào giỏ hàng trực tiếp
        handleAddToCart(item);
      } else {
        // Nếu sản phẩm có thông tin size và topping, hiển thị BottomSheet
        setShow(true);
      }
    } else {
      //@ts-ignore
      navigation.navigate('AuthStackUser', { screen: 'Login' });
    }
  }
  


  const handleAddToCart = async (item: DetailProduct) => {
    try {
      const data: any = {
        UserId: user,
        ProductId: [
          {
            NameProduct: item.name,
            PriceProduct: item.price,
            QuantityProduct: 1,
          }
        ]
      }
      const response = await CreateEmptyCart(data);
      console.log("🚀 ~ file: ItemProduct.tsx:108 ~ response", response)
    } catch (error: any) {
      console.log("🚀 ~ file: ItemProduct.tsx:110 ~ error", error)
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