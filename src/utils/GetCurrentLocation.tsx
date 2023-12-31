import Geolocation from 'react-native-geolocation-service';

export const GetCurrentPosition = (setInitialRegion: any) => {
  Geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      const newRegion = {
        latitude,
        longitude,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
      };
      setInitialRegion(newRegion);
    },
    error => {
      console.log(error.code, error.message);
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );
};
