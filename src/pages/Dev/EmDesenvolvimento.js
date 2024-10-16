import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default EmDesenvolvimento;
