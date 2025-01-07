import { View, Text } from "react-native";
import React from "react";
import { Styles } from "../Constants/Styles";

export default function History() {
  return (
    <View style={[Styles.mainContainer, { paddingTop: 1 }]}>
      <View style={Styles.historyBox}></View>
    </View>
  );
}
