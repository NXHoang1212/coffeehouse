import { View, Text, TouchableOpacity, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react'
import StyleItemProduct from '../../styles/item/StyleItemProduct'
import { Products } from '../../data/types/product/Product.entity';
import { Icon } from '../../constant/Icon';
import { FormatPrice } from '../../utils/FormatPrice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/navigation/TypeStack';


interface PropsItemProduct {
  item: Products;
  showCategory: boolean;
  isFirstItem: boolean;
}

const ItemProduct = ({ item, showCategory, isFirstItem }: PropsItemProduct) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();

  const handleProductDetail = () => {
    //@ts-ignore
    navigation.navigate('StackHomeNavigate', { screen: 'DetailOrder', params: { id: item._id } })
  }

  return (
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
            <TouchableOpacity style={StyleItemProduct.viewiconplus}>
              <Image source={Icon.PLUS} style={StyleItemProduct.iconplus} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ItemProduct