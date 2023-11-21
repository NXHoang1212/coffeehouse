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
import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../../constant/Icon';
import { PanGestureHandler } from 'react-native-gesture-handler';
import StyleBottomUpdateOrder from '../../styles/order/StyleBottomUpdateOrder';
import { FormatPrice, Total } from '../../utils/FormatPrice';
import { CheckBox } from 'react-native-elements';
import { handleMinus, handlePlus } from '../../utils/Total';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';
import { Messenger } from '../../utils/ShowMessage';
import { useUpdateCartMutation } from '../../service/api/IndexCart';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/Store';
import { AddCart } from '../../redux/slices/CartSlice';
import { setPromodiscount } from '../../redux/slices/ApplyPromodiscount';
import { cartStatus } from '../../data/types/Enum.entity';

interface Props {
  show: boolean;
  onDismiss: () => void;
  enableBackDropDismiss?: boolean;
  ProductId: any;
  checkPromo: () => void;
}

const BottomUpdateOrder: React.FC<Props> = ({
  show,
  onDismiss,
  enableBackDropDismiss = true,
  ProductId,
  checkPromo,
}) => {
  const bottomsheetHeight = Dimensions.get('window').height * 0.5;
  const bottomsheet = useRef(new Animated.Value(-bottomsheetHeight)).current;
  const id = useSelector((state: RootState) => state.user.user._id);
  const dispatch = useDispatch<AppDispatch>();
  const [open, setopen] = useState<boolean>(show);
  const [note, setNote] = useState<string>(ProductId?.NoteProduct);
  const [quantity, setQuantity] = useState<number>(ProductId?.QuantityProduct);
  const [size, setSize] = useState<any>({
    name: ProductId?.SizeProduct.name,
    price: ProductId?.SizeProduct.price,
  });
  const [selectedTopping, setSelectedTopping] = useState<any>([]);
  const [updateCart] = useUpdateCartMutation();
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
    setQuantity(ProductId?.QuantityProduct);
    setSize({
      name: ProductId?.SizeProduct.name,
      price: ProductId?.SizeProduct.price,
    });
    setNote(ProductId?.NoteProduct);
  }, [show]);
  const handleSelectTopping = (toppingItem: any) => {
    if (selectedTopping.includes(toppingItem)) {
      setSelectedTopping(
        selectedTopping.filter((item: any) => item !== toppingItem),
      );
    } else {
      setSelectedTopping([...selectedTopping, toppingItem]);
    }
  };
  const handleUpdateCart = async () => {
    try {
      const data: any = {
        ProductId: ProductId.ProductId._id,
        NameProduct: ProductId.NameProduct,
        PriceProduct: Total(size, selectedTopping, quantity),
        QuantityProduct: quantity,
        ToppingProduct: selectedTopping,
        SizeProduct: size,
        NoteProduct: note,
        StatusProduct: cartStatus.PENDING,
      };
      const response = await updateCart({ id, ProductId: ProductId._id, data });
      if (response) {
        setTimeout(() => {
          Messenger('Cập nhật thành công', 'success');
          onDismiss();
          dispatch(AddCart(data));
        }, 1500);
      }
    } catch (error: any) {
      console.log(
        '🚀 ~ file: BottomUpdateOrder.tsx:76 ~ handleUpdateCart ~ error:',
        error,
      );
    }
  };

  if (!open) {
    return null;
  }
  return (
    <Modal animationType="slide" transparent={true} onRequestClose={onDismiss}>
      <Pressable
        onPress={enableBackDropDismiss ? onDismiss : undefined}
        style={StyleBottomUpdateOrder.backdrop}
      />
      <StatusBar backgroundColor="rgba(0,0,0,0.5)" />
      <Animated.View
        style={[StyleBottomUpdateOrder.container, { bottom: bottomsheet }]}>
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onEnded={onGestureEnd}>
          <View style={StyleBottomUpdateOrder.header}>
            <Text style={StyleBottomUpdateOrder.texttitle}>
              {ProductId.ProductId.name}
            </Text>
            <TouchableOpacity onPress={onDismiss}>
              <Image
                source={Icon.CANCEL}
                style={StyleBottomUpdateOrder.iconcancel}
              />
            </TouchableOpacity>
          </View>
        </PanGestureHandler>
        <View style={StyleBottomUpdateOrder.line} />
        <View style={StyleBottomUpdateOrder.body}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}
            showsVerticalScrollIndicator={false}>
            <View style={StyleBottomUpdateOrder.body}>
              <View style={StyleBottomUpdateOrder.viewsize}>
                <Text style={StyleBottomUpdateOrder.textsize}>Size</Text>
                {ProductId.ProductId.size.map((sizeItem: any, index: any) => (
                  <TouchableOpacity
                    key={index}
                    style={StyleBottomUpdateOrder.viewsizearray}
                    onPress={() => setSize(sizeItem)}>
                    <View style={StyleBottomUpdateOrder.viewcheckitem}>
                      <CheckBox
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checkedColor="#FFC107"
                        uncheckedColor="#000"
                        size={20}
                        checked={size.name === sizeItem.name}
                        onPress={() => setSize(sizeItem)}
                      />
                      <View style={StyleBottomUpdateOrder.viewsizename}>
                        <Text style={StyleBottomUpdateOrder.textsizename}>
                          {sizeItem.name}
                        </Text>
                        <Text style={StyleBottomUpdateOrder.textsizeprice}>
                          {FormatPrice(parseInt(sizeItem.price))}
                        </Text>
                      </View>
                    </View>
                    {ProductId.ProductId.size.length - 1 === index ? null : (
                      <View style={StyleBottomUpdateOrder.lineitem} />
                    )}
                  </TouchableOpacity>
                ))}
                <View style={StyleBottomUpdateOrder.lineitem} />
              </View>
              {ProductId?.ProductId.topping.length > 1 ? (
                <View style={StyleBottomUpdateOrder.viewsize}>
                  <Text style={StyleBottomUpdateOrder.textsize}>Topping</Text>
                  <Text style={StyleBottomUpdateOrder.textminisize}>
                    Chọn tối đa 2 loại
                  </Text>
                  {ProductId?.ProductId.topping.map(
                    (toppingItem: any, index: any) => (
                      <TouchableOpacity
                        key={index}
                        style={StyleBottomUpdateOrder.viewsizearray}
                        onPress={() => handleSelectTopping(toppingItem)}>
                        <View style={StyleBottomUpdateOrder.viewcheckitem}>
                          <CheckBox
                            checkedIcon="check-square"
                            uncheckedIcon="square-o"
                            checkedColor="#FFC107"
                            uncheckedColor="#000"
                            size={20}
                            checked={selectedTopping.includes(toppingItem)}
                            onPress={() => handleSelectTopping(toppingItem)}
                          />
                          <View style={StyleBottomUpdateOrder.viewsizename}>
                            <Text style={StyleBottomUpdateOrder.textsizename}>
                              {toppingItem.name}
                            </Text>
                            <Text style={StyleBottomUpdateOrder.textsizeprice}>
                              {FormatPrice(parseInt(toppingItem.price))}
                            </Text>
                          </View>
                        </View>
                        {ProductId.ProductId.topping.length - 1 ===
                          index ? null : (
                          <View style={StyleBottomUpdateOrder.lineitem} />
                        )}
                      </TouchableOpacity>
                    ),
                  )}
                </View>
              ) : null}
              <View style={StyleBottomUpdateOrder.viewnote}>
                <Text style={StyleBottomUpdateOrder.textnote}>
                  Yêu cầu khác
                </Text>
                <Text style={StyleBottomUpdateOrder.textmininote}>
                  Những tùy chọn khác
                </Text>
                <TextInput
                  style={StyleBottomUpdateOrder.inputnote}
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
        <View style={StyleBottomUpdateOrder.viewbutton}>
          <View style={StyleBottomUpdateOrder.viewquantity}>
            <TouchableOpacity
              style={StyleBottomUpdateOrder.viewminus}
              onPress={handleMinus(quantity, setQuantity)}>
              <Image
                source={Icon.MINUS}
                style={StyleBottomUpdateOrder.iconminus}
              />
            </TouchableOpacity>
            <Text style={StyleBottomUpdateOrder.textnumber}>{quantity}</Text>
            <TouchableOpacity
              style={StyleBottomUpdateOrder.viewplus}
              onPress={handlePlus(quantity, setQuantity)}>
              <Image
                source={Icon.PLUS}
                style={StyleBottomUpdateOrder.iconplus}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={StyleBottomUpdateOrder.button}
            onPress={() => {
              handleUpdateCart();
              checkPromo();
            }}>
            <Text style={StyleBottomUpdateOrder.textbutton}>Thay đổi</Text>
            <Text style={StyleBottomUpdateOrder.textbutton}>
              {FormatPrice(Total(size, selectedTopping, quantity))}
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default BottomUpdateOrder;
