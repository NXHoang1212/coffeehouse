import {
  View,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Dimensions,
  TextInput,
  StatusBar,
  Modal,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Icon} from '../../constant/Icon';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {DetailProduct} from '../../data/types/Product.entity';
import StyleBottomSheetDetailOrder from '../../styles/order/StyleBottomSheetDetailOrder';
import {FormatPrice} from '../../utils/FormatPrice';
import {CheckBox} from 'react-native-elements';
import {handleMinus, handlePlus} from '../../utils/Total';
import {useSelector} from 'react-redux';
import {useCreateEmptyCartMutation} from '../../service/api/IndexCart';
import {Messenger} from '../../utils/ShowMessage';
import ActivityIndicator from '../../components/activity/ActivityIndicator';
import {RootState} from '../../redux/store/Store';
import {cartStatus} from '../../data/types/Enum.entity';
import {setShowLoading} from '../../redux/slices/IsLoadingSlice';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store/Store';

interface Props {
  show: boolean;
  onDismiss: () => void;
  enableBackDropDismiss?: boolean;
  item: DetailProduct;
}

const BottomSheetDetailOrder: React.FC<Props> = ({
  show,
  onDismiss,
  enableBackDropDismiss = true,
  item,
}) => {
  const bottomsheetHeight = Dimensions.get('window').height * 0.5;
  const bottomsheet = useRef(new Animated.Value(-bottomsheetHeight)).current;
  const id = useSelector((state: RootState) => state.user.user._id);
  const loading = useSelector(
    (state: RootState) => state.isLoading.isShowLoading,
  );
  const dispatch: AppDispatch = useDispatch();
  const [CreateEmptyCart] = useCreateEmptyCartMutation();
  const [open, setopen] = useState<boolean>(show);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedTopping, setSelectedTopping] = useState<any>([]);
  const [selectedSize, setSelectedSize] = useState<any>([]);
  const [note, setNote] = useState<string>('');
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
      setSelectedSize(item.size[0]);
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

  if (!open) {
    return null;
  }

  const total = (selectedSize: any, selectedTopping: any, quantity: number) => {
    let total = 0;
    if (selectedSize !== null) {
      total += parseInt(selectedSize.price);
    }
    if (selectedTopping.length !== 0) {
      selectedTopping.forEach((item: any) => {
        total += parseInt(item.price);
      });
    }
    return total * quantity;
  };

  const handleSelectTopping = (toppingItem: any) => {
    if (selectedTopping.length === 2) {
      if (selectedTopping.includes(toppingItem)) {
        setSelectedTopping(
          selectedTopping.filter((item: any) => item !== toppingItem),
        );
      }
    } else {
      if (selectedTopping.includes(toppingItem)) {
        setSelectedTopping(
          selectedTopping.filter((item: any) => item !== toppingItem),
        );
      } else {
        setSelectedTopping([...selectedTopping, toppingItem]);
      }
    }
  };

  const AddToCart = () => {
    if (selectedSize === null) {
      Messenger('Vui lòng chọn size', 'error');
    } else {
      const data: any = {
        UserId: id,
        ProductId: [
          {
            NameProduct: item.name,
            ProductId: item._id,
            PriceProduct: total(selectedSize, selectedTopping, quantity),
            QuantityProduct: quantity,
            ToppingProduct: selectedTopping,
            SizeProduct: selectedSize,
            NoteProduct: note,
            StatusProduct: cartStatus.PENDING,
          },
        ],
      };
      const response: any = CreateEmptyCart(data);
      if (response) {
        dispatch(setShowLoading({isShowLoading: true}));
        setTimeout(() => {
          Messenger('Thêm vào giỏ hàng thành công', 'success');
          onDismiss();
          dispatch(setShowLoading({isShowLoading: false}));
        }, 2000);
      }
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={onDismiss}
      hardwareAccelerated={true}
      statusBarTranslucent={true}>
      <Pressable
        onPress={enableBackDropDismiss ? onDismiss : undefined}
        style={StyleBottomSheetDetailOrder.backdrop}
      />
      <Animated.View
        style={[StyleBottomSheetDetailOrder.container, {bottom: bottomsheet}]}>
        <View style={StyleBottomSheetDetailOrder.viewloading}>
          {loading ? <ActivityIndicator /> : null}
        </View>
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onEnded={onGestureEnd}>
          <View style={StyleBottomSheetDetailOrder.header}>
            <Text style={StyleBottomSheetDetailOrder.texttitle}>
              {item.name}
            </Text>
            <TouchableOpacity onPress={onDismiss}>
              <Image
                source={Icon.CANCEL}
                style={StyleBottomSheetDetailOrder.iconcancel}
              />
            </TouchableOpacity>
          </View>
        </PanGestureHandler>
        <View style={StyleBottomSheetDetailOrder.line} />
        <View style={StyleBottomSheetDetailOrder.body}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, paddingBottom: 150}}
            showsVerticalScrollIndicator={false}>
            <View style={StyleBottomSheetDetailOrder.body}>
              <View style={StyleBottomSheetDetailOrder.viewsize}>
                <Text style={StyleBottomSheetDetailOrder.textsize}>Size</Text>
                {item.size.map((sizeItem, index) => (
                  <TouchableOpacity
                    key={index}
                    style={StyleBottomSheetDetailOrder.viewsizearray}
                    onPress={() => setSelectedSize(sizeItem)}>
                    <View style={StyleBottomSheetDetailOrder.viewcheckitem}>
                      <CheckBox
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checkedColor="#FFC107"
                        uncheckedColor="#000"
                        size={20}
                        checked={selectedSize === sizeItem}
                        onPress={() => setSelectedSize(sizeItem)}
                      />
                      <View style={StyleBottomSheetDetailOrder.viewsizename}>
                        <Text style={StyleBottomSheetDetailOrder.textsizename}>
                          {sizeItem.name}
                        </Text>
                        <Text style={StyleBottomSheetDetailOrder.textsizeprice}>
                          {FormatPrice(parseInt(sizeItem.price))}
                        </Text>
                      </View>
                    </View>
                    {item.size.length - 1 === index ? null : (
                      <View style={StyleBottomSheetDetailOrder.lineitem} />
                    )}
                  </TouchableOpacity>
                ))}
                <View style={StyleBottomSheetDetailOrder.lineitem} />
              </View>
              <View style={StyleBottomSheetDetailOrder.viewsize}>
                <Text style={StyleBottomSheetDetailOrder.textsize}>
                  Topping
                </Text>
                <Text style={StyleBottomSheetDetailOrder.textminisize}>
                  Chọn tối đa 2 loại
                </Text>
                {item.topping.map((toppingItem, index) => (
                  <TouchableOpacity
                    key={index}
                    style={StyleBottomSheetDetailOrder.viewsizearray}
                    onPress={() => handleSelectTopping(toppingItem)}>
                    <View style={StyleBottomSheetDetailOrder.viewcheckitem}>
                      <CheckBox
                        checkedIcon="check-square"
                        uncheckedIcon="square-o"
                        checkedColor="#FFC107"
                        uncheckedColor="#000"
                        size={20}
                        checked={selectedTopping.includes(toppingItem)}
                        onPress={() => handleSelectTopping(toppingItem)}
                        disabled={
                          selectedTopping.length === 2 &&
                          !selectedTopping.includes(toppingItem)
                        }
                      />
                      <View style={StyleBottomSheetDetailOrder.viewsizename}>
                        <Text style={StyleBottomSheetDetailOrder.textsizename}>
                          {toppingItem.name}
                        </Text>
                        <Text style={StyleBottomSheetDetailOrder.textsizeprice}>
                          {FormatPrice(parseInt(toppingItem.price))}
                        </Text>
                      </View>
                    </View>
                    {item.topping.length - 1 === index ? null : (
                      <View style={StyleBottomSheetDetailOrder.lineitem} />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
              <View style={StyleBottomSheetDetailOrder.viewnote}>
                <Text style={StyleBottomSheetDetailOrder.textnote}>
                  Yêu cầu khác
                </Text>
                <Text style={StyleBottomSheetDetailOrder.textmininote}>
                  Những tùy chọn khác
                </Text>
                <TextInput
                  style={StyleBottomSheetDetailOrder.inputnote}
                  placeholder="Thêm ghi chú"
                  placeholderTextColor="#BDBDBD"
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={text => setNote(text)}
                  value={note}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={StyleBottomSheetDetailOrder.viewbutton}>
          <View style={StyleBottomSheetDetailOrder.viewquantity}>
            <TouchableOpacity
              style={StyleBottomSheetDetailOrder.viewminus}
              onPress={handleMinus(quantity, setQuantity)}>
              <Image
                source={Icon.MINUS}
                style={StyleBottomSheetDetailOrder.iconminus}
              />
            </TouchableOpacity>
            <Text style={StyleBottomSheetDetailOrder.textnumber}>
              {quantity}
            </Text>
            <TouchableOpacity
              style={StyleBottomSheetDetailOrder.viewplus}
              onPress={handlePlus(quantity, setQuantity)}>
              <Image
                source={Icon.PLUS}
                style={StyleBottomSheetDetailOrder.iconplus}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={StyleBottomSheetDetailOrder.button}
            onPress={AddToCart}>
            <Text style={StyleBottomSheetDetailOrder.textbutton}>Chọn</Text>
            <Text style={StyleBottomSheetDetailOrder.textbutton}>
              {FormatPrice(total(selectedSize, selectedTopping, quantity))}
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default BottomSheetDetailOrder;
