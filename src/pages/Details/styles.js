import { StyleSheet } from "react-native";
import constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: constants.statusBarHeight + 10
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  caso: {
    padding: 24,
    borderRadius: 16,
    backgroundColor: "#fff",
    marginBottom: 16,
    marginTop: 48
  },
  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
    marginTop: 10
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: "#737380"
  },

  contactBox: {
    padding: 24,
    borderRadius: 16,
    backgroundColor: "#fff",
    marginBottom: 16
  },
  copyRight: {
    marginTop: 2,
    marginBottom: 2,
    fontSize: 11,
    color: "#737380"
  },

  copyRightBox: {
    padding: 3,
    borderRadius: 16,
    backgroundColor: "#fff",
    marginBottom: 5,
    alignItems: "center"
  },
  heroTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#13131A",
    lineHeight: 30
  },
  heroDescription: {
    fontSize: 30,
    color: "#737380",
    marginTop: 16
  },
  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  action: {
    backgroundColor: "#e02041",
    borderRadius: 16,
    height: 50,
    width: "48%",
    justifyContent: "center",
    alignItems: "center"
  },
  actionText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold"
  }
});
