import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomHeader from "../../../components/CustomHeader";
import styles from "./styles";
import { historico } from "../../../model/historico";

const HistoricoPage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}
    >
      <View>
        <Text style={styles.sigla}>{item.sigla}</Text>
      </View>

      <Text style={styles.disciplina}>{item.disciplina}</Text>
      <Text style={styles.aprovado}>{item.aprovado || "Em Curso"}</Text>
      <Text style={styles.mediaFinal}>Média Final: {item.mediaFinal}</Text>
      <Text style={styles.observacao}>{item.observacao}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CustomHeader title="Histórico Escolar" navigation={navigation} />
      <FlatList
        data={historico}
        renderItem={renderItem}
        keyExtractor={(item) => item.sigla}
      />
      {selectedItem && (
        <Modal transparent={true} visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ScrollView>
                <Text>
                  <Text style={styles.bold}>Sigla:</Text> {selectedItem.sigla}
                </Text>
                <Text>
                  <Text style={styles.bold}>Período:</Text>{" "}
                  {selectedItem.periodo}
                </Text>
                <Text>
                  <Text style={styles.bold}>Aprovado:</Text>{" "}
                  {selectedItem.aprovado}
                </Text>
                <Text>
                  <Text style={styles.bold}>Média Final:</Text>{" "}
                  {selectedItem.mediaFinal}
                </Text>
                <Text>
                  <Text style={styles.bold}>Frequência:</Text>{" "}
                  {selectedItem.frequencia}
                </Text>
                <Text>
                  <Text style={styles.bold}>Quantidade de Faltas:</Text>{" "}
                  {selectedItem.qtdFaltas}
                </Text>
                <Text>
                  <Text style={styles.bold}>Observação:</Text>{" "}
                  {selectedItem.observacao}
                </Text>
              </ScrollView>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default HistoricoPage;
