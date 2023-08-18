import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import StyleOrder from '../../styles/order/StyleOrder'

const CartOrder = () => {
  return (
    <View style={StyleOrder.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={StyleOrder.viewheader}>

      </View>
    </View>
  )
}

export default CartOrder