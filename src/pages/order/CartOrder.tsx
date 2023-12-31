import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, TouchableWithoutFeedback, Animated, ScrollView, RefreshControl } from 'react-native';
import StyleOrder from '../../styles/order/StyleOrder';
import { Icon, category, TabCoffee } from '../../constant/Icon';
import CategoryItem from '../../components/item/CategoryItem';
import ItemProduct from '../../components/item/ItemProduct';
import { useScrollToTop } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateNameEnum, StackHomeNavigateTypeParam, } from '../../data/types/TypeStack';
import BottomSheetMenu from '../../components/modal/BottomSheetMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';
import { FlashList } from '@huunguyen312/flash-list';
import { DetailProduct } from '../../data/types/Product.entity';
import { useGetFavouritesQuery } from '../../service/api/IndexFavourites';
import FastImage from 'react-native-fast-image';
import IconDownMenu from '../../assets/Svg/IconDownMenu';

const CartOrder = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();

  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor('#fff');

  const [show, setShow] = useState<boolean>(false);

  const [selectedCategory, setSelectedCategory] = useState<String>('');

  let currentCategory = '';
<<<<<<< HEAD
<<<<<<< HEAD
  const { data, isLoading } = useGetProductsQuery();
  const showProducts = data?.data;
  const hasDispatched = useRef<boolean>(false);
  const dispatch = useDispatch();
  const handleSearch = useCallback(() => {
    if (!hasDispatched.current) {
      dispatch(setProducts(showProducts));
      hasDispatched.current = true;
    }
<<<<<<< HEAD
    //@ts-ignore
    navigation.navigate(isLoggedIn ? 'SearchOrder' : 'AuthStackUser');
  }, [dispatch, setProducts, showProducts, navigation, isLoggedIn]);
  const handleFavourites = useCallback(() => {
    //@ts-ignore
    navigation.navigate(isLoggedIn ? StackHomeNavigateNameEnum.StackHomeUrl : 'AuthStackUser', { screen: 'Favourites', });
  }, [navigation, isLoggedIn]);
=======
    navigation.navigate(isLoggedIn ? 'SearchOrder' : 'AuthStackUser' as any);
  }, [dispatch, setProducts, showProducts, navigation, isLoggedIn]);
>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
=======
=======

>>>>>>> main
  let showProducts = useSelector((state: RootState) => state.product);

  let isLoggedIn = useSelector((state: RootState) => state.root.isLoggedIn.isLoggedIn);

  let id = useSelector((state: RootState) => state.root.user._id);

  const { data } = useGetFavouritesQuery(id);

  const favourites = data?.data?.length || 0;

>>>>>>> main
  const handleCategorySelect = (categoryName: String) => {
    setSelectedCategory(categoryName);
    setShow(false);
    scrollToCategory(categoryName);
  };

  const scrollViewRef = useRef<ScrollView | null>(null);

  useScrollToTop(scrollViewRef);


  const scrollToCategory = (categoryName: String) => {
    const itemHeight = 150;
    const index = showProducts.data.findIndex(item => item.category.name === categoryName,);
    const y = index * itemHeight;
    scrollViewRef.current?.scrollTo({ x: 0, y: y, animated: true });
  };

  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = useCallback((product: DetailProduct) => {
    const isFirstItem = currentCategory !== product.category.name;
    currentCategory = product.category.name;
    return (<ItemProduct item={product} isFirstItem={isFirstItem} showCategory={isFirstItem} />);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#fff');
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <TouchableWithoutFeedback>
      <View style={StyleOrder.container}>
        <View style={StyleOrder.viewheader}>
          <TouchableOpacity style={StyleOrder.viewhandlemenu} onPress={() => setShow(true)}>
            <View style={StyleOrder.viewmenu}>
              <FastImage source={category.MENU} style={StyleOrder.iconmenu} />
            </View>
            <View style={StyleOrder.viewmenutitle}>
              <Text style={StyleOrder.texttitle}>Danh Mục</Text>
              <IconDownMenu style={StyleOrder.iconwdown} />
            </View>
          </TouchableOpacity>
          <View style={StyleOrder.viewsearch}>
            <TouchableOpacity onPress={() => navigation.navigate(isLoggedIn ? 'SearchOrder' : ('AuthStackUser' as any))}>
              <Image source={Icon.SEARCH} style={StyleOrder.iconsearch} />
            </TouchableOpacity>
            <TouchableOpacity style={StyleOrder.viewfavourites} onPress={() => navigation.navigate(isLoggedIn ? StackHomeNavigateNameEnum.StackHomeUrl : ('AuthStackUser' as any), { screen: 'Favourites' })}>
              <FastImage source={TabCoffee.HEART} style={StyleOrder.iconheart} />
              {favourites > 0 && (
                <View style={StyleOrder.viewcount}>
                  <Text style={StyleOrder.textcount}>{favourites}</Text>
                </View>
              )}
            </TouchableOpacity>
<<<<<<< HEAD
            <View style={StyleOrder.viewsearch}>
              <TouchableOpacity onPress={handleSearch}>
                <Image source={Icon.SEARCH} style={StyleOrder.iconsearch} />
              </TouchableOpacity>
<<<<<<< HEAD
              <TouchableOpacity onPress={handleFavourites}>
=======
              <TouchableOpacity onPress={() => navigation.navigate(isLoggedIn ? StackHomeNavigateNameEnum.StackHomeUrl : 'AuthStackUser' as any, { screen: 'Favourites', })}>
>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
                <Image source={TabCoffee.HEART} style={StyleOrder.iconheart} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={StyleOrder.line} />
          <Animated.ScrollView ref={scrollViewRef}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
<<<<<<< HEAD
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={() => { }}
              />}>
=======
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
            refreshControl={<RefreshControl refreshing={false} onRefresh={() => { }} />}>
>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
            <View style={StyleOrder.viewbody}>
              <CategoryItem setSelectedCategory={handleCategorySelect} />
              <View style={StyleOrder.viewbottom}>
                <FlashList
                  data={showProducts}
<<<<<<< HEAD
                  renderItem={({ item }: any) => {
=======
                  renderItem={({ item }) => {
>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
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
=======
>>>>>>> main
          </View>
        </View>
        <View style={StyleOrder.line} />
        <Animated.ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true },
          )}>
          <View style={StyleOrder.viewbody}>
            <CategoryItem setSelectedCategory={handleCategorySelect} />
            <View style={StyleOrder.viewbottom}>
              <FlashList
                data={showProducts.data}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item, index) => item._id + index}
                showsVerticalScrollIndicator={false}
                estimatedItemSize={200}
                extraData={showProducts.data}
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
        <View />
        <BottomSheetMenu
          show={show}
          enableBackDropDismiss
          onDismiss={() => { setShow(false); }}
          setSelectedCategory={handleCategorySelect}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(CartOrder);
