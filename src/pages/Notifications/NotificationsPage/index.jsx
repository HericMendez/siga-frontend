import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/CustomHeader";
import { styles } from "./styles";

function NotificationsPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Notifications" navigation={navigation} />
      <View style={styles.content}>
        <Text>Notifications Page!</Text>
      </View>
    </SafeAreaView>
  );
}

export default NotificationsPage;
