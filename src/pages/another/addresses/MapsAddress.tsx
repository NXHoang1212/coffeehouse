import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StyleMapAddress } from '../../../styles/code/addresses/StyleMapAddress';
import { Icon } from '../../../constant/Icon';
import React, { useState, useEffect, useCallback } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useGoBack } from '../../../utils/GoBack';
import { RequestLocationPermission } from '../../../utils/PermissionMaps';
import { GetCurrentPosition } from '../../../utils/GetCurrentLocation';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../../data/types/TypeStack';


const MapsAddress = () => {
  const goBack = useGoBack();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const [initialRegion, setInitialRegion] = useState<any>(null);
  const [nearbyAddresses, setNearbyAddresses] = useState<any>([]);

  // Hàm xử lý sự kiện khi người dùng nhấn vào nút trở về vị trí hiện tại
  const handleReturnToCurrentLocation = () => {
    GetCurrentPosition((position: { latitude: any; longitude: any; }) => {
      if (position) {
        const { latitude, longitude } = position;
        setInitialRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }
    });
  }

  const fetchNearbyPlaces = (latitude: any, longitude: any, radius: any) => {
    const apiKey = 'AIzaSyDFPSKwgFMBgSA0NjWimRQhF0l-IDs_fe4';
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&key=${apiKey}&types=address`;
    return fetch(apiUrl)
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson && resJson.results) {
          return resJson.results;
        }
        return null;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useFocusEffect(
    useCallback(() => {
      RequestLocationPermission();
      GetCurrentPosition((position: { latitude: any; longitude: any; }) => {
        if (position) {
          const { latitude, longitude } = position;
          fetchNearbyPlaces(latitude, longitude, 400)
            .then(nearbyAddresses => {
              console.log('Nearby Addresses:', nearbyAddresses);
              if (nearbyAddresses) {
                setNearbyAddresses(nearbyAddresses);
              }
            });
          setInitialRegion({
            latitude,
            longitude,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          });
        }
      });
    }, []),
  );

  const handleSelectAddress = (item: any) => {
    //truyền item.vicinity vào address 
    //@ts-ignore
    navigation.navigate('EditAddress', { item: { DescribeAddRess: item.vicinity } });
    // navigation.navigate('EditAddress', { item: { DescribeAddRess: 'Giá trị cần truyền' } });
  }


  return (
    <View style={StyleMapAddress.contatiner}>
      <View style={StyleMapAddress.viewheader}>
        <TouchableOpacity onPress={goBack}>
          <Image source={Icon.BACK} />
        </TouchableOpacity>
        <Text style={StyleMapAddress.textheader}>Chọn địa chỉ</Text>
        {/* @ts-ignore */}
        <TouchableOpacity onPress={() => navigation.navigate('SearchMapAddress')}>
          <Image source={Icon.SEARCH} />
        </TouchableOpacity>
      </View>
      <View style={StyleMapAddress.line} />
      <View style={StyleMapAddress.viewbody}>
        <TouchableOpacity style={StyleMapAddress.viewlocation} onPress={handleReturnToCurrentLocation}>
          <Image source={Icon.SEND} style={StyleMapAddress.iconmap} />
        </TouchableOpacity>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={StyleMapAddress.containermap}
          initialRegion={initialRegion}
          showsUserLocation={true}
          showsMyLocationButton={false}
          showsCompass={true}
          showsBuildings={true}
          showsTraffic={true}
          showsIndoors={true}
          showsIndoorLevelPicker={true}
          rotateEnabled={true}
          scrollEnabled={true}
          pitchEnabled={true}
          toolbarEnabled={true}
          moveOnMarkerPress={true}
          showsScale={true}
          showsPointsOfInterest={true}
          region={initialRegion}
        >
          {initialRegion && (
            <Marker
              coordinate={{
                latitude: initialRegion.latitude,
                longitude: initialRegion.longitude,
              }}
              title="Vị trí của bạn"
              description="Bạn đang ở đây"
              draggable={true}
            />
          )}
        </MapView>
        <View style={StyleMapAddress.viewinfo}>
          {nearbyAddresses.length === 0 ? (
            <Text style={StyleMapAddress.textinfo}>Không có địa điểm gần đó hoặc có sự cố xảy ra trong việc truy cập dữ liệu.</Text>
          ) : (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
              {nearbyAddresses.map((item: any, index: any) => (
                <TouchableOpacity
                  key={index}
                  style={StyleMapAddress.viewmap}
                  onPress={() => handleSelectAddress(item)}
                >

                  <View style={StyleMapAddress.viewiconmap}>
                    <Image source={Icon.LOCATION} style={StyleMapAddress.iconmap} />
                    <View style={StyleMapAddress.viewtextmap}>
                      <Text style={StyleMapAddress.textinfo}>{item.name}</Text>
                      <Text style={StyleMapAddress.textname}>{item.vicinity}</Text>
                    </View>
                  </View>
                  <View style={StyleMapAddress.linemap} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  )
}

export default MapsAddress

