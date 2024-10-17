import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import CustomHeader from "../../../components/CustomHeader";
import styles from "./styles";
import { notas } from "../../../model/notas";

const NotasPage = ({ navigation }) => {
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
      {notas.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.row}
          onPress={() => openModal(item)}
        >
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

export default NotasPage;
