import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import StyleBottomSheetHome from '../../styles/home/StyleBottomSheetHome';
import { order, Banner } from '../../constant/Icon';
import FastImage from 'react-native-fast-image';
import BannerSlider from '../../components/banner/Advertisement';

const BottomSheetHome = () => {
    return (
        <View style={StyleBottomSheetHome.container}>
            <View style={StyleBottomSheetHome.line} />
            <View style={StyleBottomSheetHome.vieworder}>
                <TouchableOpacity>
                    <View style={StyleBottomSheetHome.viewshipper}>
                        <FastImage source={order.SHIPPER} style={StyleBottomSheetHome.imgshipper} />
                        <Text style={StyleBottomSheetHome.textshipper}>Giao Hàng</Text>
                    </View>
                </TouchableOpacity>
                <View style={StyleBottomSheetHome.lineship} />
                <TouchableOpacity>
                    <View style={StyleBottomSheetHome.viewbringship}>
                        <View style={StyleBottomSheetHome.viewimgbringship}>
                            <Image source={order.CARRIEDAWAY} style={StyleBottomSheetHome.imgbringship} />
                        </View>
                        <Text style={StyleBottomSheetHome.textbringship}>Mang đi</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={StyleBottomSheetHome.viewbanner}>
                <BannerSlider />
            </View>
        </View>
    );
};

export default BottomSheetHome;

