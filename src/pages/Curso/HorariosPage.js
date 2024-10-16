import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
} from "react-native";
import CustomHeader from "../../components/CustomHeader";

const horariosData = [
  {
    sigla: "ISG003",
    disciplina: "Segurança da Informação - 2hs/aula",
    turma: "A",
    professor: "ROBSON EDUARDO GALLOPPI",
    aulas: [
      { dia: "Segunda-Feira", horario: "19:00-19:50" },
      { dia: "Segunda-Feira", horario: "19:50-20:40" },
    ],
  },

  {
    sigla: "HST002",
    disciplina: "Sociedade e Tecnologia - 2hs/aula",
    turma: "A",
    professor: "GUSTAVO HENRIQUE DEL VECHIO",
    aulas: [
      { dia: "Segunda-Feira", horario: "20:50-21:40" },
      { dia: "Segunda-Feira", horario: "21:40-22:30" },
    ],
  },

  {
    sigla: "AGO014",
    disciplina: "Gerência e Projetos - 4hs/aula",
    turma: "A",
    professor: "NIVALDO CARLETO",
    aulas: [
      { dia: "Terça-Feira", horario: "19:00-19:50" },
      { dia: "Terça-Feira", horario: "19:50-20:40" },
      { dia: "Terça-Feira", horario: "20:50-21:40" },
      { dia: "Terça-Feira", horario: "21:40-22:30" },
    ],
  },
  {
    sigla: "IBD100",
    disciplina: "Laboratório de Banco de Dados (Escolha 1) - 4hs/aula",
    turma: "A",
    professor: "DIEGO APARECIDO GUARIZ",
    aulas: [
      { dia: "Quarta-Feira", horario: "19:00-19:50" },
      { dia: "Quarta-Feira", horario: "19:50-20:40" },
      { dia: "Quarta-Feira", horario: "20:50-21:40" },
      { dia: "Quarta-Feira", horario: "21:40-22:30" },
    ],
  },
  {
    sigla: "ILP505",
    disciplina: "Eletiva - Programação para Banco de Dados - 4hs/aula",
    turma: "A",
    professor: "EDER CARLOS SALAZAR SOTTO",
    aulas: [
      { dia: "Quinta-Feira", horario: "19:00-19:50" },
      { dia: "Quinta-Feira", horario: "19:50-20:40" },
      { dia: "Quinta-Feira", horario: "20:50-21:40" },
      { dia: "Quinta-Feira", horario: "21:40-22:30" },
    ],
  },
  {
    sigla: "IES200",
    disciplina: "Engenharia de Software II - 4hs/aula",
    turma: "A",
    professor: "CAIQUE AUGUSTO FERREIRA",
    aulas: [
      { dia: "Sexta-Feira", horario: "19:00-19:50" },
      { dia: "Sexta-Feira", horario: "19:50-20:40" },
      { dia: "Sexta-Feira", horario: "20:50-21:40" },
      { dia: "Sexta-Feira", horario: "21:40-22:30" },
    ],
  },

];

const HorariosPage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHorario, setSelectedHorario] = useState(null);

  const openModal = (horario) => {
    setSelectedHorario(horario);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedHorario(null);
  };

  // Agrupar aulas por dia da semana, garantindo que disciplinas com múltiplos horários apareçam apenas uma vez
  const groupedHorarios = horariosData.reduce((acc, item) => {
    item.aulas.forEach((aula) => {
      if (!acc[aula.dia]) {
        acc[aula.dia] = {};
      }
      if (!acc[aula.dia][item.sigla]) {
        acc[aula.dia][item.sigla] = {
          ...item,
          horarios: [],
        };
      }
      acc[aula.dia][item.sigla].horarios.push(aula.horario);
    });
    return acc;
  }, {});

  return (
    <ScrollView style={{ padding: 15 }}>
      <CustomHeader title="Horários" navigation={navigation} />

      {/* Tabela de Horários */}
      {Object.entries(groupedHorarios).map(([dia, disciplinas]) => (
        <View key={dia} style={styles.dayContainer}>
          <Text style={styles.dayHeader}>{dia}</Text>
          {Object.values(disciplinas).map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.row}
              onPress={() => openModal(item)}
            >
                 <Text style={styles.cell}>{item.sigla}</Text>
              <Text style={styles.cell}>{item.disciplina}</Text>
              <Text style={styles.cell}>{item.professor}</Text>
           
            </TouchableOpacity>
          ))}
        </View>
      ))}

      {/* Modal para Aulas */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Detalhes da Aula</Text>
            <View style={styles.horizontalLine} />
            <ScrollView>
              <View style={styles.modalRow}>
                <Text style={styles.modalLabel}>Sigla:</Text>
                <Text style={styles.modalValue}>{selectedHorario?.sigla}</Text>
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.modalLabel}>Disciplina:</Text>
                <Text style={styles.modalValue}>{selectedHorario?.disciplina}</Text>
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.modalLabel}>Professor:</Text>
                <Text style={styles.modalValue}>{selectedHorario?.professor}</Text>
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.modalLabel}>Turma:</Text>
                <Text style={styles.modalValue}>{selectedHorario?.turma}</Text>
              </View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10 }}>
                  Horário
                </Text>
                <View style={styles.horizontalLine} />
              </View>
              {selectedHorario?.horarios.map((horario, index) => (
                <View key={index} style={styles.modalRow}>
                  <Text style={styles.modalCell}>{horario}</Text>
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
  dayContainer: {
    marginBottom: 15,
  },
  dayHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#006167",
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: 'center',

    
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
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
    textAlign: "left",
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    marginEnd: 5,
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  modalRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  modalLabel: {
    flex: 1,
    fontWeight: "bold",
  },
  modalValue: {
    flex: 2,
  },
  modalCell: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
  },
  closeButton: {
    backgroundColor: "#006167",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default HorariosPage;
