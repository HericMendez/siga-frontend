import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomSwitch from "../../../components/CustomSwitch";
import ListItem from "../../../components/ListItem";
import UserProfile from "../../../assets/images/user-profile.jpg";
import { curso } from "../../../model/curso";
import styles from "./styles";

const CursoPage = ({ navigation }) => {
  const [courseTab, setCourseTab] = useState(1);

  const onSelectSwitch = (value) => {
    setCourseTab(value);
  };

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

        {/* Switch */}
        <View style={styles.switchContainer}>
          <CustomSwitch
            selectionMode={1}
            options={curso} // Pass as many options as needed
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {/* Listagem de Cursos */}
        <View style={styles.courseList}>
          {curso[courseTab - 1].options.map((item, index) => (
            <View key={index} style={styles.listItemWrapper}>
              <ListItem
                title={item.title}
                onPress={() =>
                  navigation.navigate(item.page, { title: item.title })
                }
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CursoPage;
