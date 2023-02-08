import React, { useState } from "react";
import { Button } from "@rneui/themed";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(254, 142, 89, 0.16)",
  },
  subcontainer1: { flex: 0.8 },
  subcontainer2: { flex: 0.2, padding: 20, justifyContent: "space-evenly" },

  card: {
    backgroundColor: "white",
    margin: 20,
    borderRadius: 20,
    flexDirection: "row",
    padding: 20,
    height: 150,
  },

  c1: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  c2: {
    flex: 0.5,
    justifyContent: "space-evenly",
  },
  c3: {
    flex: 0.2,

    alignItems: "flex-end",
  },
  text: {
    fontSize: 12,
  },
  buttonCount: {
    flex: 0.5,
    height: 20,
    flexDirection: "row",
    backgroundColor: "#FD5606",
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
  priceText: { flexDirection: "row", justifyContent: "space-between" },
});
function Cart({ navigation }) {
  const [qty, setQty] = useState(5);
  const cartitem = [1, 2];
  const addPress = () => {
    setQty(qty + 1);
  };
  const subPress = () => {
    if (qty > 0) setQty(qty - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer1}>
        <FlatList
          data={cartitem}
          renderItem={(item) => (
            <View style={styles.card}>
              <View style={styles.c1}>
                <Image
                  style={{ height: 100, width: 100, resizeMode: "center" }}
                  source={{
                    uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                  }}
                ></Image>
              </View>
              <View style={styles.c2}>
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 12, fontWeight: "800" }}
                >
                  Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                </Text>
                <Text style={{ fontSize: 10 }}>men's clothing</Text>
                <View style={styles.buttonCount}>
                  <View style={styles.buttonLeft}>
                    <TouchableOpacity onPress={subPress}>
                      <Icon
                        name="remove-circle-sharp"
                        color={"white"}
                        size={30}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonText}>
                    <Text style={{ color: "white" }}>{qty}</Text>
                  </View>
                  <View style={styles.buttonRight}>
                    <TouchableOpacity onPress={addPress}>
                      <Icon name="add-circle-sharp" color={"white"} size={30} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.c3}>
                <View style={{ flex: 0.4 }}>
                  <Icon name="backspace" color={"#EFA315"} size={20} />
                </View>
                <View style={{ flex: 0.6 }}>
                  <Text style={{ fontSize: 10 }}>109.95$</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.subcontainer2}>
        <View style={styles.priceText}>
          <Text style={styles.text}>Sub-total</Text>
          <Text style={styles.text}>1000.56$</Text>
        </View>
        <View style={styles.priceText}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>10$</Text>
        </View>
        <View style={styles.priceText}>
          <Text style={[styles.text, { color: "#FD5606" }]}>Total</Text>
          <Text style={[styles.text, { color: "#FD5606" }]}>1010.56$</Text>
        </View>
        <Button
          onPress={() => alert("CheckOut Button Press")}
          title={"Checkout"}
          color="#FD5606"
          titleStyle={{ fontSize: 12 }}
          containerStyle={{ borderRadius: 10, marginTop: 10 }}
        />
      </View>
    </View>
  );
}
export default Cart;


