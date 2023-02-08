

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Home from "../screens/Home";
import  Profile from "../screens/Profile";
import  Categories from "../screens/Categories";
import Products  from "../screens/Products";
import AddToCart from "../screens/Addtocart";
import First from "../screens/FirstScreen";
import  Login  from "../screens/Login";
import Register from "../screens/Register";
import  Cart  from "../screens/Cart";
import { Image, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#FD5606",
        },
        tabBarActiveTintColor: "#FD5606",
        tabBarInactiveTintColor: "#8C8FA5",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.logoStyle}
              source={
                focused
                  ? require("../assets/images/homeactive.png")
                  : require("../assets/images/home.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.logoStyle}
              source={
                focused
                  ? require("../assets/images/activecategory.png")
                  : require("../assets/images/category.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.logoStyle}
              source={
                focused
                  ? require("../assets/images/productactive.png")
                  : require("../assets/images/product.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.logoStyle}
              source={
                focused
                  ? require("../assets/images/activecart.png")
                  : require("../assets/images/cart.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.logoStyle}
              source={
                focused
                  ? require("../assets/images/personactive.png")
                  : require("../assets/images/person.png")
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Welcome"
          component={First}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="homeNav"
          component={HomeNav}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="AddToCart"
          component={AddToCart}
          options={{
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#FD5606",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export { Nav };

const styles = StyleSheet.create({
  logoStyle: {
    width: 26,
    height: 32,
    resizeMode: "contain",
  },
});
