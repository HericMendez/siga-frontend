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
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: "Roboto-Medium",
    marginBottom: 10,
  },
  modalHeader: {
    flexDirection: "row",
    backgroundColor: "#006167",
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
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
    padding: 10,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  modalCell: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    color: "#333",
  },
  closeButton: {
    marginTop: 15,
    paddingVertical: 10,
    backgroundColor: "#006167",
    borderRadius: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontFamily: "Roboto-Medium",
  },
});

export default styles;
