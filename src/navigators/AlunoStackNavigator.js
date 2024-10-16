import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfilePage from "../pages/Aluno/PerfilAlunoPage";
import ProfileDetailsPage from "../pages/Aluno/ProfileDetailsPage";

const StackSetting = createStackNavigator();

function ProfileStackNavigator() {
  return (
    <StackSetting.Navigator initialRouteName="ProfilePage" screenOptions={{ headerShown: false }}>
      <StackSetting.Screen name="ProfilePage" component={ProfilePage} />
      <StackSetting.Screen name="ProfileDetailsPage" component={ProfileDetailsPage} />
    </StackSetting.Navigator>
  );
}

export default ProfileStackNavigator;
