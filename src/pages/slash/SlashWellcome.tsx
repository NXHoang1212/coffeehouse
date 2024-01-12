import { View, Text, Image, StyleSheet, StatusBar, AppState, AppStateStatic } from 'react-native';
import React, { useEffect, useState } from 'react';
import { WIDTH, HEIGHT } from '../../constant/Responsive';
import { COLOR } from '../../constant/Color';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/Store';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { fetchProducts } from '../../redux/slices/ProductSlices';
import IconSlash from '../../assets/Svg/IconSlash';
import NetInfo from "@react-native-community/netinfo";
import CheckCommunityNetInfor from '../../components/modal/CheckCommunityNetInfor';

const SlashWellcome = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const [isConnected, setIsConnected] = useState<boolean>(true);
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
