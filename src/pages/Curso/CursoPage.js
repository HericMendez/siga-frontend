import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomSwitch from "../../components/CustomSwitch";
import ListItem from "../../components/ListItem";
import UserProfile from "../../assets/images/user-profile.jpg";
import { courseMenu } from "../../model/data";

const CursoPage = ({ navigation }) => {
  const [courseTab, setCourseTab] = useState(1);

  const onSelectSwitch = (value) => {
    setCourseTab(value);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView style={{ padding: 15 }}>
        {/* Header */}
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
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

        {/* Switch */}
        <View style={{ marginBottom: 15 }}>
          <CustomSwitch
            selectionMode={1}
            options={courseMenu} // Pass as many options as needed
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {/* Listagem de Cursos */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {courseMenu[courseTab - 1].options.map((item) => (
            <View
              key={item.id}
              style={{
                width: "48%",
                marginBottom: 10,
              }}
            >
              <ListItem
                title={item.title}
                onPress={() => navigation.navigate(item.page, { title: item.title })}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CursoPage;
