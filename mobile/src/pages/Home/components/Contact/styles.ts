import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",

    paddingHorizontal: 15,
    backgroundColor: "#252525",

    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  initialLetterContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
  },

  initialLetter: {
    fontSize: 20,
    color: "#fff",
  },

  contactInfo: {
    width: "85%",
    paddingVertical: 15,

    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#545454",
  },

  name: {
    color: "#fff",
  },

  phone: {
    color: "#545454",
  },
});
