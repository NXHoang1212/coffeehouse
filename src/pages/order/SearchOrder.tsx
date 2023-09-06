import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import StyleSearchOrder from '../../styles/order/StyleSearchOrder'
import { Icon } from '../../constant/Icon'
import { useGoBack } from '../../utils/GoBack'
import { FlashList } from '@huunguyen312/flash-list'
import { useSelector } from 'react-redux'
import SeacrchItem from '../../components/item/SearchItem'


const SearchOrder = () => {
  const goBack = useGoBack()
  const [search, setSearch] = useState<string>('')
  // Lọc danh sách sản phẩm trực tiếp từ danh sách gốc
  const products = useSelector((state: any) => state.product)
    .filter((item: any) => item.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <View style={StyleSearchOrder.container}>
      <View style={StyleSearchOrder.viewheader}>
        <View style={StyleSearchOrder.viewsearch}>
          <View style={StyleSearchOrder.viewiconsearch}>
            <Image source={Icon.SEARCH} style={StyleSearchOrder.iconsearch} />
          </View>
          <TextInput
            style={StyleSearchOrder.inputsearch}
            placeholder="Tìm kiếm"
            placeholderTextColor="#858080"
            autoFocus={true}
            value={search}
            onChangeText={setSearch}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => { setSearch('') }}>
              <Image source={Icon.CANCEL} style={StyleSearchOrder.iconcancel} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity onPress={goBack}>
          <Text style={StyleSearchOrder.textcancel}>Hủy</Text>
        </TouchableOpacity>
      </View>
      <View style={StyleSearchOrder.line} />
      <View style={StyleSearchOrder.viewitem}>
        {search.length > 0 ? (
          <FlashList
            data={products}
            keyExtractor={(item: any) => item._id}
            renderItem={({ item }: any) => <SeacrchItem item={item} />}
            estimatedItemSize={150}
            showsVerticalScrollIndicator={false}
          />
        ) : null}
      </View>
    </View >
  )
}

export default SearchOrder