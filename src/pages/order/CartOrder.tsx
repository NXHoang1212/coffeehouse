import { View, Text, StatusBar, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useRef, useMemo, useCallback } from 'react'
import StyleOrder from '../../styles/order/StyleOrder'
import { Icon, category, TabCoffee } from '../../constant/Icon'
import CategoryItem from '../../components/item/CategoryItem'
import { DataNameCategory } from '../../data/listitem/DataNameCategory'
import { FlashList } from '@huunguyen312/flash-list'
import ItemProduct from '../../components/item/ItemProduct'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackHomeNavigateNameEnum, StackHomeNavigateTypeParam } from '../../data/types/navigation/TypeStack'
import SheetCatagoriesBottom from '../../components/modal/SheetCatagoriesBottom'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as Animatable from 'react-native-animatable';
import { ThemLightStatusBar } from '../../constant/ThemLight'

const CartOrder = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const handleFavourites = () => {
    //@ts-ignore
    navigation.navigate(StackHomeNavigateNameEnum.StackHomeUrl, { screen: 'Favourites', })
  }
  const bottomsheetRef = useRef<BottomSheetModal>(null)
  const snapPoints = useMemo(() => ['60%', '100%'], [])
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, [])
  const handlePresentModalPress = useCallback(() => {
    bottomsheetRef.current?.present();
  }, [])
  const handlecancel = useCallback(() => {
    bottomsheetRef.current?.close();
  }, [])
  const handleSearch = () => {
    // @ts-ignore
    animateAndNavigate();
  }
  const animateAndNavigate = () => {
    // Thực hiện hiệu ứng của Animatable.View
    // @ts-ignore
    animationRef.current?.animate('bounceInRight', 1000)
    // Sau 1s thực hiện chuyển màn hình
    setTimeout(() => {
      //@ts-ignore
      navigation.navigate('StackHomeNavigate', { screen: 'SearchOrder', })
    }, 1000)
  }
  const animationRef = useRef<any>(null);
  ThemLightStatusBar('dark-content', '#fff');
  return (
    <TouchableWithoutFeedback onPress={handlecancel}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <View style={StyleOrder.container}>
            <Animatable.View style={StyleOrder.viewheader} animation="fadeInDownBig" duration={1000}>
              <TouchableOpacity style={StyleOrder.viewhandlemenu} onPress={handlePresentModalPress}>
                <View style={StyleOrder.viewmenu}>
                  <Image source={category.MENU} style={StyleOrder.iconmenu} />
                </View>
                <View style={StyleOrder.viewmenutitle}>
                  <Text style={StyleOrder.texttitle}>Danh Mục</Text>
                  <Image source={Icon.DOWN} style={StyleOrder.iconwdown} />
                </View>
              </TouchableOpacity>
              <View style={StyleOrder.viewsearch}>
                <TouchableOpacity onPress={handleSearch}>
                  <Image source={Icon.SEARCH} style={StyleOrder.iconsearch} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleFavourites}>
                  <Image source={TabCoffee.HEART} style={StyleOrder.iconheart} />
                </TouchableOpacity>
              </View>
            </Animatable.View>
            <View style={StyleOrder.line} />
            <View style={StyleOrder.viewbody}>
              <CategoryItem />
              <View style={StyleOrder.viewbottom}>
                <FlashList
                  data={DataNameCategory}
                  renderItem={({ item }) => <ItemProduct item={item} />}
                  keyExtractor={(item) => item.id}
                  estimatedItemSize={200}
                />
              </View>
              <BottomSheetModal
                ref={bottomsheetRef}
                containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                index={0} snapPoints={snapPoints} onChange={handleSheetChanges}>
                <SheetCatagoriesBottom />
              </BottomSheetModal>
            </View>
            <View >
            </View>
          </View>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </TouchableWithoutFeedback>
  )
}

CartOrder.navigationOptions = {
  statusBarStyle: 'dark-content', // hoặc 'light-content' tùy theo thiết kế của màn hình
};

export default CartOrder