import React from "react";
import { StatusBar} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {colors} from "./styles/theme.json";
import {navigationRef} from "./services/navigation"

import Login from "./pages/Login";
import Home from "./pages/Home";
import Agendamento from "./pages/Agendamento"

const Stack = createNativeStackNavigator();

const Routes = () => {
  return(
    <>
      <StatusBar backgroundColor={colors.dark}/>  
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            options={{headerShown: false}}
            name="Login"
            component={Login}
            />
          <Stack.Screen 
            options={{headerShown: false}}
            name="Home"
            component={Home}
            />
          <Stack.Screen 
            options={{headerShown: false}}
            name="Agendamento"
            component={Agendamento}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Routes;