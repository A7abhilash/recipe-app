import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator, Chip, Colors } from "react-native-paper";
import RecipeCard from "../components/RecipeCard";
import Search from "../components/Search";
import { APP_ID, APP_KEY } from "./../keys";

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("pizza");
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("Called");
    setList([]);
    setLoading(true);
    setError(false);
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data) {
          setList(data.hits);
        }
      })
      .catch((err) => {
        // console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  const pressHandler = (item) => {
    // console.log(item.label);
    navigation.navigate("Complete Recipe", { item });
  };

  console.log(list[0]);

  return (
    <View style={styles.container}>
      <Search searchQuery={setQuery} />
      {loading && <ActivityIndicator animating={true} color={Colors.red800} />}
      {error && (
        <Chip icon="cancel" selectedColor="red" textStyle={styles.errorText}>
          Error fetching data...
        </Chip>
      )}
      {!loading &&
        !error &&
        (list.length ? (
          <FlatList
            keyExtractor={(item) => item.recipe.image}
            data={list}
            style={styles.list}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => pressHandler(item.recipe)}>
                <RecipeCard item={item.recipe} />
              </TouchableOpacity>
            )}
          />
        ) : (
          <Chip icon="cancel" selectedColor="red" textStyle={styles.errorText}>
            No recipe found...
          </Chip>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  errorText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  list: {
    // flex: 1,
    // flexDirection: "row",
    marginBottom: 100,
  },
});
