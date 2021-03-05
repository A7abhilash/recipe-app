import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import Header from "../containers/Header";
import About from "../screens/About";

const AboutStack = createStackNavigator(
  {
    About: {
      screen: About,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title="Home" />,
          headerTitleContainerStyle: {
            paddingBottom: 25,
          },
        };
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

export default AboutStack;
