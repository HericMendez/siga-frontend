import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";

import EmDesenvolvimento from "../Dev/EmDesenvolvimento";
function CursoDetailsPage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Notas Parciais" navigation={navigation} />

       <EmDesenvolvimento/>
    
    </SafeAreaView>
  );
}

export default CursoDetailsPage;
