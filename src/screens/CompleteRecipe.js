import React from "react";
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button, Card, Subheading } from "react-native-paper";
import SubItems from "../components/SubItems";

export default function CompleteRecipe({ navigation }) {
  const item = navigation.getParam("item");
  // console.log(item);

  const pressHandler = (url) => {
    // console.log(url);
    Linking.openURL(url).catch(() => {
      Alert.alert("Error", "An error occurred during open this link...", [
        {
          text: "OK",
        },
      ]);
    });
  };

  return (
    <Card style={{ margin: 15, flex: 1 }}>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Title
        title={item.label}
        titleStyle={{ fontSize: 30 }}
        style={{ marginTop: 15 }}
      />
      <Card.Content style={{ flex: 1 }}>
        <ScrollView>
          {item?.cuisineType?.length && (
            <SubItems labelTitle="Cuisine Type" labels={item.cuisineType} />
          )}
          {item?.mealType?.length && (
            <SubItems labelTitle="Meal Type" labels={item.mealType} />
          )}
          {item?.dishType?.length && (
            <SubItems labelTitle="Dish Type" labels={item.dishType} />
          )}
          {item?.ingredientLines?.length && (
            <View style={{ marginBottom: 15 }}>
              <Subheading style={{ fontWeight: "bold" }}>
                Ingredients:
              </Subheading>
              {item.ingredientLines.map((ingredient, index) => (
                <View key={index + ingredient} style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "700" }}>{index + 1}. </Text>
                  <Text>{ingredient}</Text>
                </View>
              ))}
            </View>
          )}
          <Button onPress={() => pressHandler(item.url)} color="darkslateblue">
            More Info
          </Button>
        </ScrollView>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({});
