import { View, Text, Animated, Image, TouchableOpacity, Pressable, ScrollView, Dimensions, TextInput, StatusBar, Modal } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import StyleBottomSheetMenu from '../../styles/modal/StyleBottomSheetMenu'
import { Icon } from '../../constant/Icon'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { Portal } from 'react-native-paper'
import { DetailProduct } from '../../data/types/Product.entity'
import StyleBottomSheetDetailOrder from '../../styles/order/StyleBottomSheetDetailOrder'
import { FormatPrice } from '../../utils/FormatPrice'
import { CheckBox } from 'react-native-elements'
import { handleMinus, handlePlus } from '../../utils/Total'
import { useSelector } from 'react-redux'
import { CreateEmptyCart } from '../../service/api/IndexCart'
import { Messenger } from '../../utils/ShowMessage'


interface Props {
    show: boolean;
    onDismiss: () => void;
    enableBackDropDismiss?: boolean;
    item: DetailProduct;
    children: React.ReactNode;
}

const BottomSheetDetailOrder: React.FC<Props> = ({ show, onDismiss, enableBackDropDismiss = true, item }) => {
    const bottomsheetHeight = Dimensions.get('window').height * 0.5;
    const bottomsheet = useRef(new Animated.Value(-bottomsheetHeight)).current;
    const user = useSelector((state: any) => state.user);
    const id = user._id
    const [open, setopen] = useState<boolean>(show);
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedSize, setSelectedSize] = useState<any>(item.size[0].price);
    const [selectedTopping, setSelectedTopping] = useState<any>([]);
    const [note, setNote] = useState<string>('');
    const onGestureEvent = (event: any) => {
        if (event.nativeEvent.translationY > 0) {
            bottomsheet.setValue(-event.nativeEvent.translationY)
        }
    }
    const onGestureEnd = (event: any) => {
        if (event.nativeEvent.translationY > bottomsheetHeight / 2) {
            onDismiss();
        } else {
            bottomsheet.setValue(0);
        }
    }
    useEffect(() => {
        if (show) {
            setopen(show)
            Animated.timing(bottomsheet, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(bottomsheet, {
                toValue: -bottomsheetHeight,
                duration: 500,
                useNativeDriver: false
            }).start(() => {
                setopen(false);
            })
        }
    }, [show])
    if (!open) {
        return null;
    }

    const total = (selectedSize: any, selectedTopping: any, quantity: number) => {
        let total = 0;
        total += parseInt(selectedSize) * quantity;
        selectedTopping.forEach((item: any) => {
            total += parseInt(item.price) * quantity;
        })
        return total;
    }

    const handleSelectSize = (sizeItem: any) => {
        if (sizeItem.price === selectedSize) {
            setSelectedSize(item.size[0].price)
        } else {
            setSelectedSize(sizeItem.price)
        }
    }

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

    const AddToCart = () => {
        if (selectedSize === null) {
            Messenger('Vui lòng chọn size', 'error')
        } else {
            if (selectedTopping.length === 0) {
                Messenger('Vui lòng chọn topping', 'error')
            } else {
            }
        }
    }

    return (
        <Modal animationType="slide" transparent={true} onRequestClose={onDismiss}>
            <Pressable onPress={enableBackDropDismiss ? onDismiss : undefined} style={StyleBottomSheetMenu.backdrop} />
            <StatusBar backgroundColor="rgba(0,0,0,0.5)" />
            <Animated.View style={[StyleBottomSheetDetailOrder.container, { bottom: bottomsheet }]}>
                <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onGestureEnd}>
                    <View style={StyleBottomSheetDetailOrder.header}>
                        <Text style={StyleBottomSheetDetailOrder.texttitle}>{item.name}</Text>
                        <TouchableOpacity onPress={onDismiss}>
                            <Image source={Icon.CANCEL} style={StyleBottomSheetDetailOrder.iconcancel} />
                        </TouchableOpacity>
                    </View>
                </PanGestureHandler>
                <View style={StyleBottomSheetDetailOrder.line} />
                <View style={StyleBottomSheetDetailOrder.body}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }} showsVerticalScrollIndicator={false}>
                        <View style={StyleBottomSheetDetailOrder.body}>
                            <View style={StyleBottomSheetDetailOrder.viewsize}>
                                <Text style={StyleBottomSheetDetailOrder.textsize}>Size</Text>
                                {item.size.map((sizeItem, index) => (
                                    <TouchableOpacity key={index} style={StyleBottomSheetDetailOrder.viewsizearray} onPress={() => handleSelectSize(sizeItem)}>
                                        <View style={StyleBottomSheetDetailOrder.viewcheckitem}>
                                            <CheckBox
                                                checkedIcon='dot-circle-o'
                                                uncheckedIcon='circle-o'
                                                checkedColor='#FFC107'
                                                uncheckedColor='#000'
                                                size={20}
                                                checked={selectedSize === sizeItem.price}
                                                onPress={() => handleSelectSize(sizeItem)}
                                            />
                                            <View style={StyleBottomSheetDetailOrder.viewsizename}>
                                                <Text style={StyleBottomSheetDetailOrder.textsizename}>{sizeItem.name}</Text>
                                                <Text style={StyleBottomSheetDetailOrder.textsizeprice}>{FormatPrice(parseInt(sizeItem.price))}</Text>
                                            </View>
                                        </View>
                                        {item.size.length - 1 === index ? null : <View style={StyleBottomSheetDetailOrder.lineitem} />}
                                    </TouchableOpacity>
                                ))}
                                <View style={StyleBottomSheetDetailOrder.lineitem} />
                            </View>
                            <View style={StyleBottomSheetDetailOrder.viewsize}>
                                <Text style={StyleBottomSheetDetailOrder.textsize}>Topping</Text>
                                <Text style={StyleBottomSheetDetailOrder.textminisize}>Chọn tối đa 2 loại</Text>
                                {item.topping.map((toppingItem, index) => (
                                    <TouchableOpacity key={index} style={StyleBottomSheetDetailOrder.viewsizearray} onPress={() => handleSelectTopping(toppingItem)}>
                                        <View style={StyleBottomSheetDetailOrder.viewcheckitem}>
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
                                            <View style={StyleBottomSheetDetailOrder.viewsizename}>
                                                <Text style={StyleBottomSheetDetailOrder.textsizename}>{toppingItem.name}</Text>
                                                <Text style={StyleBottomSheetDetailOrder.textsizeprice}>{FormatPrice(parseInt(toppingItem.price))}</Text>
                                            </View>
                                        </View>
                                        {item.topping.length - 1 === index ? null : <View style={StyleBottomSheetDetailOrder.lineitem} />}
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={StyleBottomSheetDetailOrder.viewnote}>
                                <Text style={StyleBottomSheetDetailOrder.textnote}>Yêu cầu khác</Text>
                                <Text style={StyleBottomSheetDetailOrder.textmininote}>Những tùy chọn khác</Text>
                                <TextInput
                                    style={StyleBottomSheetDetailOrder.inputnote}
                                    placeholder="Thêm ghi chú"
                                    placeholderTextColor="#BDBDBD"
                                    multiline={true}
                                    numberOfLines={4}
                                    onChangeText={(text) => setNote(text)}
                                    value={note}
                                />
                            </View>
                        </View>
                    </ScrollView>
                    <View style={StyleBottomSheetDetailOrder.viewbutton}>
                        <View style={StyleBottomSheetDetailOrder.viewquantity}>
                            <TouchableOpacity style={StyleBottomSheetDetailOrder.viewminus} onPress={handleMinus(quantity, setQuantity)}>
                                <Image source={Icon.MINUS} style={StyleBottomSheetDetailOrder.iconminus} />
                            </TouchableOpacity>
                            <Text style={StyleBottomSheetDetailOrder.textnumber}>{quantity}</Text>
                            <TouchableOpacity style={StyleBottomSheetDetailOrder.viewplus} onPress={handlePlus(quantity, setQuantity)}>
                                <Image source={Icon.PLUS} style={StyleBottomSheetDetailOrder.iconplus} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={StyleBottomSheetDetailOrder.button} onPress={AddToCart}>
                            <Text style={StyleBottomSheetDetailOrder.textbutton}>Chọn</Text>
                            <Text style={StyleBottomSheetDetailOrder.textbutton}>{FormatPrice(total(selectedSize, selectedTopping, quantity))}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
        </Modal>
    )
}

export default BottomSheetDetailOrder