import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CompleteRecipe({ navigation }) {
  const item = navigation.getParam("item");
  console.log(item);
  return (
    <View>
      <Text>CompleteRecipe</Text>
      <Text>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
