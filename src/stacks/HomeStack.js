import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import Header from "../containers/Header";
import CompleteRecipe from "../screens/CompleteRecipe";
import Home from "../screens/Home";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title="Home" />,
          headerTitleContainerStyle: {
            paddingBottom: 25,
          },
        };
      },
    },
    "Complete Recipe": {
      screen: CompleteRecipe,
      navigationOptions: {
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "600",
        },
        headerTintColor: "white",
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "darkslateblue",
      },
    },
  }
);

export default HomeStack;
