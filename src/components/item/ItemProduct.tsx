import { Image, Pressable, Text, TouchableOpacity, View, StyleProp, ImageStyle } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import React, { useState, useCallback, useContext, memo } from 'react';
import StyleItemProduct from '../../styles/item/StyleItemProduct';
import { DetailProduct, Products } from '../../data/types/Product.entity';
import { Icon } from '../../constant/Icon';
import { FormatPrice } from '../../utils/FormatPrice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import BottomSheetDetailOrder from '../../pages/order/BottomSheetDetailOrder';
import { useCreateEmptyCartMutation } from '../../service/api/IndexCart';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';
import { Messenger } from '../../utils/ShowMessage';
import { ProductContext } from '../../service/provider/ProductContext';
import { setProductSuggest } from '../../redux/slices/ProductSuggestSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/Store';

interface PropsItemProduct {
  item: DetailProduct;
  showCategory: boolean;
  isFirstItem: boolean;
}

const ItemProduct = memo(({ item, showCategory, isFirstItem }: PropsItemProduct) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const dispatch = useDispatch<AppDispatch>();
  let isLoggedIn = useSelector((state: RootState) => state.root.isLoggedIn.isLoggedIn);
  const { setProducts } = useContext(ProductContext);
  const user = useSelector((state: RootState) => state.root.user._id);
  const [CreateEmptyCart] = useCreateEmptyCartMutation();
  const [show, setShow] = useState<boolean>(false);
  const [size, setSize] = useState<{ name: string; price: number }>({
    name: 'Vừa',
    price: 0,
  });
  const handleShowBottomSheet = (item: DetailProduct) => {
    if (isLoggedIn) {
      if (item.topping.length > 0 && item.size.length > 0) {
        const toppingValid = item.topping.every(
          topping => topping.name.trim() !== '' && topping.price.trim() !== '',
        );
        const sizeValid = item.size.every(
          size => size.name.trim() !== '' && size.price.trim() !== '',
        );
        if (toppingValid && sizeValid) {
          setShow(true);
        } else {
          handleAddToCart(item);
        }
      }
    } else {
      navigation.navigate('AuthStackUser' as any, { screen: 'Login' });
    }
  };

  const handleAddToCart = async (item: DetailProduct) => {
    try {
      const data: any = {
        UserId: user,
        ProductId: [
          {
            NameProduct: item.name,
            ProductId: item._id,
            PriceProduct: item.price,
            QuantityProduct: 1,
            SizeProduct: size,
          },
        ],
      };
      const response = await CreateEmptyCart(data);
      if (response) {
        dispatch(setProductSuggest([item]));
        Messenger('Thêm vào giỏ hàng thành công', 'success');
      }
    } catch (error: any) {
      console.log('🚀 ~ file: ItemProduct.tsx:110 ~ error', error);
    }
  };

  const onLoad = useCallback(() => {
    FastImage.preload([{ uri: item.image as string }]);
  }, []);

  return (
    <View style={StyleItemProduct.container}>
      <View style={StyleItemProduct.viewbody}>
        {showCategory && isFirstItem && (
          <View style={StyleItemProduct.viewcategories}>
            <Text style={StyleItemProduct.textnamecategories}>
              {item.category.name}
            </Text>
          </View>
        )}
        <Pressable
          onPress={() => {
            setProducts([item]),
              navigation.navigate('StackHomeNavigate' as any, {
                screen: 'DetailOrder',
              });
          }}>
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
              <Text style={StyleItemProduct.textprice}>
                {FormatPrice(item.price)}
              </Text>
            </View>
            <TouchableOpacity
              style={StyleItemProduct.viewiconplus}
              onPress={() => handleShowBottomSheet(item)}>
              <Image source={Icon.PLUS} style={StyleItemProduct.iconplus} />
            </TouchableOpacity>
          </View>
        </Pressable>
        <BottomSheetDetailOrder
          item={item}
          show={show}
          onDismiss={() => setShow(false)}
        />
      </View>
    </View>
  );
});

export default ItemProduct;
