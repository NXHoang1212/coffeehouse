import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { Logo } from '../../constant/Icon';
import { WIDTH, HEIGHT } from '../../constant/Responsive';
import { COLOR } from '../../constant/Color';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/Store';
import { useGetProductsQuery } from '../../service/api/IndexProducts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { GetProducts } from '../../service/api/IndexProducts';
import { fetchProducts } from '../../redux/slices/ProductSlices';
import IconSlash from '../../assets/Svg/IconSlash';

const SlashWellcome = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor('transparent');
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchProducts());
        navigation.navigate('TabHomeNavigate');
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <IconSlash style={{ width: WIDTH(50), height: HEIGHT(25) }} />
    </View>
  );
};

export default SlashWellcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
