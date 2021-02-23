import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
//
import { HeaderProps } from "../interfaces";

export default function Header({ title, showCancel = true }: HeaderProps) {
  const navigation = useNavigation();

  function handleClose() {
    navigation.navigate("home");
  }
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={20} color="#A100FF" />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {showCancel ? (
        <BorderlessButton onPress={handleClose}>
          <Feather name="x" size={20} color="#A100FF" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 24,
    paddingTop: 44,
    borderBottomWidth: 1,
    borderColor: "#DDE3F0",
    alignItems: "center",
  },
  title: {
    color: "#868686",
    fontSize: 18,
  },
  returnButton: {
    flexDirection: "row",
    alignItems: "center",
  },
});
