import React from "react";
import { View, StyleSheet } from "react-native";
import { Chip, Subheading } from "react-native-paper";

export default function SubItems({ labelTitle, labels }) {
  return (
    <View style={styles.container}>
      <Subheading style={styles.labelTitle}>{labelTitle}:</Subheading>
      {labels.map((label) => (
        <Chip key={label} style={styles.label}>
          {label}
        </Chip>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    flexWrap: "wrap",
  },
  labelTitle: {
    fontWeight: "600",
    marginRight: 10,
  },
  label: {
    margin: 2,
    height: 25,
    alignItems: "center",
  },
});
