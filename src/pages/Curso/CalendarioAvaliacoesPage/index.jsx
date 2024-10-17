import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomHeader from "../../../components/CustomHeader";
import styles from "./styles";
import { avaliacoes } from "../../../model/avaliacoes";

const CalendarioAvaliacoesPage = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <CustomHeader title="Calendário de Provas" navigation={navigation} />

      {avaliacoes.map((item, index) => (
        <View key={index} style={styles.disciplinaContainer}>
          <Text style={styles.sigla}>{item.sigla}</Text>
          <Text style={styles.disciplina}>{item.disciplina}</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>Avaliação</Text>
            <Text style={styles.headerCell}>Data</Text>
          </View>
          {item.dados.map((av, idx) => (
            <View key={idx} style={styles.row}>
              <Text style={styles.cell}>{av.avaliacao}</Text>
              <Text style={styles.cell}>{av.data}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default CalendarioAvaliacoesPage;
