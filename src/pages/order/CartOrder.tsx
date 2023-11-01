import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView, RefreshControl, Animated } from 'react-native'
import React, { useState, useRef, useEffect, useContext, useCallback, memo } from 'react'
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
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/Store'
import { FlashList } from '@huunguyen312/flash-list'
import { DetailProduct } from '../../data/types/Product.entity'
import { useGetFavouritesQuery } from '../../service/api/IndexFavourites'

const CartOrder = () => {
  ThemLightStatusBar('dark-content', '#fff')
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const [show, setShow] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<String>('');
  let currentCategory = '';
  let showProducts = useSelector((state: RootState) => state.product)
  let isLoggedIn = useSelector((state: RootState) => state.IsLoggedIn.isLoggedIn);
  let id = useSelector((state: RootState) => state.user.user._id);
  const { data, refetch } = useGetFavouritesQuery(id)
  const favourites: any = data?.data.length
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

  const renderItem = useCallback((product: DetailProduct) => {
    const isFirstItem = currentCategory !== product.category.name;
    currentCategory = product.category.name;
    return (<ItemProduct item={product} isFirstItem={isFirstItem} showCategory={isFirstItem} />)
  }, []);

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
            <TouchableOpacity style={StyleOrder.viewfavourites} onPress={() => navigation.navigate(isLoggedIn ? StackHomeNavigateNameEnum.StackHomeUrl : 'AuthStackUser' as any, { screen: 'Favourites', })}>
              <Image source={TabCoffee.HEART} style={StyleOrder.iconheart} />
              {favourites > 0 && <View style={StyleOrder.viewcount}>
                <Text style={StyleOrder.textcount}>{favourites}</Text>
              </View>}
            </TouchableOpacity>
          </View>
        </View>
        <View style={StyleOrder.line} />
        <Animated.ScrollView ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
        >
          <View style={StyleOrder.viewbody}>
            <CategoryItem setSelectedCategory={handleCategorySelect} />
            <View style={StyleOrder.viewbottom}>
              <FlashList
                data={showProducts}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item, index) => item._id + index}
                showsVerticalScrollIndicator={false}
                estimatedItemSize={200}
                extraData={showProducts}
                removeClippedSubviews={true}
                viewabilityConfig={{
                  waitForInteraction: true,
                  itemVisiblePercentThreshold: 50,
                  minimumViewTime: 1000,
                }}
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

export default memo(CartOrder)