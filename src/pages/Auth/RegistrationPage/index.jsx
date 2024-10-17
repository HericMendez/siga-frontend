import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/CustomHeader";
import { styles } from "./styles";

function RegistrationPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Register" navigation={navigation} />
      <View style={styles.content}>
        <Text>Registration Screen!</Text>
      </View>
    </SafeAreaView>
  );
}

export default RegistrationPage;
