import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Styles } from "../Constants/Styles";
import { useSQLiteContext } from "expo-sqlite";

export default function History() {
  const db = useSQLiteContext();
  const getHistory = async () => {};
  useEffect(() => {}, []);
  return (
    <View style={[Styles.mainContainer, { paddingTop: 1 }]}>
      <View style={Styles.historyBox}></View>
    </View>
  );
}
