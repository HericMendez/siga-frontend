import React, { useState } from 'react';
import { View, Text, FlatList, Modal, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
const HistoricoPage = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dados = [
    { sigla: 'SIS000', disciplina: 'Algoritmos e Lógica de Programação', periodo: '20242', aprovado: 'Aprovado(a)', mediaFinal: '7.50', frequencia: '80%', qtdFaltas: 16, observacao: 'Aprovado por Nota e Frequência' },
    { sigla: 'SIS001', disciplina: 'Estruturas de Dados', periodo: '20241', aprovado: '', mediaFinal: '4.00', frequencia: '80%', qtdFaltas: 16, observacao: 'Em Curso' },
    { sigla: 'SIS002', disciplina: 'Matemática Discreta', periodo: '20242', aprovado: '', mediaFinal: '4.00', frequencia: '80%', qtdFaltas: 16, observacao: 'Em Curso' },
    { sigla: 'PCL002', disciplina: 'Prática de Programação', periodo: '20232', aprovado: 'Aprovado(a)', mediaFinal: '8.80', frequencia: '80%', qtdFaltas: 16, observacao: 'Aprovado por Nota e Frequência' },
    { sigla: 'PDT100', disciplina: 'Programação de Dispositivos Móveis', periodo: '20241', aprovado: '', mediaFinal: '4.00', frequencia: '80%', qtdFaltas: 16, observacao: 'Em Curso' },
    { sigla: 'PDI100', disciplina: 'Inteligência Artificial', periodo: '20232', aprovado: '', mediaFinal: '4.00', frequencia: '80%', qtdFaltas: 16, observacao: 'Em Curso' },
    { sigla: 'PDI001', disciplina: 'Projetos Integradores', periodo: '20241', aprovado: '', mediaFinal: '--', frequencia: '80%', qtdFaltas: 16, observacao: 'Em Curso' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => { setSelectedItem(item); setModalVisible(true); }}>
      <View>
              <Text style={styles.sigla}>{item.sigla}</Text>
      </View>

      <Text style={styles.disciplina}>{item.disciplina}</Text>
      <Text style={styles.aprovado}>{item.aprovado || 'Em Curso'}</Text>
      <Text style={styles.mediaFinal}>Média Final: {item.mediaFinal}</Text>
      <Text style={styles.observacao}>{item.observacao}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
            <CustomHeader title="Histórico Escolar" navigation={navigation} />
      <FlatList
        data={dados}
        renderItem={renderItem}
        keyExtractor={(item) => item.sigla}
      />
      {selectedItem && (
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ScrollView>
            
                <Text><Text style={styles.bold}>Sigla:</Text> {selectedItem.sigla}</Text>
                <Text><Text style={styles.bold}>Período:</Text> {selectedItem.periodo}</Text>
                <Text><Text style={styles.bold}>Aprovado:</Text> {selectedItem.aprovado}</Text>
                <Text><Text style={styles.bold}>Média Final:</Text> {selectedItem.mediaFinal}</Text>
                <Text><Text style={styles.bold}>Frequência:</Text> {selectedItem.frequencia}</Text>
                <Text><Text style={styles.bold}>Quantidade de Faltas:</Text> {selectedItem.qtdFaltas}</Text>
                <Text><Text style={styles.bold}>Observação:</Text> {selectedItem.observacao}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  sigla: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  disciplina: {
    fontSize: 14,
    color: '#555',
  },
  aprovado: {
    fontSize: 14,
    color: '#555',
  },
  mediaFinal: {
    fontSize: 14,
    color: '#555',
  },
  observacao: {
    fontSize: 14,
    color: '#555',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    width: '80%',
    borderRadius: 8,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default HistoricoPage;
