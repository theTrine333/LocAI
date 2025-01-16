import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../Constants/Colors";
import { Styles } from "../Constants/Styles";
import SkeletonSkimmer, { EanimationType } from "react-native-skeleton-skimmer";

const LoadingChatCard = () => {
  return (
    <View
      style={[
        Styles.chat,
        {
          alignSelf: "flex-start",
          backgroundColor: Colors.primary,
          paddingHorizontal: 0,
        },
      ]}
    >
      <SkeletonSkimmer
        width={250}
        height={40}
        color={Colors.primary}
        highlightColor="#A9A9A9"
        duration={2000}
        animationType={EanimationType.linear}
        style={[Styles.chat, { marginHorizontal: 0, marginTop: 0 }]}
        animationStyle={Styles.customAnimationStyle}
      />
    </View>
  );
};

export default LoadingChatCard;
