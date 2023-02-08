import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image, RefreshControl,
} from "react-native";
import axios from "axios";
import { Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import * as url from "url";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(254, 142, 89, 0.16)",
    padding: 20,
  },
  innercontainer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    margin: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    height: 75,
    width: 75,
    resizeMode: "contain",
    marginBottom: 5,
  },
  cardDetails: { alignItems: "center", marginBottom: 5 },
  productTitle: {
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center",
  },
  productCategory: {
    fontSize: 10,
    color: "#8C8FA5",
  },
  productPrice: { fontSize: 10, marginBottom: 5 },
});

function Products({route, navigation }) {
  const { categoryName } = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  alert(categoryName)
  // const nameCategory=JSON.stringify(categoryName);
  useEffect(() => {
    setLoading(true);
    let url=`https://fakestoreapi.com/products`;
    if (!categoryName){
      url=`https://fakestoreapi.com/products/category/${categoryName}`
    }
      // else {
    //   url=`https://fakestoreapi.com/products`;
    // }
    async function getProducts() {
      await axios
        .get(url)
        .then((res) => {
          setProducts(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
        });
    }
    getProducts();
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color="#FD5606"
          style={{ paddingVertical: 20 }}
        />
      ) : (
        <FlatList
            refreshControl={<RefreshControl refreshing={true} />}
          showsVerticalScrollIndicator={false}
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.innercontainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.cardDetails}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={styles.productTitle}
                >
                  {item.title}
                </Text>
                <Text style={styles.productCategory}>{item.category}</Text>
                <Text style={styles.productPrice}>
                  {item.price}${"    "}
                  <Icon name="star" color="#EFA315" size={10} />
                  {item.rating.rate}
                </Text>
              </View>

              <Button
                onPress={() =>
                  navigation.navigate("AddToCart", {
                    image: item.image,
                    title: item.title,
                    category: item.category,
                    price: item.price,
                    rating: item.rating.rate,
                    description: item.description,
                  })
                }
                title={"Buy Now"}
                color="#FD5606"
                buttonStyle={{ padding: 0, marginBottom: 5 }}
                titleStyle={{ fontSize: 10 }}
              />
            </View>
          )}
        ></FlatList>
      )}
    </View>
  );

}
export default Products;

