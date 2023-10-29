import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styleFavourite from '../../styles/order/StyleFavourite'
import { Icon } from '../../constant/Icon'
import { useGoBack } from '../../utils/GoBack'
import { ThemLightStatusBar } from '../../constant/ThemLight'
import { useGetFavouritesQuery } from '../../service/api/IndexFavourites'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/Store'
import ItemProduct from '../../components/item/ItemProduct'
import { FlashList } from '@huunguyen312/flash-list'

const Favourites = () => {
  const goBack = useGoBack()
  ThemLightStatusBar('dark-content', '#fff')
  const id = useSelector((state: RootState) => state.user.user._id)
  const { data } = useGetFavouritesQuery(id)
  const favourites = data?.data.filter((item: any) => item.ProductId !== null)
  return (
    <View style={styleFavourite.container}>
      <View style={styleFavourite.viewheader}>
        <TouchableOpacity onPress={goBack}>
          <Image source={Icon.BACK} style={styleFavourite.iconback} />
        </TouchableOpacity>
        <Text style={styleFavourite.textheader}>Sản phẩm Yêu Thích</Text>
      </View>
      <View style={styleFavourite.line} />
      <View style={styleFavourite.viewbody}>
        <FlashList
          data={favourites}
          renderItem={({ item }) => <ItemProduct item={item.ProductId} showCategory={false} isFirstItem={false} />}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={200}
        />
      </View>
    </View>
  )
}

export default Favourites