import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";
import axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";
import { Formik } from "formik";
import { Button, Input } from "@rneui/themed";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  con1: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  con2: {
    flex: 0.5,
    padding: 30,
  },
  con3: {
    flex: 0.1,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "400",
    color: "#e14d2a",
    marginVertical: 20,
  },
  subHeading: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#eee",
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#F3F4F8",
  },
  buttonStyle: {
    backgroundColor: "#e14d2a",
    borderRadius: 10,
  },
  buttonContainerStyle: {
    width: "100%",
    alignSelf: "center",
    marginVertical: 10,
  },
  lable: {
    fontSize: 10,
    marginBottom: 5,
  },
  inputStyle: {
    fontSize: 10,
    paddingLeft: 10,
    marginHorizontal: 5,
  },
  errorStyle: { color: "red", fontSize: 10 },
});
function Login({ navigation},) {

  const checklogin = async (values) => {
    await axios
      .post("https://fakestoreapi.com/auth/login", {
        username: values.username,
        password: values.password,
      })
      .then((res) => {
        navigation.replace("homeNav");
        // console.log(res.data.token)


      })
      .catch((e) => alert("Invalid Username or Password"),[{text:"Cancel"}]);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        {

          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        },
        Dimensions.get("window").width > 600 && {
          alignSelf: "center",
          width: Dimensions.get("window").width / 2,
          height: Dimensions.get("window").height,
        },
      ]}
    >
      <View style={styles.con1}>
        <Text style={styles.heading}>Welcome Back!</Text>
        <Text style={styles.subHeading}>Sign in to continue.</Text>
      </View>
      <View style={styles.con2}>
        <Formik
          initialValues={{ username: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.password) {
              errors.password = "Required";
            }
            if (!values.username) {
              errors.username = "Required";
            }

            return errors;
          }}

          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              checklogin(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <View>
              <Input
                containerStyle={{ paddingHorizontal: 0 }}
                placeholder="mehmoud_abuqass"
                label="UserName"
                labelStyle={styles.lable}
                inputStyle={styles.inputStyle}
                inputContainerStyle={[
                  styles.input,
                  errors.username && touched.username && { borderColor: "red" },
                ]}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                errorStyle={styles.errorStyle}
                errorMessage={
                  errors.username && touched.username && errors.username
                }
                leftIcon={<Icon name="ios-person" size={20} color="#8C8FA5" />}
              ></Input>
              <Input
                placeholder="********"
                label="Password"
                containerStyle={{ paddingHorizontal: 0 }}
                labelStyle={styles.lable}
                inputStyle={styles.inputStyle}
                inputContainerStyle={[
                  styles.input,
                  errors.password && touched.password && { borderColor: "red" },
                ]}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                errorStyle={styles.errorStyle}
                secureTextEntry={true}
                errorMessage={
                  errors.password && touched.password && errors.password
                }></Input>
              <Button
                title="Sign In"
                titleStyle={{ fontSize: 16 }}
                onPress={handleSubmit}
                disabled={isSubmitting}
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.buttonContainerStyle}

              />
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.con3}>
        {
        }
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "#8C8FA5" }}>
            Don't have an account?
            <Text style={{ color: "#FD5606" }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
    </ScrollView>
  );
}
export default Login ;

