import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { Logo } from '../../constant/Icon'
import { WIDTH, HEIGHT } from '../../constant/Responsive'
import { COLOR } from '../../constant/Color'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store/Store'
import { setProducts } from '../../redux/slices/ProductSlices'
import { useGetProductsQuery } from '../../service/api/IndexProducts'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack'
import { GetProducts } from '../../service/api/IndexProducts'

const SlashWellcome = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const getProducts = async () => {
    const data = await GetProducts();
    dispatch(setProducts(data))
  }
  useEffect(() => {
    getProducts();
    setTimeout(() => {
      navigation.navigate('TabHomeNavigate')
    }, 1500);
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" />
      <Image source={Logo.SLASHLOGO} style={{ width: WIDTH(50), height: HEIGHT(25) }} />
    </View>
  )
}

export default SlashWellcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  }
})