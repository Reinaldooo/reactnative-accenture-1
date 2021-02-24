import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LottieView from "lottie-react-native";
import { Feather } from "@expo/vector-icons";
import {
  TextInput,
  ScrollView,
  RectButton,
} from "react-native-gesture-handler";
//
import Logo from "../images/Accenture.png";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(true);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {messageSent ? (
          <>
            <Text style={styles.sentText}>Sua mensagem foi enviada! :)</Text>
            <LottieView
              style={styles.lottieAnimation}
              source={require("../animations/gradient.json")}
              autoPlay
              loop
            />
          </>
        ) : (
          <>
            <Image source={Logo} style={styles.logoImage} />
            <Text style={styles.title}>Formulário de contato</Text>
            <View>
              <Text style={styles.labelForm}>Seu nome:</Text>
              <TextInput style={styles.inputForm} />
              <Text style={styles.labelForm}>Seu telefone:</Text>
              <TextInput style={styles.inputForm} />
              <Text style={styles.labelForm}>Seu email:</Text>
              <TextInput style={styles.inputForm} />
              <Text style={styles.labelForm}>Deixe sua mensagem:</Text>
              <TextInput style={styles.inputFormMultiline} multiline />
              <RectButton style={styles.sendButton}>
                <Text style={styles.textSendButton}>Enviar Mensagem</Text>
                <Feather name="send" size={20} color="#A100FF" />
              </RectButton>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
  scrollView: {
    width: "100%",
  },
  sentText: {
    marginVertical: 30,
    fontSize: 20,
    color: "#A100FF",
  },
  lottieAnimation: {
    height: 200,
    width: 200,
  },
  logoImage: {
    marginVertical: 20,
    height: 53,
    width: 202,
  },
  title: {
    color: "#A100ff",
    fontSize: 16,
  },
  labelForm: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  inputForm: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 50,
    width: 350,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
  },
  inputFormMultiline: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 120,
    width: 350,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
  },
  sendButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  textSendButton: {
    color: "#A100FF",
    fontSize: 20,
    marginRight: 20,
  },
});
