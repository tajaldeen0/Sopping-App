import React from "react";

import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FD5606",
  },
  subContainer1: {
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  subContainer2: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  iconbody: {
    height: 75,
    width: 75,
    borderRadius: 37.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 36,
    color: "white",
    fontWeight: "400",
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
function First({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <View style={styles.iconbody}>
          <Icon name="md-cart-outline" color="#FD5606" size={50}></Icon>
        </View>

        <Text style={styles.headerText}>Shopping App</Text>
      </View>
      <View style={styles.subContainer2}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor={"#FD5606"}></StatusBar>
    </View>
  );
}


export default First;
