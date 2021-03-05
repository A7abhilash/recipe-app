import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";

export default function Header() {
  return (
    <View style={styles.appbar}>
      <Appbar.Content title="Recipe App" titleStyle={styles.headerText} />
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: "darkslateblue",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
  },
});
