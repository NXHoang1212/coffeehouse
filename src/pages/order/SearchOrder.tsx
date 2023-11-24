import { Image, Keyboard, Text, TextInput, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import StyleSearchOrder from '../../styles/order/StyleSearchOrder';
import { Icon } from '../../constant/Icon';
import { useGoBack } from '../../utils/GoBack';
import { FlashList } from '@huunguyen312/flash-list';
import { useSelector } from 'react-redux';
import SeacrchItem from '../../components/item/SearchItem';
import { RootState } from '../../redux/store/Store';
import { ThemLightStatusBar } from '../../constant/ThemLight';
import { useNavigation } from '@react-navigation/native';

const SearchOrder = () => {
<<<<<<< HEAD
  const goBack = useGoBack()
  ThemLightStatusBar('dark-content', '#fff')
  const [search, setSearch] = useState<string>('')
<<<<<<< HEAD
  const products = useSelector((state: RootState) => state.product.product)
    .filter((item: any) => item.name.toLowerCase().includes(search.toLowerCase()))
=======
  const products = useSelector((state: RootState) => state.product.product).filter((item: any) => item.name.toLowerCase().includes(search.toLowerCase()))
>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7

=======
  const goBack = useGoBack();
  const navigation = useNavigation();
  ThemLightStatusBar('dark-content', '#fff');
  const [search, setSearch] = useState<string>('');
  let products = useSelector((state: RootState) => state.product.data).filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
>>>>>>> main

  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
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
              <TouchableOpacity
                onPress={() => {
                  setSearch('');
                }}>
                <Image
                  source={Icon.CANCEL}
                  style={StyleSearchOrder.iconcancel}
                />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={StyleSearchOrder.textcancel}>Hủy</Text>
          </TouchableOpacity>
        </View>
        <View style={StyleSearchOrder.line} />
        <View style={StyleSearchOrder.viewitem}>
          {search.length > 0 ? (
            <FlashList
              data={products}
              renderItem={({ item }) => <SeacrchItem item={item} />}
              keyExtractor={item => item._id}
              estimatedItemSize={200}
              showsVerticalScrollIndicator={false}
              extraData={search}
              removeClippedSubviews={true}
              viewabilityConfig={{
                waitForInteraction: true,
                itemVisiblePercentThreshold: 50,
                minimumViewTime: 1000,
              }}
            />
          ) : null}
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default SearchOrder;
