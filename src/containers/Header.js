import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

export default function Header() {
  return (
    <Appbar.Header style={styles.appbar}>
      <Appbar.Content title="Recipe App" titleStyle={styles.headerText} />
    </Appbar.Header>
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
