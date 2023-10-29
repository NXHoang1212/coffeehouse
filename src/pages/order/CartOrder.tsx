import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView, RefreshControl, Animated } from 'react-native'
import React, { useState, useRef, useEffect, useContext } from 'react'
import StyleOrder from '../../styles/order/StyleOrder'
import { Icon, category, TabCoffee } from '../../constant/Icon'
import CategoryItem from '../../components/item/CategoryItem'
import ItemProduct from '../../components/item/ItemProduct'
import { useScrollToTop } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackHomeNavigateNameEnum, StackHomeNavigateTypeParam } from '../../data/types/TypeStack'
import { ThemLightStatusBar } from '../../constant/ThemLight'
import BottomSheetMenu from '../../components/modal/BottomSheetMenu'
import { Provider } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store/Store'
import { useAuth } from '../../hooks/UseAuth'
import { FlashList } from '@huunguyen312/flash-list'
import { useIsFocused } from '@react-navigation/native'
import { setProducts } from '../../redux/slices/ProductSlices'
import { useGetProductsQuery } from '../../service/api/IndexProducts'
import { ProductContext } from '../../service/provider/ProductContext'

const CartOrder = () => {
  ThemLightStatusBar('dark-content', '#fff')
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const [show, setShow] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<String>('');
  let currentCategory = '';
  const showProducts = useSelector((state: RootState) => state.product)
  const handleCategorySelect = (categoryName: String) => {
    setSelectedCategory(categoryName);
    setShow(false);
    scrollToCategory(categoryName);
  }
  const scrollViewRef = useRef<ScrollView | null>(null);
  useScrollToTop(scrollViewRef);
  const itemHeight = 150;
  const scrollToCategory = (categoryName: String) => {
    const index = showProducts.findIndex(item => item.category.name === categoryName);
    const y = index * itemHeight;
    scrollViewRef.current?.scrollTo({ x: 0, y: y, animated: true });
  };
  const scrollY = useRef(new Animated.Value(0)).current;


  return (
    <TouchableWithoutFeedback>
      <View style={StyleOrder.container}>
        <View style={StyleOrder.viewheader}>
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
            <TouchableOpacity onPress={() => navigation.navigate(isLoggedIn ? 'SearchOrder' : 'AuthStackUser' as any)}>
              <Image source={Icon.SEARCH} style={StyleOrder.iconsearch} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(isLoggedIn ? StackHomeNavigateNameEnum.StackHomeUrl : 'AuthStackUser' as any, { screen: 'Favourites', })}>
              <Image source={TabCoffee.HEART} style={StyleOrder.iconheart} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={StyleOrder.line} />
        <Animated.ScrollView ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
          refreshControl={<RefreshControl refreshing={false} onRefresh={() => { }} />}>
          <View style={StyleOrder.viewbody}>
            <CategoryItem setSelectedCategory={handleCategorySelect} />
            <View style={StyleOrder.viewbottom}>
              <FlashList
                data={showProducts}
                renderItem={({ item }) => {
                  const isFirstItem = currentCategory !== item.category.name;
                  currentCategory = item.category.name;
                  return (<ItemProduct item={item} showCategory={isFirstItem} isFirstItem={isFirstItem} />)
                }}
                keyExtractor={(item: any) => item._id}
                showsVerticalScrollIndicator={false}
                estimatedItemSize={100}
                extraData={showProducts}
                removeClippedSubviews={true}
              />
            </View>
          </View>
        </Animated.ScrollView>
        <View >
        </View>
        <BottomSheetMenu
          show={show} enableBackDropDismiss
          onDismiss={() => { setShow(false) }}
          setSelectedCategory={handleCategorySelect}
        ></BottomSheetMenu>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CartOrder