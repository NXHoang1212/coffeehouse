
import Geolocation from 'react-native-geolocation-service';


export const GetCurrentPosition = (setInitialRegion: any) => {
    Geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            const newRegion = {
                latitude,
                longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            };
            setInitialRegion(newRegion);
        },
        (error) => {
            console.error(error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
}