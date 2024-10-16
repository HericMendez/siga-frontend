import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';

const gradeData = [
  {
    sigla: 'AGO014',
    disciplina: 'Gerência e Projetos',
    mediaFinal: 3.7,
    faltas: 0,
    frequencia: '0,00',
    avaliacoes: [
      { tipo: 'R', data: '27/09/24', nota: 0.0 },
      { tipo: 'N2', data: '27/09/24', nota: 0.0 },
      { tipo: 'N1', data: '27/09/24', nota: 7.5 },
    ],
  },
  {
    sigla: 'HST002',
    disciplina: 'Sociedade e Tecnologia',
    mediaFinal: 4.0,
    faltas: 0,
    frequencia: '0,00',
    avaliacoes: [
      { tipo: 'N1', data: '10/10/24', nota: 8.0 },
      { tipo: 'N2', data: '10/10/24', nota: 0.0 },
      { tipo: 'R', data: '10/10/24', nota: 0.0 },
    ],
  },
  {
    sigla: 'IBD100',
    disciplina: 'Laboratório de Banco de Dados (Escolha 1)',
    mediaFinal: 0.0,
    faltas: 16,
    frequencia: '80,00',
    avaliacoes: [
      { tipo: 'SM', data: '/ /', nota: 0.0 },
      { tipo: 'PF', data: '/ /', nota: 0.0 },
    ],
  },
  {
    sigla: 'IES200',
    disciplina: 'Engenharia de Software II',
    mediaFinal: 4.0,
    faltas: 16,
    frequencia: '80,00',
    avaliacoes: [
      { tipo: 'P1', data: '11/10/24', nota: 8.0 },
      { tipo: 'P2', data: '11/10/24', nota: 0.0 },
      { tipo: 'PS', data: '11/10/24', nota: 0.0 },
    ],
  },
  {
    sigla: 'ILP505',
    disciplina: 'Eletiva - Programação para Banco de Dados',
    mediaFinal: 3.7,
    faltas: 0,
    frequencia: '0,00',
    avaliacoes: [
      { tipo: 'R', data: '10/10/24', nota: 0.0 },
      { tipo: 'N2', data: '10/10/24', nota: 0.0 },
      { tipo: 'N1', data: '10/10/24', nota: 7.5 },
    ],
  },
  {
    sigla: 'ISG003',
    disciplina: 'Segurança da Informação',
    mediaFinal: 3.7,
    faltas: 0,
    frequencia: '0,00',
    avaliacoes: [
      { tipo: 'P1', data: '13/10/24', nota: 7.5 },
      { tipo: 'P2', data: '13/10/24', nota: 0.0 },
    ],
  },
];

const NotasPage = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(null);

  const openModal = (grade) => {
    setSelectedGrade(grade);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedGrade(null);
  };

  return (
    <View style={{ padding: 15 }}>
      {/* Tabela de Notas */}
      <CustomHeader title="Notas Parciais" navigation={navigation} />

      <View style={styles.table}>
        <Text style={styles.header}>Sigla</Text>
        <Text style={styles.header}>Disciplina</Text>
        <Text style={styles.header}>Média Final(**)</Text>
        <Text style={styles.header}>Faltas</Text>
        <Text style={styles.header}>% Frequência</Text>
      </View>
      {gradeData.map((item, index) => (
        <TouchableOpacity key={index} style={styles.row} onPress={() => openModal(item)}>
          <Text style={styles.cell}>{item.sigla}</Text>
          <Text style={styles.cell}>{item.disciplina}</Text>
          <Text style={styles.cell}>{item.mediaFinal}</Text>
          <Text style={styles.cell}>{item.faltas}</Text>
          <Text style={styles.cell}>{item.frequencia}</Text>
        </TouchableOpacity>
      ))}

      {/* Modal para Avaliações */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedGrade?.disciplina}</Text>
            <ScrollView>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>Avaliação</Text>
                <Text style={styles.modalHeaderText}>Data de lançamento</Text>
                <Text style={styles.modalHeaderText}>Nota</Text>
              </View>
              {selectedGrade?.avaliacoes.map((avaliacao, index) => (
                <View key={index} style={styles.modalRow}>
                  <Text style={styles.modalCell}>{avaliacao.tipo}</Text>
                  <Text style={styles.modalCell}>{avaliacao.data}</Text>
                  <Text style={styles.modalCell}>{avaliacao.nota}</Text>
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    flexDirection: 'row',
    backgroundColor: '#006167',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  header: {
    flex: 1,
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    marginBottom: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    backgroundColor: '#006167',
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
  },
  modalHeaderText: {
    flex: 1,
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    fontSize: 14,
  },
  modalRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  modalCell: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#333',
  },
  closeButton: {
    marginTop: 15,
    paddingVertical: 10,
    backgroundColor: '#006167',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontFamily: 'Roboto-Medium',
  },
});

export default NotasPage;
