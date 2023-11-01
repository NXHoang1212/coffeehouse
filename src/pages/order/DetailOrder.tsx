import { View } from 'react-native'
import React, { useContext } from 'react'
import { ThemLightStatusBar } from '../../constant/ThemLight';
import { FlashList } from '@huunguyen312/flash-list';
import StyleDetailOrder from '../../styles/order/StyleDetailOrder';
import ItemDetailProduct from '../../components/item/ItemDetailProduct';
import { ProductContext } from '../../service/provider/ProductContext';

const DetailOrder = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const { products } = useContext(ProductContext);
  const showdetail = products;
  return (
    <View style={StyleDetailOrder.container}>
      <FlashList
        data={showdetail}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <ItemDetailProduct item={item} />}
        estimatedItemSize={100}
        removeClippedSubviews={true}
        viewabilityConfig={{
          waitForInteraction: true,
          itemVisiblePercentThreshold: 50,
          minimumViewTime: 1000,
        }}
      />
    </View>
  )
}

export default DetailOrder