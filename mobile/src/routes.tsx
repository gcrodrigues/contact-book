import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CreateContact from "./pages/CreateContact";

const Routes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Create" component={CreateContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
