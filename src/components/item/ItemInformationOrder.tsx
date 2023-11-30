import { Image, ImageSourcePropType, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { Icon, infores } from '../../constant/Icon';
import React, { useState, useEffect } from 'react';
import StyleItemInformationOrder from '../../styles/item/StyleItemInformationOrder';
import { GetCartOrder } from '../../data/types/CartOrder.entity';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { useRoute } from '@react-navigation/native';
import { FormatPrice } from '../../utils/FormatPrice';
import { Swipeable } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import BottomUpdateOrder from '../../pages/order/BottomUpdateOrder';
import MethodAmount from '../modal/MethodAmount';
import { useDeleteAllCartMutation, useDeleteCartProductIdMutation } from '../../service/api/IndexCart';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/Store';
import { setPromodiscount } from '../../redux/slices/ApplyPromodiscount';
import ConfirmOrderPayment from '../modal/ConfirmOrderPayment';
import { Messenger } from '../../utils/ShowMessage';
import { useCreateOrderMutation } from '../../service/api/IndexOrder';
import { useUpdateStatusMutation } from '../../service/api/IndexCart';
import { OrderStatus, PaymentStatus } from '../../data/types/Enum.entity';
import { Order } from '../../data/types/Order.entity';
import { AddOrder } from '../../redux/slices/OrderSlice';

interface PropsDetailItemProduct {
  item: GetCartOrder;
}

const ItemInformationOrder: React.FC<PropsDetailItemProduct> = ({ item }) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const route = useRoute<any>();
  const address = route.params?.address;
  const dispatch = useDispatch<AppDispatch>();
  const id = useSelector((state: RootState) => state.user.user._id);
  const method = useSelector((state: RootState) => state.methodamount.methodamount,);
  const promo = useSelector((state: RootState) => state.ApplyPromodiscount.applyPromodiscount.promodiscount,);
  const [openModal, setopenModal] = useState<boolean>(false);
  const [note, setNote] = useState<string>('');
  const [show, setshow] = useState<boolean>(false);
  const [SelectProduct, setSelectProduct] = useState<any>(undefined);
  const shipper = 18;
  const [updateStatus] = useUpdateStatusMutation();
  const [DeleteAllCart] = useDeleteAllCartMutation();
  const [DeleteCartProductId] = useDeleteCartProductIdMutation();
  const [CreateOrder] = useCreateOrderMutation();
  const quantity = item.ProductId.map(product => product.QuantityProduct).reduce((a, b) => a + b, 0);
  const [deleteInProgress, setDeleteInProgress] = useState<boolean>(false);
  const [Modal, setModal] = useState<boolean>(false);
  const checkPromo = () => {
    try {
      if (promo) {
        if (promo === 77.6) {
          if (quantity < 4) {
            dispatch(setPromodiscount(0));
          }
        } else if (promo === 155) {
          if (quantity < 10) {
            dispatch(setPromodiscount(0));
          }
        } else if (promo === 30) {
          if (item.ProductId.map(product => product.PriceProduct).reduce((a, b) => a + b, 0,) < 99) {
            dispatch(setPromodiscount(0));
          }
        } else if (promo === 20) {
          if (item.ProductId.map(product => product.PriceProduct).reduce((a, b) => a + b, 0,) < 50) {
            dispatch(setPromodiscount(0));
          }
        } else if (promo === 10) {
          if (
            item.ProductId.map(product => product.PriceProduct).reduce((a, b) => a + b, 0,) < 30) {
            dispatch(setPromodiscount(0));
          }
        }
      } else {
        dispatch(setPromodiscount(0));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const renderright = (product: any) => {
    const ProductId: number = product._id;
    return (
      <View style={StyleItemInformationOrder.viewitemswipe}>
        <TouchableOpacity style={StyleItemInformationOrder.viewswipeedit} onPress={() => { setshow(true), setSelectProduct(product); }}>
          <Image source={infores.EDIT} style={StyleItemInformationOrder.icondelete} />
        </TouchableOpacity>
        <TouchableOpacity style={StyleItemInformationOrder.viewswipedelete} onPress={() => { setDeleteInProgress(true); DeleteCartProductId({ id, ProductId }); }}>
          <Image source={Icon.DELETE} style={StyleItemInformationOrder.icondelete} />
        </TouchableOpacity>
      </View>
    );
  };

  const TotalPrice = () => {
    let total = 0;
    item?.ProductId.map(product => {
      total += product.PriceProduct;
    });
    return total;
  };

  useEffect(() => {
    if (deleteInProgress) {
      checkPromo();
    }
  }, [quantity, deleteInProgress]);
  const handlePayment = async () => {
    try {
      const orderCart = item.ProductId.map(product => {
        return {
          NameProduct: product.NameProduct,
          QuantityProduct: product.QuantityProduct,
          PriceProduct: product.PriceProduct,
          SizeProduct: product.SizeProduct,
          ToppingProduct: product.ToppingProduct,
          NoteProduct: product.NoteProduct,
        };
      }) as any;
      const order: Order = {
        OrderCart: orderCart,
        user: id,
        address: address.DescribeAddRess,
        note: note,
        promo: promo,
        payment: method.name,
        status: OrderStatus.PENDING,
        statusPayment: PaymentStatus.PENDING,
        reason: '',
      };
      const response: any = await CreateOrder(order);
      if (response) {
        await updateStatus(id);
        Messenger('Đặt hàng thành công', 'success');
        dispatch(AddOrder({ _id: response.data.data._id }));
        navigation.navigate('StackHomeNavigate' as any, { screen: 'StatusOrder' });
      } else {
        Messenger('Đặt hàng thất bại', 'error');
      }
    } catch (error) {
      console.log("🚀 ~ file: ItemInformationOrder.tsx:126 ~ handlePayment ~ error:", error);
    }
    // navigation.navigate('StackHomeNavigate' as any, { screen: 'StatusOrder' })
  };


  return (
    <View style={StyleItemInformationOrder.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}>
        <View style={StyleItemInformationOrder.header}>
          <Text style={StyleItemInformationOrder.texttilte}> Giao hàng tận nơi</Text>
          <TouchableOpacity style={StyleItemInformationOrder.viewdelete} onPress={() => { checkPromo(), DeleteAllCart(item._id) }}>
            <Text style={StyleItemInformationOrder.textedit}>Xóa đơn hàng</Text>
          </TouchableOpacity>
        </View>
        {address ? (
          <View style={StyleItemInformationOrder.viewaddress}>
            <TouchableOpacity style={StyleItemInformationOrder.viewtextaddress} onPress={() => navigation.navigate('StackHomeNavigate' as any, { screen: 'SelectedAddressOrder' })}>
              <Text style={StyleItemInformationOrder.textdetailaddress}>{address.DescribeAddRess}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleItemInformationOrder.vieweditaddress} onPress={() => navigation.navigate('StackHomeNavigate' as any, { screen: 'SelectedAddressOrder' })}>
              <Image source={Icon.RIGHT} style={StyleItemInformationOrder.iconedit} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={StyleItemInformationOrder.viewaddress} onPress={() => navigation.navigate('StackHomeNavigate' as any, { screen: 'SelectedAddressOrder' })}>
            <Text style={StyleItemInformationOrder.textaddress}> Vui lòng chọn địa chỉ giao tới</Text>
          </TouchableOpacity>
        )}
        <TextInput
          placeholder="Thêm hướng dẫn cho shipper...."
          style={StyleItemInformationOrder.textinput}
          onChangeText={text => setNote(text)}
          value={note}
        />
        <View style={StyleItemInformationOrder.itemuser}>
          <TouchableOpacity onPress={() => navigation.navigate('StackHomeNavigate' as any, { screen: 'UpdateOrderUser', params: { item: item } })}>
            <Text style={StyleItemInformationOrder.textuser}>{item?.UserId.name}</Text>
            <Text style={StyleItemInformationOrder.textuser}>{item?.UserId.mobile}</Text>
            <Text style={StyleItemInformationOrder.textline}>----------------------------</Text>
          </TouchableOpacity>
          <View style={StyleItemInformationOrder.viewline} />
          <View>
            <Text style={StyleItemInformationOrder.textuser}>15-45 phút</Text>
            <Text style={StyleItemInformationOrder.textuser}>Càng sớm càng tốt</Text>
            <Text style={StyleItemInformationOrder.textline}>----------------------------</Text>
          </View>
        </View>
        <View style={StyleItemInformationOrder.linespace} />
        <View style={StyleItemInformationOrder.viewproduct}>
          <View style={StyleItemInformationOrder.viewheaderproduct}>
            <Text style={StyleItemInformationOrder.textheaderchoose}>Sản phẩm đã chọn</Text>
            <TouchableOpacity style={StyleItemInformationOrder.viewtouchplus} onPress={() => navigation.navigate('TabHomeNavigate' as any, { screen: 'Đặt hàng' })}>
              <Image source={Icon.PLUS} style={StyleItemInformationOrder.iconplus} />
              <Text style={StyleItemInformationOrder.textheaderproduct}>Thêm </Text>
            </TouchableOpacity>
          </View>
          <View style={StyleItemInformationOrder.viewitemproduct}>
            {item?.ProductId.map((product, index) => (
              <Swipeable renderRightActions={() => renderright(product)} key={index}>
                <View style={StyleItemInformationOrder.itemproduct}>
                  <View>
                    <Image source={infores.EDIT} style={StyleItemInformationOrder.iconedit} />
                  </View>
                  <View>
                    <Text style={StyleItemInformationOrder.textnameproduct}>x{product.QuantityProduct} {product.NameProduct}</Text>
                    {product.SizeProduct ? (
                      <Text style={StyleItemInformationOrder.texttoppingproduct}>{product.SizeProduct.name}</Text>
                    ) : null}
                    {product.ToppingProduct ? product.ToppingProduct.map((topping, index) => (
                      <Text style={StyleItemInformationOrder.texttoppingproduct} key={index}>{topping.name} </Text>
                    )) : null}
                    {product.NoteProduct ? (
                      <Text style={StyleItemInformationOrder.texttoppingproduct}>{product.NoteProduct}</Text>
                    ) : null}
                  </View>
                  <View style={StyleItemInformationOrder.viewpriceproduct}>
                    <Text style={StyleItemInformationOrder.textpriceproduct}>{FormatPrice(product.PriceProduct)}</Text>
                  </View>
                </View>
                {index === item.ProductId.length - 1 ? null : (<View style={StyleItemInformationOrder.viewlineprogess} />)}
              </Swipeable>
            ))}
          </View>
        </View>
        <View style={StyleItemInformationOrder.linespace} />
        <View style={StyleItemInformationOrder.viewtotal}>
          <Text style={StyleItemInformationOrder.texttotal}>Tổng cộng</Text>
        </View>
        <View style={StyleItemInformationOrder.viewtotalprice}>
          <Text style={StyleItemInformationOrder.texindex}>Thành Tiền</Text>
          <Text style={StyleItemInformationOrder.texindex}>{FormatPrice(TotalPrice())} </Text>
        </View>
        <View style={StyleItemInformationOrder.viewlinetotalprogess} />
        <View style={StyleItemInformationOrder.viewtotalshipper}>
          <Text style={StyleItemInformationOrder.texindex}>Phí giao hàng</Text>
          <Text style={StyleItemInformationOrder.texindex}>{FormatPrice(shipper)} </Text>
        </View>
        <View style={StyleItemInformationOrder.viewlinetotalprogess} />
        {promo ? (
          <TouchableOpacity style={StyleItemInformationOrder.viewtotalshipper} onPress={() => navigation.navigate('StackHomeNavigate' as any, { screen: 'DiscountUser' })}>
            <Text style={StyleItemInformationOrder.texindex}>Khuyến mãi</Text>
            <Text style={StyleItemInformationOrder.texindex}>-{FormatPrice(promo)} </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={StyleItemInformationOrder.viewdiscount} onPress={() => navigation.navigate('StackHomeNavigate' as any, { screen: 'DiscountUser' })}>
            <Text style={StyleItemInformationOrder.textPromo}> Bạn có mã giảm kiểm tra để sử dụng được </Text>
            <Image source={Icon.RIGHT} style={StyleItemInformationOrder.iconedit} />
          </TouchableOpacity>
        )}
        <View style={StyleItemInformationOrder.viewlinetotalprogess} />
        <View style={StyleItemInformationOrder.viewamount}>
          <Text style={StyleItemInformationOrder.texindex}>Số tiền thanh toán </Text>
          <Text style={StyleItemInformationOrder.texindex}>{FormatPrice(TotalPrice() + shipper - promo)}</Text>
        </View>
        <View style={StyleItemInformationOrder.linespace} />
        <View style={StyleItemInformationOrder.viewchooseamount}>
          <Text style={StyleItemInformationOrder.textamount}>Thanh Toán</Text>
          <TouchableOpacity
            style={StyleItemInformationOrder.viewmethod}
            onPress={() => setopenModal(true)}>
            {method.image ? (
              <Image source={method.image as ImageSourcePropType} style={StyleItemInformationOrder.iconmethod} />
            ) : (
              <Image source={Icon.METHOD} style={StyleItemInformationOrder.iconmethod} />
            )}
            {method.name ? (
              <Text style={StyleItemInformationOrder.textmethod}>{method.name}</Text>
            ) : (
              <Text style={StyleItemInformationOrder.textmethod}>  Chọn phương thức thanh toán  </Text>
            )}
            <Image source={Icon.RIGHT} style={StyleItemInformationOrder.iconright} />
          </TouchableOpacity>
        </View>
        <LinearGradient style={StyleItemInformationOrder.viewbutton} colors={['#FA8C16', '#FA8C16']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <View>
            <Text style={StyleItemInformationOrder.textbutton}>Giao hàng {item?.ProductId ? item?.ProductId.length : 0}sản phẩm</Text>
            <Text style={StyleItemInformationOrder.textbutton}>{FormatPrice(TotalPrice() + shipper - promo)}</Text>
          </View>
          <TouchableOpacity style={StyleItemInformationOrder.vieworder}
            onPress={() => {
              if (address) {
                setModal(true);
              } else {
                Messenger('Bạn chưa chọn địa chỉ giao hàng', 'error');
              }
            }}>
            <Text style={StyleItemInformationOrder.textorder}>Đặt hàng</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
      <BottomUpdateOrder
        show={show}
        onDismiss={() => setshow(false)}
        ProductId={SelectProduct}
        checkPromo={checkPromo}
      />
      <MethodAmount
        openModal={openModal}
        onDismiss={() => setopenModal(false)}
      />
      {address ? (
        <ConfirmOrderPayment
          visible={Modal}
          onDismiss={() => setModal(false)}
          address={address}
          enableBackDropDismiss
          handlePayment={handlePayment}
        />
      ) : null}
    </View>
  );
};

export default ItemInformationOrder;
