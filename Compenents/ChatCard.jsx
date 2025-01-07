import { View, Text } from "react-native";
import React from "react";
import Markdown from "react-native-markdown-display";
import { Styles } from "../Constants/Styles";
import { Colors } from "../Constants/Colors";

const ChatCard = ({ Chat }) => {
  const role = Chat.role;

  return (
    <View
      style={[
        Styles.chat,
        {
          alignSelf: role == "system" ? "flex-end" : "flex-start",
          backgroundColor:
            role == "system" ? Colors.plainWhite : Colors.primary,
        },
      ]}
    >
      {role == "system" ? (
        <Markdown style={Styles.MarkdownSystem}>{Chat.prompt}</Markdown>
      ) : (
        <Markdown style={Styles.MarkdownAssistant}>{Chat.prompt}</Markdown>
      )}
    </View>
  );
};

export default ChatCard;
