import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  table: {
    flexDirection: "row",
    backgroundColor: "#006167",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  header: {
    flex: 1,
    color: "#fff",
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  alertText: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 12,
    color: "#222",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  modalHeader: {
    flexDirection: "row",
    backgroundColor: "#006167",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  modalHeaderText: {
    flex: 1,
    color: "#fff",
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    fontSize: 14,
  },
  modalRow: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#eee",
  },
  modalCell: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  closeButton: {
    backgroundColor: "#006167",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 20,
  },
  closeButtonText: {
    color: "#fff",
    fontFamily: "Roboto-Bold",
    fontSize: 16,
  },
});

export default styles;
