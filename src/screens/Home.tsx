import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
//
import PinInsert from "../images/Pin.png";
import { IInitialMarker, ILocation } from "../interfaces";
import { getData } from "../services";

const Home: React.FC = () => {
  const [allLocations, setLocations] = useState<ILocation[]>([]);
  const [
    initialMapMarker,
    setInitialMapMarker,
  ] = useState<IInitialMarker | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) =>
      setInitialMapMarker({
        longitude: coords.longitude,
        latitude: coords.latitude,
        longitudeDelta: 0.015,
        latitudeDelta: 0.015,
      })
    );
  }, []);

  useEffect(() => {
    if (initialMapMarker) {
      getData("/all")
        .then(({ data }) => {
          setLocations(data);
        })
        .catch(() => console.log("Error fetching locations"));
    }
  }, [initialMapMarker]);

  function handleTooltipClick(id: number) {
    navigation.navigate("accenture", { id });
  }

  return (
    <View style={styles.container}>
      {initialMapMarker && (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialMapMarker}
        >
          {allLocations.map((location) => (
            <Marker
              key={location.id}
              icon={PinInsert}
              coordinate={{
                longitude: location.longitude,
                latitude: location.latitude,
              }}
            >
              <Callout
                tooltip={true}
                onPress={() => handleTooltipClick(location.id)}
              >
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{location.name}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      )}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Texto</Text>
        <RectButton style={styles.footerButton}>
          <Feather name="search" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    height: "100%",
    width: "100%",
  },
  calloutContainer: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
  },
  calloutText: {
    color: "#A100FF",
  },
  footer: {
    padding: 15,
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 24,
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    color: "#8fa7b3",
  },
  footerButton: {
    height: 56,
    width: 56,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A100FF",
  },
});

export default Home;
