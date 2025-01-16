import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Styles } from "../Constants/Styles";
import * as Link from "expo-linking";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [markdownRendering, setMarkdownRendering] = useState(true);
  const [responseStreaming, setResponseStreaming] = useState(false);
  const [apiEndpoint, setApiEndpoint] = useState("http://localhost:11434");
  const [fontSize, setFontSize] = useState("14");
  const [timeout, setTimeout] = useState("30");

  const joinCommunity = () => {
    let github_url = "https://github.com/theTrine333/LocAI";
    Link.openURL(github_url);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {/* API Settings */}
      <Text style={Styles.settingsHeader}>API Settings</Text>
      <View style={Styles.settingsItem}>
        <Text>API Endpoint</Text>
        <TextInput
          style={Styles.settingsInput}
          value={apiEndpoint}
          onChangeText={setApiEndpoint}
          placeholder="http://localhost:11434"
        />
      </View>
      <View style={Styles.settingsItem}>
        <Text>API Timeout (seconds)</Text>
        <TextInput
          style={Styles.settingsInput}
          keyboardType="numeric"
          value={timeout}
          onChangeText={(value) => setTimeout(value.replace(/[^0-9]/g, ""))}
          placeholder="e.g. 30"
        />
      </View>

      {/* Support */}
      <Text style={Styles.settingsHeader}>Support</Text>
      <TouchableOpacity
        style={Styles.settingsBtn}
        onPress={() => Link.openURL("mailto:trinekaka@gmail.com")}
      >
        <MaterialCommunityIcons name="email" size={24} color="black" />
        <Text style={{ marginLeft: 10 }}>Contact Support</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.settingsBtn}
        onPress={() => Link.openURL("https://locai.app/documentation")}
      >
        <MaterialCommunityIcons name="file-document" size={24} color="black" />
        <Text style={{ marginLeft: 10 }}>View Documentation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.settingsBtn} onPress={joinCommunity}>
        <MaterialCommunityIcons name="github" size={24} color="black" />
        <Text style={{ marginLeft: 10 }}>Join our community</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
