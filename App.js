
import React, { useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./src/navigators/DrawerNavigator";
import LoginPage from "./src/pages/Auth/LoginPage";
import RegistrationPage from "./src/pages/Auth/RegistrationPage";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'; // Optional for showing a loading screen
import { LogBox } from 'react-native';


const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Medium': require('./src/assets/fonts/Inter-Bold.ttf'), // Adjust the path
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'), 
    'Roboto-BoldItalic': require('./src/assets/fonts/Roboto-BoldItalic.ttf'),
    'Roboto-Italic': require('./src/assets/fonts/Roboto-Italic.ttf'),
    'Roboto-MediumItalic': require('./src/assets/fonts/Roboto-MediumItalic.ttf'),
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    // Adjust the path
  });
};
const StackApp = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  LogBox.ignoreLogs([
    "WARN ...", // Insira aqui a mensagem exata do warning que você quer ignorar
  ]);
  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />; // Or use <AppLoading /> for a better experience
  }

  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} />
        <StackApp.Screen name="Login" component={LoginPage} />
        <StackApp.Screen name="Register" component={RegistrationPage} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
