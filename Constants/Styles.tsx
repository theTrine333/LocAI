import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./Colors";
export const { width, height } = Dimensions.get("screen");
export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: Colors.plainWhite,
  },
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
    height: height * 0.06,
    width: width * 0.14,
  },
  chatArea: {
    flexGrow: 1,
    minHeight: height * 0.4,
    maxHeight: height * 0.78,
    width: width * 0.95,
    alignSelf: "center",
    borderRadius: 8,
    marginTop: 5,
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
    width: width * 0.76,
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
});
