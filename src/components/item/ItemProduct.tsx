import { View, Text, TouchableOpacity, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react'
import StyleItemProduct from '../../styles/item/StyleItemProduct'
import { Products } from '../../data/types/product/Product.entity';
import { Icon } from '../../constant/Icon';
import { FormatPrice } from '../../utils/FormatPrice';

interface PropsItemProduct {
  item: Products;
  showCategory: boolean; // Thêm prop này để xác định liệu bạn có nên hiển thị danh mục hay không
  isFirstItem: boolean;
}

const ItemProduct = ({ item, showCategory, isFirstItem }: PropsItemProduct) => {
  return (
    <View style={StyleItemProduct.container}>
      <View style={StyleItemProduct.viewbody}>
        {showCategory && isFirstItem && (
          <View style={StyleItemProduct.viewcategories}>
            <Text style={StyleItemProduct.textnamecategories}>{item.category.name}</Text>
          </View>
        )}
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
      </View>
    </View>
  )
}

export default ItemProduct