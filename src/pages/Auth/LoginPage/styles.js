import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  innerContainer: {
    paddingHorizontal: 25,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
    marginBottom: 30,
  },
  icon: {
    marginRight: 5,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  registerText: {
    color: "#AD40AF",
    fontWeight: "700",
  },
});

export default styles;
