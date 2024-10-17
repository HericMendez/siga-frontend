import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollView: {
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  greetingText: {
    fontSize: 18,
    fontFamily: "Roboto-Medium",
    color: "#333333",
  },
  profileImage: {
    width: 35,
    height: 35,
  },
  imageBorderRadius: {
    borderRadius: 20,
  },
  switchContainer: {
    marginBottom: 15,
  },
  courseList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  listItemWrapper: {
    width: "48%",
    marginBottom: 10,
  },
});

export default styles;
