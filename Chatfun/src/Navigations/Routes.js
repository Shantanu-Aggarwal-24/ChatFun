import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>HomeScreen</Text>
  </View>;
};

const Routes = () => {
 const userData = useSelector(state =>state.auth)

  return ( 
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!!userData?._id?<>{MainStack(Stack)}</>:<>{AuthStack(Stack)}</>}
        {/* {<>{AuthStack(Stack)}</>} */}
        {/* {<>{MainStack(Stack)}</>} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
