import {
  Image,
  StyleSheet,
  Platform,
  View,
  TextInput,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { height, Styles } from "@/constants/Styles";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { sendMessageToBackend } from "@/api/scripts";
import { chat } from "@/types";
import Message from "@/components/Message";
import { useNavigation } from "expo-router";

export default function HomeScreen() {
  const [started, setStarted] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  // const [chats, setChats] = useState<chat[]>([{}]);
  const chats: chat[] = [
    {
      time: "21:13:46",
      role: "system",
      prompt: "Hello There",
    },
    {
      time: "21:13:48",
      role: "assistant",
      prompt: "How, how may i help you ?",
    },
    {
      time: "21:14:48",
      role: "system",
      prompt: "Not much actually, Can you tell me about yourself?",
    },
    {
      time: "21:15:46",
      role: "assistant",
      prompt: "Ofcourse yes, I'm a locally runned large language modal(llm)",
    },
    {
      time: "21:16:48",
      role: "system",
      prompt: "Oooh nice, so whats a language modal?",
    },
    {
      time: "21:17:48",
      role: "assistant",
      prompt:
        "It's just a subset of Artificial Intelligence that understands the human language",
    },
    {
      time: "21:18:48",
      role: "system",
      prompt: "Oooh nice, so whats a language modal?",
    },
    {
      time: "21:19:48",
      role: "assistant",
      prompt:
        "It's just a subset of Artificial Intelligence that understands the human language",
    },
  ];
  const theme = useColorScheme() ?? "light";
  const navigation = useNavigation();
  return (
    <ThemedView style={[Styles.mainContainer, { justifyContent: "center" }]}>
      <Image
        source={require("@/assets/images/icon.png")}
        style={[
          Styles.modalImage,
          { height: 120, width: 120, marginBottom: 10, alignSelf: "center" },
        ]}
        resizeMode="contain"
      />
      <ThemedText type="title">LOCAI</ThemedText>
      <ThemedText
        type="subtitle"
        style={{ marginTop: 40, textAlign: "center", color: "grey" }}
      >
        Free local GPT's for everyone{"\n"}All this knowledge-base backedup
      </ThemedText>
      <TouchableOpacity
        style={Styles.continueBtn}
        onPress={() => {
          navigation.navigate("chat");
        }}
      >
        <ThemedText style={Styles.continueText}>Continue</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}
