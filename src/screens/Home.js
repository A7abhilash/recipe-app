import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go Somewhere"
        onPress={() => navigation.navigate("Complete Recipe")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
