import { View, Text, TouchableOpacity, Image, ScrollView, Pressable, } from 'react-native';
import FastImage from 'react-native-fast-image';
import React, { useState, useCallback, useContext, memo } from 'react';
import StyleItemFavourites from '../../styles/item/StyleItemFavourites';
import { DetailProduct } from '../../data/types/Product.entity';
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
import { Swipeable } from 'react-native-gesture-handler';
import { useDeleteFavouritesMutation } from '../../service/api/IndexFavourites';

interface PropsItemProduct {
  item: DetailProduct;
}

const ItemFavourites = ({ item }: PropsItemProduct) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const { setProducts } = useContext(ProductContext);
  const user = useSelector((state: RootState) => state.root.user._id);
  const [deleteFavourites] = useDeleteFavouritesMutation();
  const [CreateEmptyCart] = useCreateEmptyCartMutation();
  const [show, setShow] = useState<boolean>(false);
  const [size, setSize] = useState<{ name: string; price: number }>({
    name: 'Vừa',
    price: 0,
  });
  const handleShowBottomSheet = (item: DetailProduct) => {
    const toppingValid = item.topping.every(
      topping => topping.name.trim() !== '' && topping.price.trim() !== '',
    );
    const sizeValid = item.size.every(
      size => size.name.trim() !== '' && size.price.trim() !== '',
    );
    if (toppingValid && sizeValid) {
      setProducts([item]);
      setShow(true);
    } else {
      handleAddToCart(item);
    }
  };

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
          },
        ],
      };
      const response = await CreateEmptyCart(data);
      if (response) {
        Messenger('Thêm vào giỏ hàng thành công', 'success');
      }
    } catch (error: any) {
      console.log('🚀 ~ file: ItemProduct.tsx:110 ~ error', error);
    }
  };

  const onLoad = useCallback(() => {
    FastImage.preload([{ uri: item.image as string }]);
  }, []);

  const RemoveFavourites = async (id: string) => {
    try {
      const response = await deleteFavourites(id);
      if (response) {
        Messenger('Xóa sản phẩm yêu thích thành công', 'success');
        navigation.goBack();
      }
    } catch (error: any) {
      console.log('🚀 ~ file: ItemFavourites.tsx:68 ~ error', error);
    }
  };

  const renderRightActions = () => {
    return (
      <TouchableOpacity
        style={StyleItemFavourites.viewiconswipedelete}
        onPress={() => RemoveFavourites(item._id)}>
        <Image
          source={Icon.DELETE}
          style={StyleItemFavourites.iconswipedelete}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={StyleItemFavourites.container}>
      <View style={StyleItemFavourites.viewbody}>
        <Pressable
          onPress={() => {
            setProducts([item]),
              navigation.navigate('StackHomeNavigate' as any, {
                screen: 'DetailOrder',
              });
          }}>
          <Swipeable renderRightActions={renderRightActions}>
            <View style={StyleItemFavourites.viewProduct}>
              <View>
                <FastImage
                  style={StyleItemFavourites.imageproduct}
                  source={{
                    uri: item.image as string,
                    priority: FastImage.priority.normal,
                    cache: FastImage.cacheControl.immutable,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                  onLoad={onLoad}
                />
              </View>
              <View style={StyleItemFavourites.viewitemtextproduct}>
                <Text style={StyleItemFavourites.textname}>{item.name}</Text>
                <Text style={StyleItemFavourites.textprice}>
                  {FormatPrice(item.price)}
                </Text>
              </View>
              <TouchableOpacity
                style={StyleItemFavourites.viewiconplus}
                onPress={() => handleShowBottomSheet(item)}>
                <Image
                  source={Icon.PLUS}
                  style={StyleItemFavourites.iconplus}
                />
              </TouchableOpacity>
            </View>
          </Swipeable>
        </Pressable>
      </View>
      <BottomSheetDetailOrder
        item={item}
        show={show}
        onDismiss={() => setShow(false)}
      />
    </View>
  );
};

export default memo(ItemFavourites);
