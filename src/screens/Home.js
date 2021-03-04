import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Search from "../components/Search";
import { APP_ID, APP_KEY } from "./../keys";

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("pizza");
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [query]);

  return (
    <View style={styles.container}>
      <Search searchQuery={setQuery} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
