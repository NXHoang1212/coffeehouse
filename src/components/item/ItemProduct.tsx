import { View, Text } from 'react-native'
import React from 'react'
import StyleItemProduct from '../../styles/item/StyleItemProduct'

interface ItemProductProps {
    item: {
        id: string;
        namecategory: string;
    }
}   

const ItemProduct = ({item}: ItemProductProps) => {
  return (
    <View style={StyleItemProduct.container}>
       <View style={StyleItemProduct.viewitemproduct}>
           <Text style={StyleItemProduct.textnamecategories}>{item.namecategory}</Text>
       </View>
    </View>
  )
}

export default ItemProduct