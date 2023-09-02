import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import StyleOrder from '../../styles/order/StyleOrder'
import { Icon, category, TabCoffee } from '../../constant/Icon'
import CategoryItem from '../../components/item/CategoryItem'
import ItemProduct from '../../components/item/ItemProduct'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackHomeNavigateNameEnum, StackHomeNavigateTypeParam } from '../../data/types/navigation/TypeStack'
import * as Animatable from 'react-native-animatable';
import { ThemLightStatusBar } from '../../constant/ThemLight'
import BottomSheetMenu from '../../components/modal/BottomSheetMenu'
import { Provider } from 'react-native-paper'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useGetProductsQuery } from '../../service/api/IndexProducts'

const CartOrder = () => {
  const animationRef = useRef<any>(null);
  ThemLightStatusBar('dark-content', '#fff');
  const [show, setShow] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const { data } = useGetProductsQuery();
  const products = data?.data;
  let currentCategory = '';
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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider>
        <TouchableWithoutFeedback>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                <CategoryItem selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <View style={StyleOrder.viewbottom}>
                  {products?.map((item, index) => {
                    if (selectedCategory && item.category.name !== selectedCategory) {
                      return null; // Không hiển thị sản phẩm không thuộc danh mục đã chọn
                    }
                    const isFirstItem = index === 0 || item.category.name !== currentCategory;
                    currentCategory = item.category.name; // Cập nhật danh mục hiện tại
                    return (
                      <ItemProduct
                        key={index}
                        item={item}
                        showCategory={isFirstItem}
                        isFirstItem={isFirstItem}
                      />
                    );
                  })}
                </View>
                <BottomSheetMenu
                  show={show} enableBackDropDismiss
                  onDismiss={() => { setShow(false) }}></BottomSheetMenu>
              </View>
              <View >
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </Provider>
    </GestureHandlerRootView>
  )
}

export default CartOrder