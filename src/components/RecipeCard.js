import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export default function RecipeCard({ item }) {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Title title={item.label} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 5,
    borderRadius: 10,
  },
  actionBtn: {
    marginVertical: 1,
  },
});
