import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useRef, useCallback, useMemo} from 'react';
import {Discount} from '../../data/types/Discount.entity';
import StyleItemDiscount from '../../styles/item/StyleItemDisocunt';
import {Icon} from '../../constant/Icon';
import FastImage from 'react-native-fast-image';
import BottomSheetDiscount from '../modal/BottomSheetDiscount';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store/Store';
import {setDiscount} from '../../redux/slices/DiscountSlice';
import {Messenger} from '../../utils/ShowMessage';

interface PropsItemDisount {
  item: Discount;
}

const ItemDiscount: ({item}: PropsItemDisount) => JSX.Element = ({item}) => {
  const [show, setshow] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <TouchableOpacity
      style={StyleItemDiscount.container}
      onPress={() => {
        dispatch(setDiscount(item)), setshow(true);
      }}>
      <View>
        <FastImage
          source={Icon.BACKGROUNDPROMO}
          style={StyleItemDiscount.imagebackground}
        />
      </View>
      <View style={StyleItemDiscount.transparentItem}>
        <View style={StyleItemDiscount.viewimage}>
          <FastImage
            source={{
              uri: item.image as string,
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.immutable,
            }}
            resizeMode={FastImage.resizeMode.center}
            style={StyleItemDiscount.image}
          />
        </View>
        <View style={StyleItemDiscount.viewtext}>
          <Text style={StyleItemDiscount.textTitle}>{item.name}</Text>
          <Text style={StyleItemDiscount.textTime}>{item.end}</Text>
        </View>
      </View>
      <BottomSheetDiscount
        show={show}
        onDismiss={() => setshow(false)}
        Messenger={Messenger}
      />
    </TouchableOpacity>
  );
};

export default ItemDiscount;
