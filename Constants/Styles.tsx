import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./Colors";
export const { width, height } = Dimensions.get("screen");
export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: Colors.plainWhite,
  },
  chatList: {},
  rowView: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  iconImage: {
    height: height * 0.06,
    width: width * 0.14,
    borderRadius: 26,
  },
  versionText: {
    textAlign: "center",
    fontSize: 11,
    borderBottomWidth: 1,
    width: width * 0.26,
    alignSelf: "center",
  },
  rowButtons: {
    flexDirection: "row",
  },
  iconButton: {
    marginHorizontal: 3,
    borderWidth: 0.3,
    alignSelf: "center",
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.053,
    width: width * 0.12,
  },
  chatArea: {
    flexShrink: 1,
    minHeight: "73%",
    maxHeight: "80%",
    width: width * 0.95,
    alignSelf: "center",
    borderRadius: 8,
    marginTop: 5,
    paddingVertical: 10,
    backgroundColor: "#c0c0c0",
  },
  inputContainer: {
    maxHeight: height * 0.1,
    minHeight: height * 0.07,
    flexDirection: "row",
    width: width * 0.95,
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 0.5,
    borderRadius: 16,
    paddingHorizontal: 10,
  },
  promptInput: {
    maxHeight: height * 0.09,
    minHeight: height * 0.05,
    flexGrow: 1,
    marginVertical: 5,
    borderWidth: 0.03,
    width: width * 0.78,
    backgroundColor: Colors.grey,
    alignSelf: "center",
    borderRadius: 12,
    padding: 10,
    textAlignVertical: "center",
  },
  historyBox: {
    width: width,
    flexGrow: 1,
    minHeight: height * 0.8,
    maxHeight: height * 0.87,
    alignSelf: "center",
  },
  settingsBtn: {
    marginTop: 5,
    borderWidth: 1,
    width: width * 0.95,
    height: height * 0.06,
    alignSelf: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  settingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width * 0.9,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  settingsInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 8,
    marginTop: 5,
    width: width * 0.48,
    height: height * 0.05,
  },
  settingsHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  chat: {
    maxWidth: width * 0.9,
    marginTop: 5,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
  MarkdownSystem: {
    // General Markdown styles
    paragraph: {
      fontSize: 12,
      lineHeight: 24,
      color: Colors.primary,
    },
    // Styling for headings
    heading1: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#4CAF50",
    },
    heading2: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#2196F3",
    },
    // Styling for links
    link: {
      color: "#007bff",
      textDecorationLine: "underline",
    },
    // Styling for bold text
    strong: {
      fontWeight: "bold",
      color: "#000",
    },
    // Styling for italic text
    em: {
      fontStyle: "italic",
      color: "#777",
    },
    // Styling for list items
    listItem: {
      fontSize: 16,
      color: Colors.primary,
      marginVertical: 5,
    },
    code_inline: {
      // borderWidth: 1,
      borderColor: Colors.plainWhite,
      color: Colors.primary,
      backgroundColor: Colors.plainWhite,
      padding: 10,
      fontSize: 11,
      borderRadius: 4,
    },
    // Style for block code (e.g., ```java ... ```)
    code_block: {
      borderWidth: 1,
      color: Colors.primary,
      borderColor: "#CCCCCC",
      backgroundColor: Colors.plainWhite,
      padding: 10,
      borderRadius: 4,
      fontSize: 12,
    },
    text: {
      color: Colors.primary,
      fontSize: 11,
    },
  },
  MarkdownAssistant: {
    // General Markdown styles
    paragraph: {
      fontSize: 12,
      lineHeight: 24,
      color: Colors.plainWhite,
    },
    // Styling for headings
    heading1: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#4CAF50",
    },
    heading2: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#2196F3",
    },
    // Styling for links
    link: {
      color: "#007bff",
      textDecorationLine: "underline",
    },
    // Styling for bold text
    strong: {
      fontWeight: "bold",
      color: Colors.plainWhite,
    },
    // Styling for italic text
    em: {
      fontStyle: "italic",
      color: Colors.plainWhite,
    },
    // Styling for list items
    listItem: {
      fontSize: 16,
      color: Colors.plainWhite,
      marginVertical: 5,
    },
    code_inline: {
      // borderWidth: 1,
      borderColor: Colors.plainWhite,
      color: Colors.secondary,
      backgroundColor: Colors.primary,
      padding: 10,
      fontSize: 11,
      borderRadius: 4,
    },
    // Style for block code (e.g., ```java ... ```)
    code_block: {
      borderWidth: 1,
      color: Colors.primary,
      borderColor: "#CCCCCC",
      backgroundColor: Colors.plainWhite,
      padding: 10,
      borderRadius: 4,
      fontSize: 12,
    },
    text: {
      color: Colors.plainWhite,
      fontSize: 11,
    },
    bullet_list: { color: Colors.plainWhite, fontSize: 11 },
    ordered_list: { color: Colors.plainWhite, fontSize: 11 },
    list_item: {
      flexDirection: "row",
      justifyContent: "flex-start",
      color: Colors.plainWhite,
      fontSize: 11,
    },
    // @pseudo class, does not have a unique render rule
    bullet_list_icon: {
      marginLeft: 10,
      marginRight: 10,
      color: Colors.plainWhite,
      fontSize: 11,
    },
    // @pseudo class, does not have a unique render rule
    bullet_list_content: {
      flex: 1,
      color: Colors.plainWhite,
      fontSize: 11,
    },
    // @pseudo class, does not have a unique render rule
    ordered_list_icon: {
      marginLeft: 10,
      marginRight: 10,
      color: Colors.plainWhite,
      fontSize: 11,
    },
    // @pseudo class, does not have a unique render rule
    ordered_list_content: {
      flex: 1,
      color: Colors.plainWhite,
      fontSize: 11,
    },
  },
});
