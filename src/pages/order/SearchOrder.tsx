import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import StyleSearchOrder from '../../styles/order/StyleSearchOrder'
import { Icon } from '../../constant/Icon'
import { useGoBack } from '../../utils/GoBack'

const SearchOrder = () => {
  const goBack = useGoBack()
  const [search, setSearch] = useState<string>('')
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
            onChangeText={setSearch}
            value={search}
            autoFocus={true}
          />
          <TouchableOpacity onPress={() => { setSearch('') }}>
            <Image source={Icon.CANCEL} style={StyleSearchOrder.iconcancel} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={goBack}>
          <Text style={StyleSearchOrder.textcancel}>Hủy</Text>
        </TouchableOpacity>
      </View>
      <View style={StyleSearchOrder.line} />
    </View >
  )
}

export default SearchOrder