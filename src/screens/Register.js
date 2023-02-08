import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import { Formik } from "formik";
import { Button, Input } from "@rneui/themed";
import axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  con1: {
    flex: 0.3,
    //backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  con2: {
    flex: 0.5,
    justifyContent: "center",
    // backgroundColor: "green",
    padding: 30,
  },
  con3: {
    flex: 0.2,
    //backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
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
function Register({ navigation }) {
  const userRegister = async (values) => {
    await axios
      .post("https://fakestoreapi.com/users", {
        username: values.username,
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        alert("Successfully Registered");
        navigation.replace("Login");
      })
      .catch((e) => {
        alert(e.message);
      });
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
        <Text style={styles.heading}>Create Account</Text>
        <Text style={styles.subHeading}>Sign up to continue.</Text>
      </View>
      <View style={styles.con2}>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            cpassword: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Required";
            } else if (values.username.length < 3) {
              errors.username = "too short";
            }
            if (!values.cpassword) {
              errors.cpassword = "Required";
            } else if (values.cpassword.length < 6) {
              errors.cpassword = "too short";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 6) {
              errors.password = "too short";
            }
            if (values.password != values.cpassword) {
              errors.cpassword = "not matched";
            }
            if (!values.email) {
              errors.email = "Email field is required";
            }
            // check the validation of email format.
            else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (values.email.length < 10) {
              errors.email = "too short";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              userRegister(values);
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
                placeholder="mahmoud_abuqass"
                containerStyle={{ paddingHorizontal: 0 }}
                label="Username"
                labelStyle={styles.lable}
                inputStyle={styles.inputStyle}
                inputContainerStyle={[
                  styles.input,
                  errors.username && touched.username && { borderColor: "red" },
                ]}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                errorStyle={{ color: "red", fontSize: 10 }}
                errorMessage={
                  errors.username && touched.username && errors.username
                }
                leftIcon={<Icon name="ios-person" size={20} color="#8C8FA5" />}
              ></Input>
              <Input
                placeholder="example@gmail.com"
                label="Email"
                containerStyle={{ paddingHorizontal: 0 }}
                labelStyle={styles.lable}
                inputStyle={styles.inputStyle}
                inputContainerStyle={[
                  styles.input,
                  errors.email && touched.email && { borderColor: "red" },
                ]}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                errorStyle={{ color: "red", fontSize: 10 }}
                errorMessage={errors.email && touched.email && errors.email}
                leftIcon={<Icon name="mail" size={20} color="#8C8FA5" />}
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
                errorStyle={{ color: "red", fontSize: 10 }}
                secureTextEntry={true}
                errorMessage={
                  errors.password && touched.password && errors.password
                }></Input>
              <Input
                placeholder="*******"
                label="Confirm Password"
                containerStyle={{ paddingHorizontal: 0 }}
                labelStyle={styles.lable}
                inputStyle={styles.inputStyle}
                inputContainerStyle={[
                  styles.input,
                  errors.cpassword &&
                    touched.cpassword && { borderColor: "red" },
                ]}
                onChangeText={handleChange("cpassword")}
                onBlur={handleBlur("cpassword")}
                value={values.cpassword}
                errorStyle={{ color: "red", fontSize: 10 }}
                secureTextEntry={true}
                errorMessage={
                  errors.cpassword && touched.cpassword && errors.cpassword
                }
              ></Input>
              <Button
                title="Sign Up"
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
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#8C8FA5" }}>
            Already have an account?{" "}
            <Text style={{ color: "#FD5606" }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
    </ScrollView>
  );
}
export default Register ;
