import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "../../components/ListItem";
import UserProfile from "../../assets/images/user-profile.jpg";

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
      <ScrollView style={{ padding: 20 }}>
        {/* Header */}
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
       
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: "Roboto-Medium", color: "#333333" }}>
            Olá, John Doe
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={UserProfile}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 20 }}
            />
          </TouchableOpacity>
        </View>



        {/* Painel de Avisos */}
        <View
          style={{
            marginVertical: 30,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Roboto-Medium",
              color: "#1c1c1c",
          
            }}
          >
            Quadro de Avisos
          </Text>
          <View style={{
        width: '100%', // 90% da largura da tela
        height: 1, // Altura da linha
        backgroundColor: '#555', // Cor da linha
        marginTop: 5, // Margem acima da linha
        marginBottom: 20, // Margem abaixo da linha
      }} />
          <View
            style={{
              backgroundColor: "#fff",
              padding: 15,
              borderRadius: 8,
              borderLeftWidth: 6,
              borderWidth: 1,
              borderColor: "#007b7f",
              marginBottom: 15,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#1c1c1c", marginBottom: 5 }}>
              11/10/2024
            </Text>
            <Text style={{ color: "#555" }}>Terça-feira (15/10) não haverá aula.</Text>
            <Text style={{ color: "#555" }}>Aula normal na segunda-feira (14/10).</Text>
            
          </View>

          <View
            style={{
              backgroundColor: "#fff",
              padding: 15,
              borderRadius: 8,
              borderLeftWidth: 6,
              borderWidth: 1,
              borderColor: "#007b7f",
              marginBottom: 15,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#1c1c1c", marginBottom: 5 }}>
              05/10/2024
            </Text>
            <Text style={{ color: "#555" }}>Exame TOEIC será realizado no dia 11/11.</Text>
          </View>

          <View
            style={{
              backgroundColor: "#fff",
              padding: 15,
              borderRadius: 8,
              borderLeftWidth: 6,
              borderWidth: 1,
              borderColor: "#007b7f",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#1c1c1c", marginBottom: 5 }}>
              29/09/2024
            </Text>
            <Text style={{ color: "#555" }}>Fatec é top.</Text>
          </View>
        </View>

        {/* Seção de Dicas */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontFamily: "Roboto-Medium", color: "#1c1c1c" }}>
            Links importantes
          </Text>
          <View style={{
        width: '100%', // 90% da largura da tela
        height: 1, // Altura da linha
        backgroundColor: '#555', // Cor da linha
        marginTop: 5, // Margem acima da linha
        marginBottom: 20, // Margem abaixo da linha
      }} />
                <ListItem title={<Text>Comunicado sobre redução de espaço de armazenamento no SkyDrive</Text>} />
          <ListItem title={<Text>Participe do grupo de WhatsApp do seu curso!</Text>} />
          <ListItem title={<Text>Horários de aula de todas as turmas</Text>} />

        </View>

    
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
