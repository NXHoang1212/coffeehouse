import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView, RefreshControl, Animated } from 'react-native'
import React, { useState, useRef, useEffect, useCallback } from 'react'
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
import { useGetProductsQuery } from '../../service/api/IndexProducts'
import ActivityIndicator from '../../components/activity/ActivityIndicator'
import { useDispatch } from 'react-redux'
import { setProducts } from '../../redux/slices/ProductSlices'
import { useAuth } from '../../hooks/UseAuth'
import { FlashList } from '@huunguyen312/flash-list'

const CartOrder = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const { isLoggedIn } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const [show, setShow] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<String>('');
  let currentCategory = '';
  const { data, isLoading } = useGetProductsQuery();
  const showProducts = data?.data;
  const hasDispatched = useRef<boolean>(false);
  const dispatch = useDispatch();
  const handleSearch = useCallback(() => {
    if (!hasDispatched.current) {
      dispatch(setProducts(showProducts));
      hasDispatched.current = true;
    }
    //@ts-ignore
    navigation.navigate(isLoggedIn ? 'SearchOrder' : 'AuthStackUser');
  }, [dispatch, setProducts, showProducts, navigation, isLoggedIn]);
  const handleFavourites = useCallback(() => {
    //@ts-ignore
    navigation.navigate(isLoggedIn ? StackHomeNavigateNameEnum.StackHomeUrl : 'AuthStackUser', { screen: 'Favourites', });
  }, [navigation, isLoggedIn]);
  const handleCategorySelect = (categoryName: String) => {
    setSelectedCategory(categoryName);
    setShow(false);
    scrollToCategory(categoryName);
  }
  const scrollViewRef = useRef<ScrollView | null>(null);
  useScrollToTop(scrollViewRef);
  const itemHeight: any = 150;
  const scrollToCategory = (categoryName: String) => {
    if (scrollViewRef.current) {
      const index = showProducts?.findIndex(
        (item) => item.category.name === categoryName
      );
      if (index !== undefined && index !== -1) {
        const y = index * itemHeight;
        scrollViewRef.current.scrollTo({ y, animated: true });
      }
    }
  };
  const scrollY = useRef(new Animated.Value(0)).current;
  if (isLoading) {
    return (
      <View style={StyleOrder.container}>
        <ActivityIndicator />
      </View>
    )
  }
  return (
    <Provider>
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
              <TouchableOpacity onPress={handleSearch}>
                <Image source={Icon.SEARCH} style={StyleOrder.iconsearch} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleFavourites}>
                <Image source={TabCoffee.HEART} style={StyleOrder.iconheart} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={StyleOrder.line} />
          <Animated.ScrollView ref={scrollViewRef}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={() => { }}
              />}>
            <View style={StyleOrder.viewbody}>
              <CategoryItem setSelectedCategory={handleCategorySelect} />
              <View style={StyleOrder.viewbottom}>
                <FlashList
                  data={showProducts}
                  renderItem={({ item }: any) => {
                    const isFirstItem = currentCategory !== item.category.name;
                    currentCategory = item.category.name;
                    return (<ItemProduct item={item} showCategory={isFirstItem} isFirstItem={isFirstItem} />)
                  }}
                  keyExtractor={(item: any) => item._id}
                  showsVerticalScrollIndicator={false}
                  estimatedItemSize={200}
                />
              </View>
              <BottomSheetMenu
                show={show} enableBackDropDismiss
                onDismiss={() => { setShow(false) }}
                setSelectedCategory={handleCategorySelect}
              ></BottomSheetMenu>
            </View>
          </Animated.ScrollView>
          <View >
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  )
}

export default CartOrder