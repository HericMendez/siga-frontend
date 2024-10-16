import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStackNavigator from "./HomeStackNavigator";
import CursoStackNavigator from "./CursoStackNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";
import AlunoStackNavigator from "./AlunoStackNavigator";
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarInactiveTintColor: "#d9cfd7",
        tabBarActiveTintColor: "#fff",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#b20000",
          },
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={36}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Curso"
        component={CursoStackNavigator}
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#b20000",
          },
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "school" : "school-outline"}
              color={color}
              size={36}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Aluno"
        component={AlunoStackNavigator}
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#b20000",
          },
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={36}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
