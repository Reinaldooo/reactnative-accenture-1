import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import AccentureLogo from "../images/Accenture.png";

export default function Accenture() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={AccentureLogo} />
      <Text style={styles.title}>Accenture</Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
        debitis temporibus, laudantium atque quasi asperiores repellat
      </Text>
      <RectButton onPress={() => alert("Hello!")} style={styles.contactButton}>
        <Text style={styles.textButton}>Entrar em contato</Text>
        <Feather name="send" size={20} />
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    marginBottom: 20,
    height: 80,
    width: 300,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: "#8f8f8f",
  },
  paragraph: {
    margin: 28,
    fontSize: 18,
    textAlign: "left",
    color: "#B8B8B8",
  },
  contactButton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textButton: {
    justifyContent: "center",
    alignItems: "center",
    color: "#A100FF",
    margin: 10,
  },
});
