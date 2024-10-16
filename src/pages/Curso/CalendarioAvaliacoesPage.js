import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
const CalendarioAvaliacoesPage = ({navigation}) => {
  const avaliacoes = [
    {
      sigla: 'AGO014',
      disciplina: 'Gerência e Projetos',
      dados: [
        { avaliacao: 'R', data: '10/12/24' },
        { avaliacao: 'N2', data: '05/11/24' },
        { avaliacao: 'N1', data: '24/09/24' },
      ],
    },
    {
      sigla: 'HST002',
      disciplina: 'Sociedade e Tecnologia',
      dados: [
        { avaliacao: 'N1', data: '/ /' },
        { avaliacao: 'N2', data: '/ /' },
        { avaliacao: 'R', data: '/ /' },
      ],
    },
    {
      sigla: 'IBD100',
      disciplina: 'Laboratório de Banco de Dados (Escolha 1)',
      dados: [
        { avaliacao: 'SM', data: '11/10/20' },
        { avaliacao: 'PF', data: '19/12/20' },
      ],
    },
    {
      sigla: 'IES200',
      disciplina: 'Engenharia de Software II',
      dados: [
        { avaliacao: 'P1', data: '04/10/24' },
        { avaliacao: 'P2', data: '29/11/24' },
        { avaliacao: 'PS', data: '06/12/24' },
      ],
    },
    {
      sigla: 'ILP505',
      disciplina: 'Eletiva - Programação para Banco de Dados',
      dados: [
        { avaliacao: 'R', data: '05/12/24' },
        { avaliacao: 'N2', data: '28/11/24' },
        { avaliacao: 'N1', data: '03/10/24' },
      ],
    },
    {
      sigla: 'ISG003',
      disciplina: 'Segurança da Informação',
      dados: [
        { avaliacao: 'P1', data: '/ /' },
        { avaliacao: 'P2', data: '/ /' },
      ],
    },
  ];

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

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  disciplinaContainer: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    
  },
  sigla: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  disciplina: {
    fontSize: 16,
    marginBottom: 8,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default CalendarioAvaliacoesPage;
