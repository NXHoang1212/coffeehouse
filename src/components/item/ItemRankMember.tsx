import { View, Text, ImageSourcePropType, Image } from 'react-native';
import React from 'react'
import StyleItemRankMember from '../../styles/item/StyleItemRankMember'

interface ItemRankMemberProps {
    item: {
        id: string;
        name: string;
        image: ImageSourcePropType;
    }
}

const ItemRankMember = ({ item }: ItemRankMemberProps) => {
    return (
        <View style={StyleItemRankMember.container}>
            <View style={StyleItemRankMember.viewitem}>
                <View style={StyleItemRankMember.viewitemimage}>
                    <Image source={item.image} style={StyleItemRankMember.itemimage} />
                </View>
                <View style={StyleItemRankMember.viewitemtext}>
                    <Text style={StyleItemRankMember.itemtext}>{item.name}</Text>
                </View>
            </View>
            <View style={StyleItemRankMember.line} />
        </View>
    )
}

export default ItemRankMember