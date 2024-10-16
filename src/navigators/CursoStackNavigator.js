import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CursoPage from "../pages/Curso/CursoPage";
import FaltasPage from "../pages/Curso/FaltasPage";
import HistoricoPage from "../pages/Curso/HistoricoPage";
import HorariosPage from "../pages/Curso/HorariosPage";
import NotasPage from "../pages/Curso/NotasPage";

import CalendarioAvaliacoesPage from "../pages/Curso/CalendarioAvaliacoesPage";

const StackSetting = createStackNavigator();

function CursoStackNavigator() {
  return (
    <StackSetting.Navigator initialRouteName="CursoPage" screenOptions={{ headerShown: false }}>
      <StackSetting.Screen name="CursoPage" component={CursoPage} />
      <StackSetting.Screen name="FaltasPage" component={FaltasPage} />
      <StackSetting.Screen name="HistoricoPage" component={HistoricoPage} />
      <StackSetting.Screen name="HorariosPage" component={HorariosPage} />
      <StackSetting.Screen name="NotasPage" component={NotasPage} />
      <StackSetting.Screen name="CalendarioAvaliacoesPage" component={CalendarioAvaliacoesPage} />
    </StackSetting.Navigator>
  );
}

export default CursoStackNavigator;
