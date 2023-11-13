import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import StyleItemWebView from '../../styles/item/StyleItemWebView';
import {Icon} from '../../constant/Icon';
import {TrunacteString} from '../../utils/TrunacteString';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  EnumStackNaviagte,
  ParamsStack,
} from '../../navigation/home/StackHomeNavigate';
import {StackHomeNavigateNameEnum} from '../../data/types/TypeStack';

interface ItemWebViewProps {
  item: {
    id: string;
    name: string;
    image: ImageSourcePropType;
    time: string;
    url: string;
  };
}

const ItemWebView = ({item}: ItemWebViewProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamsStack>>();

  const openWebView = () => {
    navigation.navigate(StackHomeNavigateNameEnum.StackHomeUrl as any, {
      screen: EnumStackNaviagte.WebView,
      params: {
        name: item.name,
        url: item.url,
      },
    });
  };

  return (
    <TouchableOpacity onPress={openWebView}>
      <View style={StyleItemWebView.container}>
        <View style={StyleItemWebView.viewimg}>
          <Image source={item.image} style={StyleItemWebView.img} />
        </View>
        <View style={StyleItemWebView.Viewtitle}>
          <Text style={StyleItemWebView.title}>
            {TrunacteString(item.name, 39)}
          </Text>
          <View style={StyleItemWebView.viewtime}>
            <Image source={Icon.TIME} style={StyleItemWebView.icontime} />
            <Text style={StyleItemWebView.time}>{item.time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemWebView;
