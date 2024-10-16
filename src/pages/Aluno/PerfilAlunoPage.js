import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserProfile from "../../assets/images/user-profile.jpg";

// Mock data for the student profile
const studentData = {
  fullName: "John Doe",
  email: "johndoe@fatec.sp.gov.br",
  university: "FATEC Taquaritinga",
  course: "Análise e Desenvolvimento de Sistemas",
  period: "Noite",
  ra: "123456789",
  currentCycle: "6º Ciclo",
  performance: {
    pp: "50%",
    pr: "50%",
    ppIntercambio: "50%",
  },
  integrationDeadline: {
    completed: "4",
    maxDeadline: "13",
    remaining: "9",
  },
};

const PerfilAlunoPage = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 20 }}>
        
        {/* Header */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
          <Image
            source={UserProfile} // Placeholder for the student's photo
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginRight: 15,
            }}
          />
          <View>
            <Text style={{ fontSize: 22, fontFamily: "Roboto-Medium", color: "#1c1c1c" }}>
              {studentData.fullName}
            </Text>
            <Text style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "#888" }}>
              {studentData.email}
            </Text>
          </View>
        </View>

        {/* University Info */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontFamily: "Roboto-Medium", marginBottom: 10 }}>
            Dados Acadêmicos
          </Text>
          <View style={{ marginBottom: 10 }}>
            <Text  style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "#1c1c1c", marginBottom: 5 }}>
              <Icon name="school" size={20} color="#007b7f" /> {studentData.university}
            </Text>
            <Text  style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "#1c1c1c", marginBottom: 5 }}>
              <Icon name="book" size={20} color="#007b7f" /> Curso: {studentData.course}
            </Text>
            <Text  style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "#1c1c1c", marginBottom: 5 }}>
              <Icon name="calendar-today" size={20} color="#007b7f" /> Período: {studentData.period}
            </Text>
            <Text  style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "#1c1c1c", marginBottom: 5 }}>
              <Icon name="account-box" size={20} color="#007b7f" /> RA: {studentData.ra}
            </Text>
            <Text  style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "#1c1c1c", marginBottom: 5 }}>
              <Icon name="sync-alt" size={20} color="#007b7f" /> Ciclo atual: {studentData.currentCycle}
            </Text>
          </View>
        </View>

        {/* Performance Info */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontFamily: "Roboto-Medium", marginBottom: 10 }}>
            Rendimento
          </Text>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "#1c1c1c" }}>
              <Icon name="bar-chart" size={20} color="#007b7f" /> PP: {studentData.performance.pp}
            </Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "#1c1c1c" }}>
              <Icon name="bar-chart" size={20} color="#007b7f" /> PR: {studentData.performance.pr}
            </Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "#1c1c1c" }}>
              <Icon name="flight" size={20} color="#007b7f" /> PP (Intercâmbio): {studentData.performance.ppIntercambio}
            </Text>
          </View>
        </View>

        {/* Integration Deadline Info */}
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 18, fontFamily: "Roboto-Medium", marginBottom: 10 }}>
            Prazo de Integralização
          </Text>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "#1c1c1c" }}>
              <Icon name="timelapse" size={20} color="#007b7f" /> Cursado: {studentData.integrationDeadline.completed}
            </Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "#1c1c1c" }}>
              <Icon name="date-range" size={20} color="#007b7f" /> Prazo Máximo: {studentData.integrationDeadline.maxDeadline}
            </Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "#1c1c1c" }}>
              <Icon name="hourglass-empty" size={20} color="#007b7f" /> Faltam: {studentData.integrationDeadline.remaining}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerfilAlunoPage;
