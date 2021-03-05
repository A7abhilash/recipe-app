import React from "react";
import { StyleSheet } from "react-native";
import { Card, Paragraph, Subheading } from "react-native-paper";
import SubItems from "../components/SubItems";

export default function CompleteRecipe({ navigation }) {
  const item = navigation.getParam("item");
  // console.log(item);
  return (
    <Card>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Title
        title={item.label}
        titleStyle={{ fontSize: 30 }}
        style={{ marginVertical: 15 }}
      />
      <Card.Content>
        {item.cuisineType.length && (
          <SubItems labelTitle="Cuisine Type" labels={item.cuisineType} />
        )}
        {item.mealType.length && (
          <SubItems labelTitle="Meal Type" labels={item.mealType} />
        )}
        {item.dishType.length && (
          <SubItems labelTitle="Dish Type" labels={item.dishType} />
        )}
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({});
