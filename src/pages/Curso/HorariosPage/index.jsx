import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import CustomHeader from "../../../components/CustomHeader";
import styles from "./styles";
import { horarios } from "../../../model/horarios";

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
  const groupedHorarios = horarios.reduce((acc, item) => {
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
                <Text style={styles.modalValue}>
                  {selectedHorario?.disciplina}
                </Text>
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.modalLabel}>Professor:</Text>
                <Text style={styles.modalValue}>
                  {selectedHorario?.professor}
                </Text>
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.modalLabel}>Turma:</Text>
                <Text style={styles.modalValue}>{selectedHorario?.turma}</Text>
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", fontSize: 20, marginTop: 10 }}
                >
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

export default HorariosPage;
