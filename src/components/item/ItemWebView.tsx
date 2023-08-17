import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import StyleItemWebView from "../../styles/item/StyleItemWebView";
import { Icon } from "../../constant/Icon";
import { TrunacteString } from "../../utils/TrunacteString";
interface ItemWebViewProps {
  item: {
    id: string;
    name: string;
    image: ImageSourcePropType;
    time: string;
  }
}

const ItemWebView: React.FC<ItemWebViewProps> = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={StyleItemWebView.container}>
        <View style={StyleItemWebView.viewimg}>
          <Image source={item.image} style={StyleItemWebView.img} />
        </View>
        <View style={StyleItemWebView.Viewtitle}>
          <Text style={StyleItemWebView.title}>{TrunacteString(item.name, 39)}</Text>
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
