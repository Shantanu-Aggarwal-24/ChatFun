import * as React from "react";
import { Text, View, Image } from "react-native";
import * as Screens from "../Screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationStrngs from "../Constants/navigationStrings";
import imagePath from "../Constants/imagePath";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrngs.CHATS}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name={navigationStrngs.STATUS}
        component={Screens.Status}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ tintColor: focused ? "blue" : "black" }}
                source={imagePath.icStatus}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrngs.CALLS}
        component={Screens.Calls}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ tintColor: focused ? "blue" : "black" }}
                source={imagePath.icCalls}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrngs.CAMERA}
        component={Screens.Camera}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ tintColor: focused ? "blue" : "black" }}
                source={imagePath.icCamera}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrngs.CHATS}
        component={Screens.Chats}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ tintColor: focused ? "blue" : "black" }}
                source={imagePath.icChats}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrngs.SETTINGS}
        component={Screens.Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ tintColor: focused ? "blue" : "black" }}
                source={imagePath.icSettings}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
