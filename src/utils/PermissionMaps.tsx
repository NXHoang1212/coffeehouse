import {PermissionsAndroid} from 'react-native';

export const RequestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Ứng dụng cần truy cập vị trí',
        message: 'Chúng tôi cần truy cập vị trí của bạn để hiển thị bản đồ.',
        buttonNeutral: 'Để sau',
        buttonNegative: 'Từ chối',
        buttonPositive: 'Đồng ý',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Quyền truy cập vị trí đã được cấp.');
      // Gọi Geolocation.getCurrentPosition ở đây để lấy vị trí.
    } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
      console.log('Quyền truy cập vị trí bị từ chối.');
    } else {
      console.log('Quyền truy cập vị trí bị từ chối.');
    }
  } catch (err) {
    console.log(
      '🚀 ~ file: PermissionMaps.tsx:23 ~ RequestLocationPermission ~ err:',
      err,
    );
  }
};
