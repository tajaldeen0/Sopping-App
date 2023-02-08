import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button, Image } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FD5606",
  },
  part1: {
    flex: 0.2,
  },
  part2: {
    flex: 0.8,
    backgroundColor: "#eee",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  part2Con1: { flex: 0.8, margin: 10 },
  part2Con2: { flex: 0.2, justifyContent: "space-between", margin: 10 },
  card: {
    flex: 1,
    backgroundColor: "white",
    margin: 20,
    borderRadius: 20,
    flexDirection: "row",
    padding: 20,
  },
  cardLeft: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  cardData: {
    flex: 0.6,
    //backgroundColor: "#bbbbbb",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
  },
  cardRight: {
    flex: 0.2,
    //backgroundColor: "#eee",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  heading: {
    fontSize: 12,
    fontWeight: "800",
    color: "#8c8c8c",
  },
  subheading: {
    fontSize: 12,
    color: "#8c8c8c",
  },
  image: { height: 75, width: 75, resizeMode: "contain" },
  cardTitle: { fontSize: 12, fontWeight: "800" },
  buttonCount: {
    flex: 0.7,
    height: 40,
    flexDirection: "row",
    backgroundColor: "#ff5a33",
    borderRadius: 10,
  },
  buttonLeft: {
    flex: 0.3,
    backgroundColor: "#FD5606",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    flex: 0.4,
    backgroundColor: "rgba(254, 142, 89, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRight: {
    flex: 0.3,
    backgroundColor: "#FD5606",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: { fontSize: 10 },
});
function AddToCart({ navigation, route }) {
  const { image, title, category, price, rating, description } = route.params;
  const [count, setCount] = useState(0);
  const addPress = () => {
    setCount(count + 1);
  };
  const subPress = () => {
    if (count > 0) setCount(count - 1);
  };
  const buttonPress = () => {
    if (count > 0) {
      navigation.navigate("Cart");
    } else {
      alert("Atleast select one product");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.part1}>
        <View style={styles.card}>
          <View style={styles.cardLeft}>
            <Image
              style={styles.image}
              source={{
                uri: image,
              }}
            ></Image>
          </View>
          <View style={styles.cardData}>
            <Text numberOfLines={2} style={styles.cardTitle}>
              {title}
            </Text>
            <Text style={styles.text}>{category}</Text>
            <Text style={styles.text}>{price}</Text>
          </View>
          <View style={styles.cardRight}>
            <Icon name="star" color={"orange"} size={12} />
            <Text style={styles.text}>{rating}</Text>
          </View>
        </View>
      </View>
      <View style={styles.part2}>
        <View style={styles.part2Con1}>
          <ScrollView style={{ flex: 1 }}>
            <Text style={styles.heading}>Product Name</Text>
            <Text style={styles.subheading}>{title} </Text>
            <Text></Text>

            <Text style={styles.heading}>Product Description</Text>
            <Text style={styles.subheading}>{description}</Text>
          </ScrollView>
        </View>
        <View style={styles.part2Con2}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Product Quantity</Text>
            <View style={styles.buttonCount}>
              <View style={styles.buttonLeft}>
                <TouchableOpacity onPress={subPress}>
                  <Icon name="remove-circle-sharp" color={"white"} size={30} />
                </TouchableOpacity>
              </View>
              <View style={styles.buttonText}>
                <Text>{count}</Text>
              </View>
              <View style={styles.buttonRight}>
                <TouchableOpacity onPress={addPress}>
                  <Icon name="add-circle-sharp" color={"white"} size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Button
            title={"Add to Cart"}
            color="#FD5606"
            titleStyle={{ fontSize: 12 }}
            buttonStyle={{
              borderRadius: 10,
            }}
            onPress={buttonPress}
          />
        </View>
      </View>
      <StatusBar style="auto" backgroundColor={"#FD5606"} />
    </View>
  );
}

export default AddToCart;
