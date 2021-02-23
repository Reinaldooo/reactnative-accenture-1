import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//
import Home from "./screens/Home";
import Accenture from "./screens/Accenture";

const { Navigator, Screen } = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="home" component={Home} />
        <Screen name="accenture" component={Accenture} />
      </Navigator>
    </NavigationContainer>
  );
}
