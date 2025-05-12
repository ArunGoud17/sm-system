import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // keep only one justifyContent
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  header: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: "#03cffc",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },

  middle: {
    alignItems: "center",
    flex: 10,
    width: "100%",
  },

  bgImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 10,
  },

  button: {
    backgroundColor: "#3b5998",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    width: "100%",
    backgroundColor: "#03cffc",
  },

  footerText: {
    fontSize: 14,
    color: "#3b5998",
  },
});

export default styles;
