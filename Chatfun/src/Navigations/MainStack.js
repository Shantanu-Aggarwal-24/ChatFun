import React from "react";
import navigationStrings from "../Constants/navigationStrings";
import * as Screens from "../Screens";
import TabRoutes from "./TabRoutes";

export default MainStack = (Stack) => {
  return (
    <>
      <Stack.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} />
      <Stack.Screen  name  = {navigationStrings.USERS} />
    </>
  );
};
