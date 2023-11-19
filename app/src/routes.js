import React from "react";
import { StatusBar} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {colors} from "./styles/theme.json";
import {navigationRef} from "./services/navigation"

import Login from "./pages/Login";
import Home from "./pages/Home";
import Agendamento from "./pages/Agendamento";
import EncontrarSalao from "./pages/EncontrarSalao";
import HomeEstabelecimento from "./pages/Estabelecimento/HomeEstabelecimento";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return(
    <>
      <StatusBar backgroundColor={colors.dark}/>  
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Login">
          {/* ROTAS DE TODOS */}
          <Stack.Screen 
            options={{headerShown: false}}
            name="Login"
            component={Login}
            />
            {/* ROTAS DE USUARIO */}
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
            <Stack.Screen 
            options={{headerShown: false}}
            name="EncontrarSalao"
            component={EncontrarSalao}
            />
            {/* ROTAS DE ESTABELECIMENTO */}
            <Stack.Screen 
            options={{headerShown: false}}
            name="HomeEstabelecimento"
            component={HomeEstabelecimento}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Routes;