import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import axios from "axios";
import { Button, Card, Image } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(254, 142, 89, 0.16)",
  },
  part1: {
    flex: 0.3,
  },
  part2: {
    flex: 0.7,
  },
  part1A: {
    flex: 0.2,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  part1B: {
    flex: 0.8,
    paddingHorizontal: 10,
  },
  part2A: {
    flex: 0.1,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  part2B: {
    flex: 0.9,
  },
  categoryCard: {
    backgroundColor: "white",
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
  },
  seeAll: { color: "#FD5606", fontSize: 10 },
  cardContainer: {
    borderRadius: 10,
    margin: 0,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  cardInnerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  cardImageContainer: {
    flex: 0.2,
    paddingRight: 20,
    alignItems: "center",
  },
  cardImage: {
    height: 75,
    width: 75,
    resizeMode: "contain",
  },
  cardDataContainer: { flex: 0.5, justifyContent: "space-evenly" },
  cardDetails: { fontSize: 10, fontWeight: "600" },
  cardActionContainer: {
    flex: 0.3,
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
  ratingIcon: {
    flexDirection: "row",
    margin: 5,
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  }, CatText:{
    fontWeight: "800"
  },
  cardStar: {
    fontSize: 10, marginLeft: 5
  }

});
function Home({ navigation }) {
  const [cate, setCate] = useState([]);
  const [products, setProducts] = useState([]);
  const [catloading, setCatLoading] = useState(false);
  const [proloading, setProLoading] = useState(false);
  useEffect(() => {
    async function getCategories() {
      setCatLoading(true);
      await axios
        .get("https://fakestoreapi.com/products/categories/")
        .then((res) => {
          setCate(res.data);
          setCatLoading(false);
        })
        .catch((err) => {
          setCatLoading(false);
          console.log(err.message);
        });
    }
    async function getProducts() {
      setProLoading(true);
      await axios
        .get("https://fakestoreapi.com/products/")
        .then((res) => {
          setProducts(res.data);
          setProLoading(false);
        })
        .catch((err) => {
          setProLoading(false);
          console.log(err.message);
        });
    }
    getProducts();
    getCategories();
  }, []);
  return (
    <View style={[styles.container]}>
      <View style={styles.part1}>
        <View style={styles.part1A}>
          <Text style={styles.CatText}>Categories</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.part1B}>
          {catloading ? (
            <ActivityIndicator size={"large"} color="#FD5606" />
          ) : (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={cate}
              renderItem={({ item }) => (
                <View
                  style={[
                    styles.categoryCard,
                    {
                      width: Dimensions.get("window").width / 3,
                    },
                  ]}
                >
                  <TouchableOpacity>
                    <Text style={{ textAlign: "center" }} onPress={() => navigation.navigate("Products",{categoryName: item})}>{item}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          )}
        </View>
      </View>
      <View style={styles.part2}>
        <View style={styles.part2A}>
          <Text style={styles.CatText}>Top Products</Text>
          <TouchableOpacity onPress={() => navigation.navigate("products")}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.part2B}>
          {proloading ? (
            <ActivityIndicator color={"#FD5606"} size={"large"} />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={products}
              renderItem={({ item }) => (
                <Card containerStyle={styles.cardContainer}>
                  <View style={styles.cardInnerContainer}>
                    <View style={styles.cardImageContainer}>
                      <Image
                        style={styles.image}
                        source={{ uri: item.image }}
                      ></Image>
                    </View>
                    <View style={styles.cardDataContainer}>
                      <Text numberOfLines={1} style={styles.cardDetails}>
                        {item.title}
                      </Text>
                      <Text style={styles.cardDetails}>{item.category}</Text>
                      <Text style={styles.cardDetails}>{item.price}$</Text>
                    </View>
                    <View style={styles.cardActionContainer}>
                      <View style={styles.ratingIcon}>
                        <Icon name="star" color="#EFA315" size={12} />
                        <Text style={styles.cardStar}>
                          {item.rating.rate}
                        </Text>
                      </View>
                      {}
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
                        titleStyle={{ fontSize: 10 }}
                      />
                    </View>
                  </View>
                </Card>
              )}
            ></FlatList>
          )}
        </View>
      </View>
      <StatusBar style="auto" backgroundColor="#FD5606" />
    </View>
  );
}

export default Home;
