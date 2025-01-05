import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Styles } from "../Constants/Styles";
import * as Link from "expo-linking";
export default function Settings() {
  const joinCommunity = () => {
    let github_url = "https://github.com/theTrine333/LocAI";
    Link.openURL(github_url);
  };
  return (
    <ScrollView>
      <TouchableOpacity style={Styles.settingsBtn} onPress={joinCommunity}>
        <MaterialCommunityIcons name="github" size={24} color="black" />
        <Text>Join our community</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
