import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,TouchableOpacity
} from "react-native";
import axios from "axios";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(254, 142, 89, 0.16)",
    alignItems: "center",
    padding: 20,
  },
  innercontainer: {
    backgroundColor: "white",
    flexDirection: "column",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
function Categories({navigation}) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function getCategories() {
      await axios
        .get("https://fakestoreapi.com/products/categories")
        .then((res) => {
          setCategories(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
        });
    }
    getCategories();
  }, []);
  const toUpperCaseChar = text => {
  const arr = text.split(' ');
  let textCamel = '';
  for (let i = 0; i < arr.length; i++) {
    const firstChar = arr[i][0].toUpperCase();
    textCamel += firstChar + arr[i].slice(1) + ' ';
  }
  textCamel = textCamel.trim();
  return textCamel;
};
  const Item = ({name}) => (
      <TouchableOpacity
          style={[styles.innercontainer,{height:Dimensions.get("window").height/ 5,width:Dimensions.get("window").width/2.5}]}
          onPress={() => {
            navigation.navigate('Products', {categoryName: name});
          }}>
        <Text >{toUpperCaseChar(name)}</Text>
      </TouchableOpacity>
  );
    const renderItem = ({item}) => <Item name={item} />;

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
          data={categories}
          numColumns={2}
          renderItem={renderItem}
        ></FlatList>
      )}
    </View>
  );
}
export default Categories;
