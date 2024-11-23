import { Button, Dimensions, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import CustomMarker from './CustomMarker';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function Maps() {
  const initialLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
  };
  const [myLocation, setMyLocation] = useState(initialLocation);
  const [region, setRegion] = useState({
    latitude: initialLocation.latitude,
    longitude: initialLocation.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const mapRef = useRef(null);
  const navigation = useNavigation();

  // Liste des restaurants avec leurs coordonnées
  const restaurants = useSelector((state) => state.rest.restaurants);
  console.log(restaurants);

  useEffect(() => {
    _getLocation();
  }, []);

  const _getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.warn('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setMyLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      console.log(location);
    } catch (err) {
      console.warn(err);
    }
  };

  const focusOnLocation = () => {
    if (myLocation.latitude && myLocation.longitude) {
      const newRegion = {
        latitude: myLocation.latitude,
        longitude: myLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      if (mapRef.current) {
        mapRef.current.animateToRegion(newRegion, 1000);
      }
    }
  };

  const handleMarkerPress = async (coordinate) => {
    setSelectedRestaurant(coordinate);
    const route = await getRoute(myLocation, coordinate);
    setRouteCoordinates(route.coordinates);
  };

  const getRoute = async (origin, destination) => {
    const response = await axios.get(`https://router.project-osrm.org/route/v1/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`);
    return response.data.routes[0].geometry;
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
        ref={mapRef}
        provider='google'
      >
        {myLocation.latitude && myLocation.longitude && (
          <Marker
            coordinate={{
              latitude: myLocation.latitude,
              longitude: myLocation.longitude,
            }}
            title='My current location'
            description='I am here'
          />
        )}
        {myLocation.latitude && myLocation.longitude && (
          <CustomMarker
            coordinate={{
              latitude: myLocation.latitude,
              longitude: myLocation.longitude,
            }}
            title='My current location'
          />
        )}
        {restaurants.map(restaurant => (
          <Marker
            key={restaurant.id}
            coordinate={{
              latitude: restaurant.latitude,
              longitude: restaurant.longitude,
            }}
            title={restaurant.name}
            onPress={() => handleMarkerPress({ latitude: restaurant.latitude, longitude: restaurant.longitude })}
          />
        ))}
    
      </MapView>
      <View style={styles.buttonContainer}>
        <Button title='Get Location' onPress={focusOnLocation} />
        <Button title='Back' onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  markerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
