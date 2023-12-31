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
import { cartStatus } from '../../data/types/Enum.entity';

interface PropsItemProduct {
  item: DetailProduct;
  showCategory: boolean;
  isFirstItem: boolean;
}

const ItemProduct = ({ item, showCategory, isFirstItem }: PropsItemProduct) => {
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
<<<<<<< HEAD
<<<<<<< HEAD

  const handleProductDetail = () => {
    //@ts-ignore
    navigation.navigate('StackHomeNavigate', { screen: 'DetailOrder', params: { id: item._id } })
  }
=======
>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7

=======
>>>>>>> main
  const handleShowBottomSheet = (item: DetailProduct) => {
    if (isLoggedIn) {
      if (item.topping.length > 0 && item.size.length > 0) {
        const toppingValid = item.topping.every(topping => topping.name.trim() !== '' && topping.price.trim() !== '')
        const sizeValid = item.size.every(size => size.name.trim() !== '' && size.price.trim() !== '')
        if (toppingValid && sizeValid) {
          setShow(true);
        } else {
          handleAddToCart(item);
        }
      }
    } else {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            SizeProduct: size,
          }
        ]
      }
      const response = await CreateEmptyCart(data);
      if (response) {
        Messenger('Thêm vào giỏ hàng thành công', 'success');
      }
    } catch (error: any) {
      console.log("🚀 ~ file: ItemProduct.tsx:110 ~ error", error)
    }
  }

=======
      navigation.navigate('AuthStackUser' as any, { screen: 'Login' });
=======
      navigation.navigate('AuthStackUser' as any, {screen: 'Login'});
>>>>>>> main
=======
      navigation.navigate('AuthStackUser' as any, { screen: 'Login' });
>>>>>>> main
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
            StatusProduct: cartStatus.PENDING,
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

>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
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
<<<<<<< HEAD
<<<<<<< HEAD
        <TouchableOpacity onPress={handleProductDetail}>
=======
        <TouchableOpacity onPress={() => navigation.navigate('StackHomeNavigate' as any, { screen: 'DetailOrder', params: { id: item._id } })}>
>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
=======
        <Pressable
          onPress={() => {
            setProducts([item]),
              navigation.navigate('StackHomeNavigate' as any, {
                screen: 'DetailOrder',
              });
          }}>
>>>>>>> main
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
          enableBackDropDismiss
        />
      </View>
    </View>
  );
}

export default ItemProduct;
