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

const attendanceData = [
  {
    sigla: 'AGO014',
    disciplina: 'Gerência e Projetos',
    presencas: 24,
    ausencias: 16,
    totalAulas: 80,
    faltas: [
      { realizacao: '06/08/2024', aula: 'Apresentação do docente e do componente curricular.', presencas: 4, ausencias: 0 },
      { realizacao: '17/09/2024', aula: 'Resolução de exercícios em sala de aula.', presencas: 4, ausencias: 0 },
      { realizacao: '13/08/2024', aula: 'As 9 áreas de conhecimento em um projeto.', presencas: 4, ausencias: 0 },
    ],
  },
  {
    sigla: 'HST002',
    disciplina: 'Sociedade e Tecnologia',
    presencas: 16,
    totalAulas: 40,
    ausencias: 6,
    faltas: [
      { realizacao: '10/10/2024', aula: 'Introdução à sociedade digital.', presencas: 4, ausencias: 1 },
      { realizacao: '15/10/2024', aula: 'Tecnologia e educação.', presencas: 4, ausencias: 1 },
    ],
  },
  {
    sigla: 'IBD100',
    disciplina: 'Laboratório de Banco de Dados (Escolha 1)',
    presencas: 24,
    totalAulas: 80,
    ausencias: 16,
    faltas: [
      { realizacao: '20/08/2024', aula: 'Introdução ao banco de dados.', presencas: 4, ausencias: 0 },
      { realizacao: '25/09/2024', aula: 'Modelo de dados.', presencas: 4, ausencias: 1 },
    ],
  },
  {
    sigla: 'IES200',
    disciplina: 'Engenharia de Software II',
    presencas: 16,
    totalAulas: 80,
    ausencias: 24,
    faltas: [
      { realizacao: '12/10/2024', aula: 'Metodologias ágeis.', presencas: 4, ausencias: 0 },
      { realizacao: '20/10/2024', aula: 'Desenvolvimento de software.', presencas: 4, ausencias: 1 },
    ],
  },
  {
    sigla: 'ILP505',
    disciplina: 'Eletiva - Programação para Banco de Dados',
    presencas: 20,
    totalAulas: 80,
    ausencias: 20,
    faltas: [
      { realizacao: '30/09/2024', aula: 'Banco de dados relacional.', presencas: 4, ausencias: 2 },
      { realizacao: '07/10/2024', aula: 'Consultas em SQL.', presencas: 4, ausencias: 2 },
    ],
  },
  {
    sigla: 'ISG003',
    disciplina: 'Segurança da Informação',
    presencas: 14,
    totalAulas: 40,
    ausencias: 6,
    faltas: [
      { realizacao: '01/10/2024', aula: 'Princípios de segurança.', presencas: 4, ausencias: 0 },
      { realizacao: '15/10/2024', aula: 'Ataques e defesas.', presencas: 4, ausencias: 1 },
    ],
  },
];

const FaltasPage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);

  const openModal = (discipline) => {
    setSelectedDiscipline(discipline);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedDiscipline(null);
  };

  // Função para determinar o estilo da linha baseado na % de ausências
  const getRowStyle = (item) => {
    const absencePercentage = (item.ausencias / item.totalAulas) * 100;

    if (absencePercentage > 25) {
      return { backgroundColor: '#FFCCCC' }; // Vermelho claro
    } else if (absencePercentage >= 20 && absencePercentage <= 25) {
      return { backgroundColor: '#FFFF99' }; // Amarelo
    } else {
      return { backgroundColor: '#FFF' }; // Fundo branco padrão
    }
  };

  // Função para exibir a mensagem apropriada no card
  const getAlertMessage = (item) => {
    const absencePercentage = (item.ausencias / item.totalAulas) * 100;

    if (absencePercentage > 25) {
      return `${(absencePercentage-100)*-1}%\n (Reprovado por falta)`;
    } else if (absencePercentage >= 20 && absencePercentage <= 25) {
      return `${(absencePercentage-100)*-1}%\n (Cuidado!)`;;
    } else {
      return `${(absencePercentage-100)*-1}%`;
    }
  };

  return (
    <ScrollView style={{ padding: 15 }}>
      <CustomHeader title="Faltas Parciais" navigation={navigation} />

      {/* Tabela de Presenças */}
      <View style={styles.table}>
        <Text style={styles.header}>Sigla</Text>
        <Text style={styles.header}>Disciplina</Text>
        <Text style={styles.header}>Presenças</Text>
        <Text style={styles.header}>Ausências</Text>
        <Text style={styles.header}>% Freq.</Text>
      </View>
    <View>
    {attendanceData.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.row, getRowStyle(item)]}
          onPress={() => openModal(item)}
        >
          <Text style={styles.cell}>{item.sigla}</Text>
          <Text style={styles.cell}>{item.disciplina}</Text>
          <Text style={styles.cell}>{item.presencas}</Text>
          <Text style={styles.cell}>{item.ausencias}</Text>

          {/* Exibe a mensagem de alerta, se aplicável */}
          {getAlertMessage(item) && (
            <Text style={styles.alertText}>{getAlertMessage(item)}</Text>
          )}
        </TouchableOpacity>
      ))}

    </View>

      {/* Modal para Faltas */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {selectedDiscipline?.disciplina}
            </Text>
            <ScrollView>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>Realização</Text>
                <Text style={styles.modalHeaderText}>Aula</Text>
                <Text style={styles.modalHeaderText}>Presenças</Text>
                <Text style={styles.modalHeaderText}>Ausências</Text>
              </View>
              {selectedDiscipline?.faltas.map((falta, index) => (
                <View key={index} style={styles.modalRow}>
                  <Text style={styles.modalCell}>{falta.realizacao}</Text>
                  <Text style={styles.modalCell}>{falta.aula}</Text>
                  <Text style={styles.modalCell}>{falta.presencas}</Text>
                  <Text style={styles.modalCell}>{falta.ausencias}</Text>
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
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
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
  alertText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    color: '#222',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    backgroundColor: '#006167',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
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
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
  modalCell: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
  closeButton: {
    backgroundColor: '#006167',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
});

export default FaltasPage;
