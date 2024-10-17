import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfilePage from "../pages/Aluno/PerfilAlunoPage";

const StackSetting = createStackNavigator();

function ProfileStackNavigator() {
  return (
    <StackSetting.Navigator
      initialRouteName="ProfilePage"
      screenOptions={{ headerShown: false }}
    >
      <StackSetting.Screen name="ProfilePage" component={ProfilePage} />
    </StackSetting.Navigator>
  );
}

export default ProfileStackNavigator;
