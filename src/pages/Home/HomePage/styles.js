import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  scrollView: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  noticeBoard: {
    marginVertical: 30,
  },
  noticeTitle: {
    fontSize: 18,
    fontFamily: "Roboto-Medium",
    color: "#1c1c1c",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#555",
    marginTop: 5,
    marginBottom: 20,
  },
  noticeItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 6,
    borderWidth: 1,
    borderColor: "#007b7f",
    marginBottom: 15,
  },
  noticeDate: {
    fontWeight: "bold",
    color: "#1c1c1c",
    marginBottom: 5,
  },
  noticeText: {
    color: "#555",
  },
  linksSection: {
    marginBottom: 20,
  },
  linksTitle: {
    fontSize: 18,
    fontFamily: "Roboto-Medium",
    color: "#1c1c1c",
  },
});

export default styles;
