import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, TouchableNativeFeedback } from 'react-native';
import FastImage from 'react-native-fast-image';
import React, { useState, memo } from 'react'
import { DetailProduct } from '../../data/types/Product.entity';
import { Icon, TabCoffee } from '../../constant/Icon';
import { FormatPrice } from '../../utils/FormatPrice';
import { useGoBack } from '../../utils/GoBack';
import StyleItemDetailProduct from '../../styles/item/StyleItemDetailProduct';
import { ToggleDescription } from '../../utils/ToggleDescription';
import { handleMinus, handlePlus } from '../../utils/Total';
import { CheckBox } from 'react-native-elements';
import { useCreateEmptyCartMutation } from '../../service/api/IndexCart';
import { useCreateFavouritesMutation } from '../../service/api/IndexFavourites';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';
import { Messenger } from '../../utils/ShowMessage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
interface PropsDetailItemProduct {
    item: DetailProduct;
}

const ItemDetailProduct = ({ item }: PropsDetailItemProduct) => {
    const goBack = useGoBack();
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
    let id = useSelector((state: RootState) => state.user.user._id);
    let isLogin = useSelector((state: RootState) => state.IsLoggedIn.isLoggedIn);
    const [createFavourites] = useCreateFavouritesMutation();
    const [CreateEmptyCart] = useCreateEmptyCartMutation();
    const [showFullDescription, setShowFullDescription] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);
    const toltalPrice = quantity * item.price;
    const [selectedTopping, setSelectedTopping] = useState<any>([]);
    const [selectedSize, setSelectedSize] = useState<any>(null);
    const [note, setNote] = useState<string>('');

    const handleSelectTopping = (toppingItem: any) => {
        if (selectedTopping.length === 2) {
            if (selectedTopping.includes(toppingItem)) {
                setSelectedTopping(selectedTopping.filter((item: any) => item !== toppingItem))
            }
        } else {
            if (selectedTopping.includes(toppingItem)) {
                setSelectedTopping(selectedTopping.filter((item: any) => item !== toppingItem))
            } else {
                setSelectedTopping([...selectedTopping, toppingItem])
            }
        }
    }

    const AddToFavourites = async () => {
        if (isLogin) {
            const data: any = {
                UserId: id,
                ProductId: item._id,
                status: 'Đã thích'
            }
            const response: any = await createFavourites(data);
            if (response) {
                Messenger('Thêm vào yêu thích thành công', 'success')
            }
        } else {
            navigation.navigate('AuthStackUser' as any, { screen: 'Login' });
        }
    }

    const onLoad = () => {
        FastImage.preload([{ uri: item.image as string }]);
    }
    const AddToCart = () => {
        if (selectedSize === null) {
            Messenger('Vui lòng chọn size', 'error')
        } else {
            const data: any = {
                UserId: id,
                ProductId: [
                    {
                        NameProduct: item.name,
                        ProductId: item._id,
                        PriceProduct: toltalPrice,
                        QuantityProduct: quantity,
                        ToppingProduct: selectedTopping,
                        SizeProduct: selectedSize,
                        NoteProduct: note
                    }
                ]
            }
            const response: any = CreateEmptyCart(data);
            if (response) {
                setTimeout(() => {
                    Messenger('Thêm vào giỏ hàng thành công', 'success');
                    goBack();
                }, 2000);
            }
        }
    }
    return (
        <View style={StyleItemDetailProduct.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View style={StyleItemDetailProduct.viewbody}>
                    <View style={StyleItemDetailProduct.viewimage}>
                        <FastImage
                            style={StyleItemDetailProduct.imageproduct}
                            source={{
                                uri: item.image as string,
                                priority: FastImage.priority.normal,
                                cache: FastImage.cacheControl.immutable,
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                            onLoad={onLoad}
                        />
                        <TouchableOpacity style={StyleItemDetailProduct.viewback} onPress={() => navigation.goBack()}>
                            <Image source={Icon.BORDERCANCEL} style={StyleItemDetailProduct.iconback} />
                        </TouchableOpacity>
                    </View>
                    <View style={StyleItemDetailProduct.viewtext}>
                        <Text style={StyleItemDetailProduct.textname}>{item.name}</Text>
                        <View style={StyleItemDetailProduct.viewprice}>
                            <Text style={StyleItemDetailProduct.textprice}>{FormatPrice(item.price)}</Text>
                            <TouchableOpacity onPress={AddToFavourites}>
                                <Image source={TabCoffee.HEART} style={StyleItemDetailProduct.iconheart} />
                            </TouchableOpacity>
                        </View>
                        <Text style={StyleItemDetailProduct.textdescription}>
                            {showFullDescription ? item.description : item.description.slice(0, 130)}...
                            <Text onPress={ToggleDescription(setShowFullDescription, showFullDescription)} style={StyleItemDetailProduct.textshowmore}>
                                {showFullDescription ? 'Rút gọn' : 'Xem thêm'}
                            </Text>
                        </Text>
                        <View style={StyleItemDetailProduct.line} />
                    </View>
                    {item.size.length > 0 && item.size[0].name && item.size[0].price ?
                        <View style={StyleItemDetailProduct.viewsize}>
                            <Text style={StyleItemDetailProduct.textsize}>Size</Text>
                            {item.size.map((sizeItem, index) => (
                                <View key={index} style={StyleItemDetailProduct.viewsizearray}>
                                    <TouchableOpacity style={StyleItemDetailProduct.viewcheckitem} onPress={() => setSelectedSize(sizeItem)}>
                                        <CheckBox
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            checkedColor='#FFC107'
                                            uncheckedColor='#000'
                                            size={20}
                                            checked={selectedSize === sizeItem}
                                            onPress={() => setSelectedSize(sizeItem)}
                                        />
                                        <View style={StyleItemDetailProduct.viewsizename}>
                                            <Text style={StyleItemDetailProduct.textsizename}>{sizeItem.name}</Text>
                                            <Text style={StyleItemDetailProduct.textsizeprice}>{FormatPrice(parseInt(sizeItem.price))}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    {item.size.length - 1 === index ? null : <View style={StyleItemDetailProduct.lineitem} />}
                                </View>
                            ))}
                            <View style={StyleItemDetailProduct.line} />
                        </View> : null}
                    {item.topping.length > 0 && item.topping[0].name && item.topping[0].price ?
                        <View style={StyleItemDetailProduct.viewsize}>
                            <Text style={StyleItemDetailProduct.textsize}>Topping</Text>
                            <Text style={StyleItemDetailProduct.textminisize}>Chọn tối đa 2 loại</Text>
                            {item.topping.map((toppingItem, index) => (
                                <TouchableOpacity key={index} style={StyleItemDetailProduct.viewsizearray}>
                                    <View style={StyleItemDetailProduct.viewcheckitem}>
                                        <CheckBox
                                            checkedIcon='check-square'
                                            uncheckedIcon='square-o'
                                            checkedColor='#FFC107'
                                            uncheckedColor='#000'
                                            size={20}
                                            checked={selectedTopping.includes(toppingItem)}
                                            onPress={() => handleSelectTopping(toppingItem)}
                                            disabled={selectedTopping.length === 2 && !selectedTopping.includes(toppingItem)}
                                        />
                                        <View style={StyleItemDetailProduct.viewsizename}>
                                            <Text style={StyleItemDetailProduct.textsizename}>{toppingItem.name}</Text>
                                            <Text style={StyleItemDetailProduct.textsizeprice}>{FormatPrice(parseInt(toppingItem.price))}</Text>
                                        </View>
                                    </View>
                                    {item.topping.length - 1 === index ? null : <View style={StyleItemDetailProduct.lineitem} />}
                                </TouchableOpacity>
                            ))}
                        </View> : null}
                    <View style={StyleItemDetailProduct.line} />
                    <View style={StyleItemDetailProduct.viewnote}>
                        <Text style={StyleItemDetailProduct.textnote}>Yêu cầu khác</Text>
                        <Text style={StyleItemDetailProduct.textmininote}>Những tùy chọn khác</Text>
                        <TextInput
                            style={StyleItemDetailProduct.inputnote}
                            placeholder="Thêm ghi chú"
                            placeholderTextColor="#BDBDBD"
                            multiline={true}
                            numberOfLines={4}
                            value={note}
                            onChangeText={(text) => setNote(text)}
                        />
                    </View>
                    <View style={StyleItemDetailProduct.line} />
                </View>
            </ScrollView>
            <View style={StyleItemDetailProduct.viewbutton}>
                <View style={StyleItemDetailProduct.viewquantity}>
                    <TouchableOpacity style={StyleItemDetailProduct.viewminus} onPress={handleMinus(quantity, setQuantity)}>
                        <Image source={Icon.MINUS} style={StyleItemDetailProduct.iconminus} />
                    </TouchableOpacity>
                    <Text style={StyleItemDetailProduct.textnumber}>{quantity}</Text>
                    <TouchableOpacity style={StyleItemDetailProduct.viewplus} onPress={handlePlus(quantity, setQuantity)}>
                        <Image source={Icon.PLUS} style={StyleItemDetailProduct.iconplus} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={StyleItemDetailProduct.button} onPress={AddToCart}>
                    <Text style={StyleItemDetailProduct.textbutton}>Chọn</Text>
                    <Text style={StyleItemDetailProduct.textbutton}>{FormatPrice(toltalPrice)}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemDetailProduct


