import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Styles } from "../Constants/Styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { main } from "../api/connector";
import ChatCard from "../Compenents/ChatCard";
import * as Constants from "expo-constants";
import LoadingChatCard from "../Compenents/LoadingChatCard";
import { Colors } from "../Constants/Colors";
export default function Chat({ navigation }) {
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  const submit = async () => {
    setConversation((convs) => [
      ...convs,
      { role: "system", prompt: prompt, time: getCurrentTime() },
    ]);
    setLoading(true);
    main(prompt)
      .then((e) => {
        setPrompt("");
        setLoading(false);
        setConversation((convs) => [
          ...convs,
          { role: "assistant", prompt: e, time: getCurrentTime() },
        ]);
      })
      .catch((e) => {
        setLoading(false);
        setPrompt("");
        console.log("Error :", e);
      });
  };

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.rowView}>
        <View>
          <Image
            source={require("../assets/images/icon.png")}
            style={Styles.iconImage}
          />
        </View>
        <View style={Styles.rowButtons}>
          <TouchableOpacity
            style={Styles.iconButton}
            onPress={() => {
              navigation.navigate("History");
            }}
          >
            <MaterialIcons name="history" size={26} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.iconButton}
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            <MaterialIcons name="settings" size={26} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.chatArea}>
        <FlatList
          data={conversation}
          renderItem={({ item }) => <ChatCard Chat={item} />}
          keyExtractor={(item, index) => item.time.toString()}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={loading ? <LoadingChatCard /> : <></>}
        />
      </View>

      <View style={Styles.inputContainer}>
        <TextInput
          style={Styles.promptInput}
          multiline={true}
          textAlignVertical="top"
          placeholder="Say something..."
          value={prompt}
          onChangeText={setPrompt}
          editable={loading ? false : true}
        />
        {loading ? (
          <ActivityIndicator
            size={28}
            style={[Styles.iconButton, { borderWidth: 0, marginLeft: 0 }]}
            color={Colors.primary}
          />
        ) : (
          <TouchableOpacity
            style={[Styles.iconButton, { borderWidth: 0, marginLeft: 0 }]}
            onPress={submit}
          >
            <MaterialIcons name="send" size={28} />
          </TouchableOpacity>
        )}
      </View>
      <Text style={Styles.versionText}>
        VERSION : {Constants.default.expoConfig.version}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
