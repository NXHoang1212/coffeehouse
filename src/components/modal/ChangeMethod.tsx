import { Modal, Pressable, Text, View, Dimensions, Animated, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { DataMethod } from '../../data/listitem/DataMethod';
import { CheckBoxBorder } from '../custom/CheckBox';
import StyleChangeMethod from '../../styles/modal/StyleChangeMethod';

interface Props {
    show: boolean;
    onDismiss: () => void;
    enableBackDropDismiss?: boolean;
}

const ChangeMethod: React.FC<Props> = ({ show, onDismiss, enableBackDropDismiss = true, }) => {
    const bottomsheetHeight = Dimensions.get('window').height * 0.5;
    const bottomsheet = useRef(new Animated.Value(-bottomsheetHeight)).current;
    const [open, setopen] = useState<boolean>(show);
    const data = DataMethod.map((item: any, index: number) => {
        return {
            id: index,
            Title: item.Title,
            name: item.name,
            nameheader: item.nameheader,
            iconTitle: item.iconTitle,
            icon: item.iconName,
            image: item.image,
        };
    });
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
    if (!open) {
        return null;
    }
    return (
        <Modal animationType="fade" transparent={true} onRequestClose={onDismiss} hardwareAccelerated={true} statusBarTranslucent={true}>
            <Pressable onPress={enableBackDropDismiss ? onDismiss : undefined} style={StyleChangeMethod.backdrop} />
            <Animated.View
                style={[StyleChangeMethod.container, { bottom: bottomsheet }]}>
                <View style={StyleChangeMethod.header}>
                    <Text style={StyleChangeMethod.texttile}>{data[0].Title}</Text>
                    <TouchableOpacity onPress={() => onDismiss()}>
                        {data[0].iconTitle ? (
                            <Image source={data[0].iconTitle} style={StyleChangeMethod.iconcancel} />
                        ) : null}
                    </TouchableOpacity>
                </View>
                <View style={StyleChangeMethod.viewbody}>
                    <View style={StyleChangeMethod.viewoptionbody}>
                        <Text style={StyleChangeMethod.textbodyoption}>
                            {data[1].nameheader}
                        </Text>
                    </View>
                    <View style={StyleChangeMethod.viewchoosepayment}>
                        <Text style={StyleChangeMethod.textchoosepayment}>Cách thanh toán</Text>
                        <View style={StyleChangeMethod.viewoptionpayment}>
                            {data.filter(item => item.name && item.icon)
                                .map((item: any, index: number) => {
                                    return (
                                        <View key={index}>
                                            <TouchableOpacity style={StyleChangeMethod.viewoption} >
                                                <View style={StyleChangeMethod.viewcheckbox}>
                                                    <CheckBoxBorder
                                                        checked={false}
                                                        onPress={() => { }}
                                                    />
                                                </View>
                                                <View style={StyleChangeMethod.viewtextimage}>
                                                    <Image source={item.icon ? item.icon : null} style={StyleChangeMethod.iconoption} />
                                                    <Text style={StyleChangeMethod.textbodyoption}>{item.name}</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <View style={StyleChangeMethod.line} />
                                        </View>
                                    );
                                })}
                        </View>
                    </View>
                </View>
            </Animated.View>
        </Modal>
    );
};

export default ChangeMethod;
