import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
//
import AccentureLogo from "../images/Accenture.png";
import { ILocationParams, ILocation } from "../interfaces";
import { getData } from "../services";

export default function Accenture() {
  const [location, setLocation] = useState<ILocation>();
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as ILocationParams;

  useEffect(() => {
    getData(`find?id=${params.id}`).then(({ data }) => setLocation(data));
  }, [params.id]);

  function handleContactButton() {
    navigation.navigate("contact");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {location && (
          <>
            <Image
              style={styles.topImage}
              source={{
                uri:
                  "https://startupi.com.br/wp-content/uploads/2020/01/accenture-1.jpg",
              }}
            />
            <Image style={styles.logo} source={AccentureLogo} />
            <Text style={styles.title}>{location.city}</Text>
            <Text style={styles.paragraph}>{location.describle}</Text>
            <Text style={styles.details}>País: {location.country}</Text>
            <Text style={styles.details}>Estado: {location.state}</Text>
            <Text style={styles.details}>Cidade: {location.city}</Text>
            <Text style={styles.details}>
              Endereço:{" "}
              {`${location.address.street}, ${location.address.number}`}
            </Text>
            <RectButton
              onPress={handleContactButton}
              style={styles.contactButton}
            >
              <Text style={styles.textButton}>Entrar em contato</Text>
              <Feather name="send" size={20} color="#A100FF" />
            </RectButton>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    paddingBottom: 50,
  },
  topImage: {
    height: 200,
    width: "100%",
  },
  logo: {
    marginVertical: 20,
    height: 53,
    width: 202,
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
    marginTop: 20,
  },
  textButton: {
    justifyContent: "center",
    fontSize: 20,
    alignItems: "center",
    color: "#A100FF",
    margin: 10,
  },
  details: {
    fontSize: 17,
    marginVertical: 5,
  },
});
