import React, { useState } from 'react'
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import MapView, { Polygon, PROVIDER_GOOGLE } from 'react-native-maps';

const MapComponent = () => {
    const [polygonCoordinates, setPolygonCoordinates] = useState([]);
    const [drawing, setDrawing] = useState(false);

    const handleMapPress = (e) => {
        if (drawing) {
        setPolygonCoordinates([...polygonCoordinates, e.nativeEvent.coordinate]);
        }
    };

    const startDrawing = () => {
        setPolygonCoordinates([]);
        setDrawing(true);
      };
    
    const finishDrawing = () => {
    setDrawing(false);
    };

    return (
        <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onPress={handleMapPress}
      >
        {polygonCoordinates.length > 0 && (
          <Polygon
            coordinates={polygonCoordinates}
            fillColor="rgba(0, 200, 0, 0.5)"
            strokeColor="rgba(0, 200, 0, 1)"
          />
        )}
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={startDrawing}>
          <Text style={styles.buttonText}>Start Drawing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={finishDrawing}>
          <Text style={styles.buttonText}>Finish Drawing</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });


export default MapComponent;
