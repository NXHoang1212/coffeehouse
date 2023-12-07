import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, memo, useEffect } from 'react';
import StyleHistoryOrder from '../../../styles/another/StyleHistoryOrder';
import { ThemLightStatusBar } from '../../../constant/ThemLight';
import { Icon } from '../../../constant/Icon';
import { useGoBack } from '../../../utils/GoBack';
import { ActiveTab } from '../../../hooks/ActiveTab';
import { FlashList } from '@huunguyen312/flash-list';
import ItemHistoryOrderReject from '../../../components/item/ItemHistoryOrderReject';
import ItemHistoryOrderProcessing from '../../../components/item/ItemHistoryOrderProcessing';
import ItemHistoryOrderSuccess from '../../../components/item/ItemHistoryOrderSuccess';
import { useGetOrderUserQuery } from '../../../service/api/IndexOrder';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/Store';
import { OrderStatus } from '../../../data/types/Enum.entity';
import ActivityIndicator from '../../../components/activity/ActivityIndicator';

const HistoryOrder: React.FC = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const goback = useGoBack();
  const { activeTab, handleActiveTab } = ActiveTab('Tab one');
  const id = useSelector((state: RootState) => state.user.user._id);
  const { data, isLoading } = useGetOrderUserQuery(id);
  const dataOrder = data?.data;

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={StyleHistoryOrder.container}>
      <View style={StyleHistoryOrder.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleHistoryOrder.iconBack} />
        </TouchableOpacity>
        <Text style={StyleHistoryOrder.textHeader}>Lịch sử đơn hàng</Text>
      </View>
      <View style={StyleHistoryOrder.viewbody}>
        <View style={StyleHistoryOrder.viewtabdiscover}>
          <TouchableOpacity style={[StyleHistoryOrder.tabcontainer, activeTab === "Tab one" ? StyleHistoryOrder.activeTab : null,]}
            onPress={() => handleActiveTab("Tab one")}>
            <Text style={[StyleHistoryOrder.texttab, activeTab === "Tab one" ? StyleHistoryOrder.activeText : null]}>Đang thực hiện</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[StyleHistoryOrder.tabcontainertwo, activeTab === "Tab two" ? StyleHistoryOrder.activeTabtwo : null,]}
            onPress={() => handleActiveTab("Tab two")}>
            <Text style={[StyleHistoryOrder.texttab, activeTab === "Tab two" ? StyleHistoryOrder.activeText : null]}>Đã hoàn tất</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[StyleHistoryOrder.tabcontainer, activeTab === "Tab three" ? StyleHistoryOrder.activeTab : null,]}
            onPress={() => handleActiveTab("Tab three")}>
            <Text style={[StyleHistoryOrder.texttab, activeTab === "Tab three" ? StyleHistoryOrder.activeText : null]}>Đã hủy</Text>
          </TouchableOpacity>
        </View>
      </View>
      {activeTab === "Tab one" ? (
        <View style={StyleHistoryOrder.viewtabone}>
          <FlashList
            data={dataOrder?.filter((item) => item.status === OrderStatus.PENDING)}
            renderItem={({ item }) => <ItemHistoryOrderProcessing item={item} />}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
            estimatedItemSize={200}
            contentContainerStyle={{ paddingBottom: 200 }}
            removeClippedSubviews={true}
            viewabilityConfig={{
              waitForInteraction: true,
              itemVisiblePercentThreshold: 50,
              minimumViewTime: 1000,
            }}
          />
        </View>
      ) : activeTab === "Tab two" ? (
        <View style={StyleHistoryOrder.viewtabtwo}>
          <FlatList
            data={dataOrder?.filter(item => item.status === OrderStatus.CONFIRMED)}
            renderItem={({ item }) => <ItemHistoryOrderSuccess item={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 200 }}
            removeClippedSubviews={true}
            viewabilityConfig={{
              waitForInteraction: true,
              itemVisiblePercentThreshold: 50,
              minimumViewTime: 1000,
            }}
          />
        </View>
      ) : activeTab === "Tab three" ? (
        <View style={StyleHistoryOrder.viewtabthree}>
          <FlashList
            data={dataOrder?.filter((item) => item.status === OrderStatus.CANCELLED)}
            renderItem={({ item }) => <ItemHistoryOrderReject item={item} />}
            keyExtractor={() => Math.random().toString()}
            showsVerticalScrollIndicator={false}
            estimatedItemSize={200}
            contentContainerStyle={{ paddingBottom: 200 }}
            removeClippedSubviews={true}
            viewabilityConfig={{
              waitForInteraction: true,
              itemVisiblePercentThreshold: 50,
              minimumViewTime: 1000,
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default memo(HistoryOrder);
