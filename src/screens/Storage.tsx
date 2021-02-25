import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ILocation } from "../interfaces";
//

export default function Storage() {
  const [storageData, setStorageData] = useState<ILocation>();
  const getStorageData = async () => {
    try {
      const data = await AsyncStorage.getItem("@accentureLocation");
      if (data) return JSON.parse(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStorageData().then((data) => setStorageData(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.item}>{storageData?.city}</Text>
      <Text style={styles.item}>{storageData?.country}</Text>
      <Text style={styles.item}>{storageData?.state}</Text>
      <Text style={styles.item}>{storageData?.describle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  item: {
    marginVertical: 20,
    fontSize: 18,
  },
});
