import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AboutStack from "../stacks/AboutStack";
import HomeStack from "../stacks/HomeStack";

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    About: AboutStack,
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 18,
        fontWeight: "600",
        paddingBottom: 12,
        flexDirection: "row",
      },
      activeTintColor: "darkslateblue",
    },
  }
);

export default createAppContainer(TabNavigator);
