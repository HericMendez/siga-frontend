import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  fullName: {
    fontSize: 22,
    fontFamily: "Roboto-Medium",
    color: "#1c1c1c",
  },
  email: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#888",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Roboto-Medium",
    marginBottom: 10,
  },
  sectionContent: {
    marginBottom: 10,
  },
  sectionItemContainer: {
    marginBottom: 5,
  },
  sectionItem: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#1c1c1c",
    marginBottom: 5,
  },
});

export default styles;
