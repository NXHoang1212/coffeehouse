import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import StyleRankMember from '../../styles/code/StyleRankMember';
import {ThemLightStatusBar} from '../../constant/ThemLight';
import {Icon} from '../../constant/Icon';
import {useGoBack} from '../../utils/GoBack';
import LinearGradient from 'react-native-linear-gradient';
import {ActiveTab} from '../../hooks/ActiveTab';
import {FlashList} from '@huunguyen312/flash-list';
import ItemRankMember from '../../components/item/ItemRankMember';
import {DataBrass} from '../../data/listitem/rankmember/DataBrass';
import {DataSilver} from '../../data/listitem/rankmember/DataSilver';
import {DataGold} from '../../data/listitem/rankmember/DataGold';
import {DataDiamon} from '../../data/listitem/rankmember/DataDiamon';

const RankMember = () => {
  const {activeTab, handleActiveTab} = ActiveTab('Tab 1');
  const goBack = useGoBack();
  ThemLightStatusBar('dark-content', '#fff');
  return (
    <View style={StyleRankMember.container}>
      <View style={StyleRankMember.viewheader}>
        <TouchableOpacity onPress={goBack}>
          <Image source={Icon.BACK} style={StyleRankMember.iconBack} />
        </TouchableOpacity>
        <Text style={StyleRankMember.textHeader}>Hạng thành viên</Text>
      </View>
      <View style={StyleRankMember.body}>
        <LinearGradient
          colors={['#fd7e14', '#ff4f0a']}
          style={StyleRankMember.viewimgbean}>
          <View style={StyleRankMember.viewtextbean}>
            <Text style={StyleRankMember.textnew}>Mới</Text>
            <Text style={StyleRankMember.textbean}>24 BEAN</Text>
          </View>
          <View style={StyleRankMember.viewslider}>
            <View style={StyleRankMember.viewtextslider}>
              <Text style={StyleRankMember.textslidernew}>Mới</Text>
              <Text style={StyleRankMember.textslidercu}>Đồng</Text>
            </View>
            <View style={StyleRankMember.slider} />
          </View>
          <Image source={Icon.POINTS} style={StyleRankMember.imgbean} />
        </LinearGradient>
        <View style={StyleRankMember.viewtab}>
          <TouchableOpacity onPress={() => handleActiveTab('Tab 1')}>
            <View style={StyleRankMember.viewtabitem}>
              <Text
                style={
                  activeTab === 'Tab 1'
                    ? StyleRankMember.texttabactive
                    : StyleRankMember.texttab
                }>
                Mới
              </Text>
              <View
                style={
                  activeTab === 'Tab 1'
                    ? StyleRankMember.viewtablineactive
                    : StyleRankMember.viewtabline
                }
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleActiveTab('Tab 2')}>
            <View style={StyleRankMember.viewtabitem}>
              <Text
                style={
                  activeTab === 'Tab 2'
                    ? StyleRankMember.texttabactive
                    : StyleRankMember.texttab
                }>
                Đồng
              </Text>
              <View
                style={
                  activeTab === 'Tab 2'
                    ? StyleRankMember.viewtablineactive
                    : StyleRankMember.viewtabline
                }
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleActiveTab('Tab 3')}>
            <View style={StyleRankMember.viewtabitem}>
              <Text
                style={
                  activeTab === 'Tab 3'
                    ? StyleRankMember.texttabactive
                    : StyleRankMember.texttab
                }>
                Bạc
              </Text>
              <View
                style={
                  activeTab === 'Tab 3'
                    ? StyleRankMember.viewtablineactive
                    : StyleRankMember.viewtabline
                }
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleActiveTab('Tab 4')}>
            <View style={StyleRankMember.viewtabitem}>
              <Text
                style={
                  activeTab === 'Tab 4'
                    ? StyleRankMember.texttabactive
                    : StyleRankMember.texttab
                }>
                Vàng
              </Text>
              <View
                style={
                  activeTab === 'Tab 4'
                    ? StyleRankMember.viewtablineactive
                    : StyleRankMember.viewtabline
                }
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleActiveTab('Tab 5')}>
            <View style={StyleRankMember.viewtabdiamon}>
              <Text
                style={
                  activeTab === 'Tab 5'
                    ? StyleRankMember.texttabactive
                    : StyleRankMember.texttab
                }>
                Kim cương
              </Text>
              <View
                style={
                  activeTab === 'Tab 5'
                    ? StyleRankMember.viewtablineactive
                    : StyleRankMember.viewtabline
                }
              />
            </View>
          </TouchableOpacity>
        </View>
        {activeTab === 'Tab 1' ? (
          <View style={StyleRankMember.viewitem} />
        ) : activeTab === 'Tab 2' ? (
          <View style={StyleRankMember.viewitem}>
            <FlashList
              data={DataBrass}
              renderItem={({item}) => <ItemRankMember item={item} />}
              keyExtractor={item => item.id}
              estimatedItemSize={200}
            />
          </View>
        ) : activeTab === 'Tab 3' ? (
          <View style={StyleRankMember.viewitem}>
            <FlashList
              data={DataSilver}
              renderItem={({item}) => <ItemRankMember item={item} />}
              keyExtractor={item => item.id}
              estimatedItemSize={200}
            />
          </View>
        ) : activeTab === 'Tab 4' ? (
          <View style={StyleRankMember.viewitem}>
            <FlashList
              data={DataGold}
              renderItem={({item}) => <ItemRankMember item={item} />}
              keyExtractor={item => item.id}
              estimatedItemSize={200}
            />
          </View>
        ) : activeTab === 'Tab 5' ? (
          <View style={StyleRankMember.viewitem}>
            <FlashList
              data={DataDiamon}
              renderItem={({item}) => <ItemRankMember item={item} />}
              keyExtractor={item => item.id}
              estimatedItemSize={200}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default RankMember;
