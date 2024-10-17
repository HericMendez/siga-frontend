const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  disciplinaContainer: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  sigla: {
    fontWeight: "bold",
    fontSize: 18,
  },
  disciplina: {
    fontSize: 16,
    marginBottom: 8,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
});

export default styles;
