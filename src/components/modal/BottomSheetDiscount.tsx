import { View, Text, Modal, Animated, Dimensions, Image, ScrollView, Pressable, ImageSourcePropType, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef, memo, useContext } from 'react';
import { Icon } from '../../constant/Icon';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Portal } from 'react-native-paper';
import StyleBottomSheetDiscount from '../../styles/modal/StyleBottomSheetDiscount';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';
import { useGetCartQuery } from '../../service/api/IndexCart';
import { CartOrder } from '../../data/types/CartOrder.entity';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/Store';
import { setPromodiscount } from '../../redux/slices/ApplyPromodiscount';

interface Props {
  show: boolean;
  onDismiss: () => void;
  enableBackDropDismiss?: boolean;
  Messenger: (message: string, type: string) => void;
}

const BottomSheetDiscount: React.JSXElementConstructor<Props> = ({ show, onDismiss, enableBackDropDismiss = true, Messenger, }) => {
  const bottomsheetHeight = Dimensions.get('window').height * 0.5;
  const dispatch = useDispatch<AppDispatch>();
  const bottomsheet = useRef(new Animated.Value(-bottomsheetHeight)).current;
  const [open, setopen] = useState<boolean>(show);
  const discount = useSelector((state: RootState) => state.discount);
  const id = useSelector((state: RootState) => state.root.user._id);
  const { data } = useGetCartQuery(id);
  const ProductId = data?.data ? data.data.filter(item => item !== null).map(item => ({
    ...item,
    ProductId: item.ProductId || [],
    _id: item ? item._id || '' : '',
  })) : [];
  const Quantity = ProductId?.reduce((total: number, item: CartOrder) => total + item.ProductId.length, 0);
  const total = ProductId?.reduce((total: number, item: CartOrder) => total + item.ProductId.reduce((total: number, item) => total + item.PriceProduct * item.QuantityProduct, 0), 0);
  let nameQR = String.fromCharCode(...discount.nameQR.data);
  const onGestureEvent = (event: any) => {
    if (event.nativeEvent.translationY > 0) {
      bottomsheet.setValue(-event.nativeEvent.translationY);
    }
  };
  const onGestureEnd = (event: any) => {
    if (event.nativeEvent.translationY > bottomsheetHeight / 2) {
      onDismiss();
    } else {
      bottomsheet.setValue(0);
    }
  };
  useEffect(() => {
    if (show) {
      setopen(show);
      Animated.timing(bottomsheet, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottomsheet, {
        toValue: -bottomsheetHeight,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setopen(false);
      });
    }
  }, [show]);
  const onCoppy = () => {
    Clipboard.setString(nameQR);
    Messenger('Đã sao chép mã giảm giá', 'success');
  };

  const ApplyDiscount = () => {
    if (ProductId?.length === 0) {
      Messenger('Bạn chưa có sản phẩm trong giỏ hàng', 'error');
    } else if (discount.description) {
      if (discount.description.includes('Miễn phí vận chuyển')) {
        const discountAmount: number = 18;
        dispatch(setPromodiscount(discountAmount));
        Messenger('Áp dụng mã giảm giá thành công', 'success');
      } else if (
        discount.description.includes('Giảm 40% đơn từ 4 ly nước kèm FREESHIP')
      ) {
        if (Quantity >= 4) {
          const discountAmount: number = 77.6;
          dispatch(setPromodiscount(discountAmount));
          Messenger('Áp dụng mã giảm giá thành công', 'success');
        } else {
          Messenger('Bạn còn thiếu số lượng vui lòng đặt thêm', 'error');
        }
      } else if (
        discount.description.includes('Giảm 50% đơn từ 10 ly nước kèm FREESHIP')
      ) {
        if (Quantity >= 10) {
          const discountAmount: number = 155;
          dispatch(setPromodiscount(discountAmount));
          Messenger('Áp dụng mã giảm giá thành công', 'success');
        } else {
          Messenger('Bạn còn thiếu số lượng vui lòng đặt thêm', 'error');
        }
      } else if (discount.description.includes('Giảm 30K cho đơn từ 99K')) {
        if (total >= 99) {
          const discountAmount: number = 30;
          dispatch(setPromodiscount(discountAmount));
          Messenger('Áp dụng mã giảm giá thành công', 'success');
        } else {
          Messenger(
            'Đơn hàng của bạn chưa đủ giá trị vui lòng mua thêm',
            'error',
          );
        }
      } else if (discount.description.includes('Giảm 20K cho đơn từ 50K')) {
        if (total >= 50) {
          const discountAmount: number = 20;
          dispatch(setPromodiscount(discountAmount));
          Messenger('Áp dụng mã giảm giá thành công', 'success');
        } else {
          Messenger(
            'Đơn hàng của bạn chưa đủ giá trị vui lòng mua thêm',
            'error',
          );
        }
      } else if (
        discount.description.includes('Giảm 10% cho đơn hàng từ 2 món')
      ) {
        if (Quantity >= 2) {
          const discountAmount: number = 0.1;
          dispatch(setPromodiscount(discountAmount));
          Messenger('Áp dụng mã giảm giá thành công', 'success');
        } else {
          Messenger(
            'Bạn còn thiếu một món vui lòng mua thêm để được giảm',
            'error',
          );
        }
      }
    } else {
      Messenger('Mã giảm giá không sử dụng được', 'error');
    }
  };
  if (!open) {
    return null;
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      onRequestClose={onDismiss}
      hardwareAccelerated={true}
      statusBarTranslucent={true}>
      <Pressable
        onPress={enableBackDropDismiss ? onDismiss : undefined}
        style={StyleBottomSheetDiscount.backdrop}
      />
      <Animated.View
        style={[StyleBottomSheetDiscount.container, { bottom: bottomsheet }]}>
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onEnded={onGestureEnd}>
          <View style={StyleBottomSheetDiscount.header}>
            <TouchableOpacity onPress={onDismiss}>
              <Image
                source={Icon.CANCEL}
                style={StyleBottomSheetDiscount.iconcancel}
              />
            </TouchableOpacity>
          </View>
        </PanGestureHandler>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={StyleBottomSheetDiscount.body}>
            <View style={{ left: 2 }}>
              <View style={StyleBottomSheetDiscount.viewtext}>
                <Text style={StyleBottomSheetDiscount.textTitle}>
                  {discount.Tilte}
                </Text>
                <Text style={StyleBottomSheetDiscount.textName}>
                  {discount.name}
                </Text>
              </View>
              <View style={StyleBottomSheetDiscount.viewqrcode}>
                <QRCode value={nameQR} size={140} />
              </View>
              <View style={StyleBottomSheetDiscount.viewcoppy}>
                <Text style={StyleBottomSheetDiscount.textqr}>{nameQR}</Text>
                <Text
                  onPress={onCoppy}
                  style={StyleBottomSheetDiscount.textcoppy}>
                  Sao chép
                </Text>
              </View>
              <TouchableOpacity
                style={StyleBottomSheetDiscount.viewusedto}
                onPress={ApplyDiscount}>
                <Text style={StyleBottomSheetDiscount.textusedto}>
                  Sử dụng ngay
                </Text>
              </TouchableOpacity>
              <View style={StyleBottomSheetDiscount.line} />
              <View style={StyleBottomSheetDiscount.viewdateend}>
                <Text style={StyleBottomSheetDiscount.textend}>
                  Ngày hết hạn:
                </Text>
                <Text style={StyleBottomSheetDiscount.textqr}>
                  {discount.end}
                </Text>
              </View>
              <View style={StyleBottomSheetDiscount.line} />
              <Text style={StyleBottomSheetDiscount.textdescription}>
                {discount.description}
              </Text>
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </Modal>
  );
};

export default memo(BottomSheetDiscount);
