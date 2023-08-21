import { View, Text, StatusBar, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useRef, useMemo, useCallback } from 'react'
import StyleOrder from '../../styles/order/StyleOrder'
import { Icon, category, TabCoffee } from '../../constant/Icon'
import CategoryItem from '../../components/item/CategoryItem'
import { DataNameCategory } from '../../data/listitem/categories/DataNameCategory'
import { FlashList } from '@huunguyen312/flash-list'
import ItemProduct from '../../components/item/ItemProduct'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackHomeNavigateNameEnum, StackHomeNavigateTypeParam } from '../../data/types/navigation/TypeStack'
import SheetCatagoriesBottom from '../../components/modal/SheetCatagoriesBottom'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as Animatable from 'react-native-animatable';
import { ThemLightStatusBar } from '../../constant/ThemLight'
import BottomSheetMenu from '../../components/modal/BottomSheetMenu'
import { Provider } from 'react-native-paper'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


const CartOrder = () => {
  const [show, setShow] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const handleFavourites = () => {
    //@ts-ignore
    navigation.navigate(StackHomeNavigateNameEnum.StackHomeUrl, { screen: 'Favourites', })
  }
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider>
        <TouchableWithoutFeedback>
          <View style={StyleOrder.container}>
            <Animatable.View style={StyleOrder.viewheader} animation="fadeInDownBig" duration={1000}>
              <TouchableOpacity style={StyleOrder.viewhandlemenu} onPress={() => setShow(true)}>
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
              <BottomSheetMenu
                show={show} enableBackDropDismiss
                onDismiss={() => { setShow(false) }}></BottomSheetMenu>
            </View>
            <View >
            </View>
          </View>

        </TouchableWithoutFeedback>
      </Provider>
    </GestureHandlerRootView>
  )
}

export default CartOrder