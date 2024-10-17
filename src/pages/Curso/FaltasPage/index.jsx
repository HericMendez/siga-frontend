import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import CustomHeader from "../../../components/CustomHeader";
import styles from "./styles";
import { faltas } from "../../../model/faltas";

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
      return { backgroundColor: "#FFCCCC" }; // Vermelho claro
    } else if (absencePercentage >= 20 && absencePercentage <= 25) {
      return { backgroundColor: "#FFFF99" }; // Amarelo
    } else {
      return { backgroundColor: "#FFF" }; // Fundo branco padrão
    }
  };

  // Função para exibir a mensagem apropriada no card
  const getAlertMessage = (item) => {
    const absencePercentage = (item.ausencias / item.totalAulas) * 100;

    if (absencePercentage > 25) {
      return `${(absencePercentage - 100) * -1}%\n (Reprovado por falta)`;
    } else if (absencePercentage >= 20 && absencePercentage <= 25) {
      return `${(absencePercentage - 100) * -1}%\n (Cuidado!)`;
    } else {
      return `${(absencePercentage - 100) * -1}%`;
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
        {faltas.map((item, index) => (
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

export default FaltasPage;
