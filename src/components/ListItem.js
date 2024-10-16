import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ListItem({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#ffff',
        padding: 10,
        width: '100%',
        borderWidth: 1.5,
        borderColor: '#00c1cf',
        borderRadius: 10,
        marginBottom: 10, // Aumentei para dar mais espaço entre os botões
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Para Android
      }}
    >
      <Text
        style={{
          color: '#222',
          textAlign: 'center',
          fontFamily: 'Roboto-Medium',
          fontSize: 14,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
