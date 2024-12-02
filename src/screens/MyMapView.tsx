import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const MyMapView = () => {
  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE = 11.722500;
  const LONGITUDE = 75.562500;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const [region] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  })
  const markers = [{
    key: 1,
    latlng: { latitude: 11.722500, longitude: 75.562500 },
    img: require('../assets/images/flag.png'),
    title: 'chokli',
    description: 'chokli is a town'
  },
  {
    key: 2,
    latlng: { latitude: 11.742127, longitude: 75.545912 },
    img: require('../assets/images/flag.png'),
    title: 'Nidumbram',
    description: 'Nidumbram is a town'
  },
  {
    key: 3,
    latlng: { latitude: 11.7172765, longitude: 75.5772631 },
    img: require('../assets/images/flag.png'),
    title: 'Mekkunnu',
    description: 'Mekkunnu is a town'
  }

]
  return (
    <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} region={region}
        style={{ flex: 1 }}
      >
        {
          markers.map((mark) => (
            <Marker key={mark.key} coordinate={mark.latlng}
             title={mark.title} description={mark.description} image={mark.img}>

            </Marker>
          ))
        }


      </MapView>
    </View>
  )
}

export default MyMapView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
})