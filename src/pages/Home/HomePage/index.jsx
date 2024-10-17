import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "../../../components/ListItem";
import UserProfile from "../../../assets/images/user-profile.jpg";
import styles from "./styles";

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greetingText}>Olá, John Doe</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={UserProfile}
              style={styles.profileImage}
              imageStyle={styles.imageBorderRadius}
            />
          </TouchableOpacity>
        </View>

        {/* Painel de Avisos */}
        <View style={styles.noticeBoard}>
          <Text style={styles.noticeTitle}>Quadro de Avisos</Text>
          <View style={styles.separator} />
          <View style={styles.noticeItem}>
            <Text style={styles.noticeDate}>11/10/2024</Text>
            <Text style={styles.noticeText}>
              Terça-feira (15/10) não haverá aula.
            </Text>
            <Text style={styles.noticeText}>
              Aula normal na segunda-feira (14/10).
            </Text>
          </View>

          <View style={styles.noticeItem}>
            <Text style={styles.noticeDate}>05/10/2024</Text>
            <Text style={styles.noticeText}>
              Exame TOEIC será realizado no dia 11/11.
            </Text>
          </View>

          <View style={styles.noticeItem}>
            <Text style={styles.noticeDate}>29/09/2024</Text>
            <Text style={styles.noticeText}>Fatec é top.</Text>
          </View>
        </View>

        {/* Seção de Dicas */}
        <View style={styles.linksSection}>
          <Text style={styles.linksTitle}>Links importantes</Text>
          <View style={styles.separator} />
          <ListItem
            title={
              <Text>
                Comunicado sobre redução de espaço de armazenamento no SkyDrive
              </Text>
            }
          />
          <ListItem
            title={<Text>Participe do grupo de WhatsApp do seu curso!</Text>}
          />
          <ListItem title={<Text>Horários de aula de todas as turmas</Text>} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
