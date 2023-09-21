import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar, TextInput } from 'react-native';
import { StyleMapAddress } from '../../../styles/code/addresses/StyleMapAddress';
import { Icon } from '../../../constant/Icon'
import React, { useState, useCallback } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useGoBack } from '../../../utils/GoBack';
import { RequestLocationPermission } from '../../../utils/PermissionMaps';
import { GetCurrentPosition } from '../../../utils/GetCurrentLocation';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../../data/types/TypeStack';
import { useDispatch } from 'react-redux';
import { setMap } from '../../../redux/slices/AddressSlice';
import Modal from "react-native-modal";
import { Picker } from '@react-native-picker/picker';
import Location from '../../../data/json/HCM.json';
import { findDistrictName, findWardName } from '../../../utils/IndexAddress';
import { MonitorAddressInput } from '../../../utils/MonitorInput';

const MapsAddress: React.FC = () => {
  const goBack = useGoBack();
  const dispatch = useDispatch();
  const [initialRegion, setInitialRegion] = useState<any>(null);
  const [nearbyAddresses, setNearbyAddresses] = useState<any>([]);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedDistrict, setSelectedDistrict] = useState<any>(null);
  const [selectedWard, setSelectedWard] = useState<any>(null);
  const [address, setAddress] = useState<string>('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

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
          fetchNearbyPlaces(latitude, longitude, 100)
            .then(nearbyAddresses => {
              // console.log('Nearby Addresses:', nearbyAddresses);
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
    //Thêm tphcm vào cuối
    const InforMap = `${item.vicinity},TP.Hồ Chí Minh`;
    dispatch(setMap({ DescribeAddRess: InforMap }));
    //@ts-ignore
    goBack();
  }

  const handleSelectDistrict = (itemValue: any) => {
    setSelectedDistrict(itemValue);
    const ward = Location.Ward.filter((item: any) => item.parent_code === itemValue);
  }

  const handleDone = () => {
    const districtName = findDistrictName(selectedDistrict, Location);
    const wardName = findWardName(selectedWard, Location);
    const InforMap = `${address}, ${wardName}, ${districtName},TP.Hồ Chí Minh`;
    dispatch(setMap({ DescribeAddRess: InforMap }));
    goBack();
  }



  return (
    <View style={StyleMapAddress.contatiner}>
      <View style={StyleMapAddress.viewheader}>
        <TouchableOpacity onPress={goBack}>
          <Image source={Icon.BACK} />
        </TouchableOpacity>
        <Text style={StyleMapAddress.textheader}>Chọn địa chỉ</Text>
        {/* @ts-ignore */}
        <TouchableOpacity onPress={toggleModal}>
          <Image source={Icon.PLUS} />
        </TouchableOpacity>
      </View>
      <View style={StyleMapAddress.line} />
      <View style={StyleMapAddress.viewbody}>
        <TouchableOpacity style={StyleMapAddress.viewlocation} onPress={handleReturnToCurrentLocation}>
          <Image source={Icon.SEND} style={StyleMapAddress.iconmap} />
        </TouchableOpacity>
        <MapView provider={PROVIDER_GOOGLE} style={StyleMapAddress.containermap} initialRegion={initialRegion}
          showsUserLocation={true} showsMyLocationButton={false} showsCompass={true}
          showsBuildings={true} showsTraffic={true} showsIndoors={true} showsIndoorLevelPicker={true}
          rotateEnabled={true} scrollEnabled={true} pitchEnabled={true} toolbarEnabled={true}
          moveOnMarkerPress={true} showsScale={true} showsPointsOfInterest={true} region={initialRegion}>
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
                  onPress={() => handleSelectAddress(item)} >
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
      <Modal isVisible={isModalVisible} backdropOpacity={0.2} onBackdropPress={toggleModal}>
        <StatusBar backgroundColor="rgba(0,0,0,0.2)" />
        <View style={StyleMapAddress.modalcontainer}>
          <Picker
            selectedValue={selectedDistrict}
            onValueChange={(itemValue) => handleSelectDistrict(itemValue)}
            style={StyleMapAddress.picker} >
            <Picker.Item label="Chọn quận huyện" value={null} />
            {Location.District.map((item: any, index: any) => (
              <Picker.Item key={index} label={item.name_with_type} value={item.code} />
            ))}
          </Picker>
          <Picker
            selectedValue={selectedWard}
            onValueChange={(itemValue) => setSelectedWard(itemValue)}
            style={StyleMapAddress.picker} >
            <Picker.Item label="Chọn phường xã" value={null} />
            {Location.Ward.filter((item: any) => item.parent_code === selectedDistrict).map((item: any, index: any) => (
              <Picker.Item key={index} label={item.name_with_type} value={item.code} />
            ))}
          </Picker>
          <TextInput
            style={StyleMapAddress.textinput}
            placeholder="Nhập địa chỉ cụ thể"
            placeholderTextColor="#fff"
            multiline={true}
            numberOfLines={4}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
          <TouchableOpacity style={StyleMapAddress.viewbutton} onPress={handleDone}>
            <Text style={StyleMapAddress.textbutton}>Xong</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default MapsAddress

