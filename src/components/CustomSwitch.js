import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CustomSwitch({ selectionMode, options, onSelectSwitch }) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <>
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {options.map((option, index) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            onPress={() => updateSwitchData(index + 1)}
            style={{
              width: "33%", // Manter grid 3x3
              marginBottom: 10,

              backgroundColor:
                getSelectionMode === index + 1 ? "#b20000" : "#fff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Icon
              name={option.icon || "home"}
              size={36}
              color={getSelectionMode === index + 1 ? "white" : "#000"}
            />
            <Text
              style={{
                color: getSelectionMode === index + 1 ? "white" : "#000",
                fontSize: 14,
                fontFamily: "Roboto-Medium",
                textAlign: "center",
              }}
            >
              {option.label || `option ${index + 1}`}
            </Text>
          </TouchableOpacity>
        );
      })}
      
    </View>
    <View>
    <Text style={{
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        color: '#333',
        marginTop: 10
      }}>
        {options[getSelectionMode - 1]?.label || 'Selecione uma opção'}
      </Text>
      <View style={{
        width: '100%', // 90% da largura da tela
        height: 1, // Altura da linha
        backgroundColor: '#555', // Cor da linha
        marginTop: 5, // Margem acima da linha
        marginBottom: 10, // Margem abaixo da linha
      }} />
    </View>
    </>
  );
}
