import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
const EmDesenvolvimento = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Em Desenvolvimento! 😅</Text>
      <Text style={styles.message}>
        Esta página ainda está em construção. Tenha paciência!
      </Text>
    </View>
  );
};

export default EmDesenvolvimento;
