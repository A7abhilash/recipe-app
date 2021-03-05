import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

export default function Search({ searchQuery }) {
  const [text, setText] = useState("");

  const handlePress = () => {
    if (!text) {
      Alert.alert("Error", "Please enter something", [
        {
          text: "Understood",
        },
      ]);
    } else {
      searchQuery(text);
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        // placeholder="Search something..."
        label="Search food..."
        onChangeText={(val) => setText(val)}
        value={text}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <FontAwesome name="search" size={25} color="#eee" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // marginHorizontal: 10,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    flex: 7,
  },
  button: {
    backgroundColor: "darkslateblue",
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    padding: 10,
    borderRadius: 8,
  },
});
