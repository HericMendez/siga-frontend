import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dayContainer: {
    marginBottom: 15,
  },
  dayHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#006167",
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",

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
    textAlign: "left",
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    marginEnd: 5,
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
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  modalRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  modalLabel: {
    flex: 1,
    fontWeight: "bold",
  },
  modalValue: {
    flex: 2,
  },
  modalCell: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
  },
  closeButton: {
    backgroundColor: "#006167",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default styles;
