import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FD5606",
    alignItems: "center",
  },
  logoContainer: {
    flex: 0.4,
    justifyContent: "flex-end",
  },
  dataContainer: {
    flex: 0.3,
  },
  buttonContainer: {
    flex: 0.3,
  },
  name: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  email: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
  button: {
    backgroundColor: "white",
    width: 200,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FD5606",
    fontWeight: "bold",
  },
});
function Profile({ navigation}) {
  // const user=localStorage.getItem("userToken");
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Icon
          type="ionicon"
          name="person-circle-outline"
          color={"white"}
          size={200}
        />

      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.name}>{alert()}</Text>
        <Text style={styles.email}>Test@gmail.com</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Profile;

