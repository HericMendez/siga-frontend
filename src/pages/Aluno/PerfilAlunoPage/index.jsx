import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import UserProfile from "../../../assets/images/user-profile.jpg";
import styles from "./styles";
import { perfilAluno } from "../../../model/aluno";

const PerfilAlunoPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={UserProfile} style={styles.profileImage} />
          <View>
            <Text style={styles.fullName}>{perfilAluno.fullName}</Text>
            <Text style={styles.email}>{perfilAluno.email}</Text>
          </View>
        </View>

        {/* University Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dados Acadêmicos</Text>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionItem}>
              <Icon name="school" size={20} color="#007b7f" />{" "}
              {perfilAluno.university}
            </Text>
            <Text style={styles.sectionItem}>
              <Icon name="book" size={20} color="#007b7f" /> Curso:{" "}
              {perfilAluno.course}
            </Text>
            <Text style={styles.sectionItem}>
              <Icon name="calendar-today" size={20} color="#007b7f" /> Período:{" "}
              {perfilAluno.period}
            </Text>
            <Text style={styles.sectionItem}>
              <Icon name="account-box" size={20} color="#007b7f" /> RA:{" "}
              {perfilAluno.ra}
            </Text>
            <Text style={styles.sectionItem}>
              <Icon name="sync-alt" size={20} color="#007b7f" /> Ciclo atual:{" "}
              {perfilAluno.currentCycle}
            </Text>
          </View>
        </View>

        {/* Performance Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rendimento</Text>
          <View style={styles.sectionItemContainer}>
            <Text style={styles.sectionItem}>
              <Icon name="bar-chart" size={20} color="#007b7f" /> PP:{" "}
              {perfilAluno.performance.pp}
            </Text>
          </View>
          <View style={styles.sectionItemContainer}>
            <Text style={styles.sectionItem}>
              <Icon name="bar-chart" size={20} color="#007b7f" /> PR:{" "}
              {perfilAluno.performance.pr}
            </Text>
          </View>
          <View style={styles.sectionItemContainer}>
            <Text style={styles.sectionItem}>
              <Icon name="flight" size={20} color="#007b7f" /> PP (Intercâmbio):{" "}
              {perfilAluno.performance.ppIntercambio}
            </Text>
          </View>
        </View>

        {/* Integration Deadline Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Prazo de Integralização</Text>
          <View style={styles.sectionItemContainer}>
            <Text style={styles.sectionItem}>
              <Icon name="timelapse" size={20} color="#007b7f" /> Cursado:{" "}
              {perfilAluno.integrationDeadline.completed}
            </Text>
          </View>
          <View style={styles.sectionItemContainer}>
            <Text style={styles.sectionItem}>
              <Icon name="date-range" size={20} color="#007b7f" /> Prazo Máximo:{" "}
              {perfilAluno.integrationDeadline.maxDeadline}
            </Text>
          </View>
          <View style={styles.sectionItemContainer}>
            <Text style={styles.sectionItem}>
              <Icon name="hourglass-empty" size={20} color="#007b7f" /> Faltam:{" "}
              {perfilAluno.integrationDeadline.remaining}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerfilAlunoPage;
