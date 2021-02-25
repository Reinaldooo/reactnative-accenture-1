import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import LottieView from "lottie-react-native";
import { Feather } from "@expo/vector-icons";
import {
  TextInput,
  ScrollView,
  RectButton,
} from "react-native-gesture-handler";
//
import Logo from "../images/Accenture.png";
import { contactSend } from "../services";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function Contact() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setMessageSent(false);
    });
    return unsubscribe;
  }, []);

  function sendMessage() {
    const postData = {
      name,
      phone,
      email,
      message,
    };
    contactSend.post("", postData).then(() => {
      setMessageSent(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    });
  }

  function openStorage() {
    navigation.navigate("storage");
  }

  return (
    <ScrollView style={styles.scrollView}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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
              <TextInput
                style={styles.inputForm}
                onChangeText={(text) => setName(text)}
              />
              <Text style={styles.labelForm}>Seu telefone:</Text>
              <TextInput
                style={styles.inputForm}
                onChangeText={(text) => setPhone(text)}
              />
              <Text style={styles.labelForm}>Seu email:</Text>
              <TextInput
                style={styles.inputForm}
                onChangeText={(text) => setEmail(text)}
              />
              <Text style={styles.labelForm}>Deixe sua mensagem:</Text>
              <TextInput
                style={styles.inputFormMultiline}
                multiline
                onChangeText={(text) => setMessage(text)}
              />
              <RectButton style={styles.sendButton} onPress={sendMessage}>
                <Text style={styles.textSendButton}>Enviar Mensagem</Text>
                <Feather name="send" size={20} color="#A100FF" />
              </RectButton>
              <RectButton style={styles.sendButton} onPress={openStorage}>
                <Text style={styles.textSendButton}>Abrir Storage</Text>
                <Feather name="send" size={20} color="#A100FF" />
              </RectButton>
            </View>
          </>
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height + 200,
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
