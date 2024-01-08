import { View, Text, TouchableOpacity, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import React, { useCallback, useContext, useState, memo } from 'react';
import StyleItemProduct from '../../styles/item/StyleItemProduct';
import { DetailProduct, Products } from '../../data/types/Product.entity';
import { Icon } from '../../constant/Icon';
import { FormatPrice } from '../../utils/FormatPrice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { ProductContext } from '../../service/provider/ProductContext';
import BottomSheetDetailOrder from '../../pages/order/BottomSheetDetailOrder';
import { RootState } from '../../redux/store/Store';
import { useSelector } from 'react-redux';
import { Messenger } from '../../utils/ShowMessage';
import { useCreateEmptyCartMutation } from '../../service/api/IndexCart';
import { cartStatus } from '../../data/types/Enum.entity';

interface PropsItemProduct {
  item: Products;
}

const SeacrchItem = memo(({ item }: PropsItemProduct) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const { setProducts } = useContext(ProductContext);
  const [show, setShow] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.root.user._id);
  const [size, setSize] = useState<{ name: string; price: number }>({
    name: 'Vừa',
    price: 0,
  });
  const [CreateEmptyCart] = useCreateEmptyCartMutation();
  const onLoad = useCallback(() => {
    FastImage.preload([{ uri: item.image as string }]);
  }, []);
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
            StatusProduct: cartStatus.PENDING,
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

  return (
    <View style={StyleItemProduct.container}>
      <View style={StyleItemProduct.viewbody}>
        <TouchableOpacity
          onPress={() => {
            setProducts([item]),
              navigation.navigate('StackHomeNavigate' as any, {
                screen: 'DetailProduct',
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
        </TouchableOpacity>
      </View>
      <BottomSheetDetailOrder
        item={item}
        show={show}
        onDismiss={() => setShow(false)}
      />
    </View>
  );
});

export default SeacrchItem;
