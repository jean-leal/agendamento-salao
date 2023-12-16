import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import { colors } from "./styles/theme.json";
import { navigationRef } from "./services/navigation";

//rotas para todos usuarios
import Login from "./pages/Login";

//rotas de clientes
import Home from "./pages/Home";
import Agendamento from "./pages/Agendamento";
import EncontrarSalao from "./pages/EncontrarSalao";

//rotas de estebelecimentos
import HomeEstabelecimento from "./pages/Estabelecimento/HomeEstabelecimento";
import Clientes from "./pages/Estabelecimento/Clientes";
import Horarios from "./pages/Estabelecimento/Horarios";
import Colaboradores from "./pages/Estabelecimento/Colaboradores";
import Servicos from "./pages/Estabelecimento/Servicos";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//componente de navegação por botoes no rodapé
const HomeTabsEstabelecimento = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: "Início",
            tabBarIcon: ({ color, size }) => (<AntDesign name="home" color={color} size={size} />)
          }}
          name="HomeTabEstabelecimento"
          component={HomeEstabelecimento}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: "Clientes",
            tabBarIcon: ({ color, size }) => (<AntDesign name="team" color={color} size={size} />)
          }}
          name="Clientes"
          component={Clientes}
        />
         <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: "Colaboradores",
            tabBarIcon: ({ color, size }) => (<AntDesign name="contacts" color={color} size={size} />)
          }}
          name="Colaboradores"
          component={Colaboradores}
        />
         <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: "Serviços",
            tabBarIcon: ({ color, size }) => (<AntDesign name="tool" color={color} size={size} />)
          }}
          name="Servicos"
          component={Servicos}
        />
         <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: "Horários",
            tabBarIcon: ({ color, size }) => (<AntDesign name="clockcircleo" color={color} size={size} />)
          }}
          name="Horarios"
          component={Horarios}
        />
      </Tab.Navigator >
  )
}

const Routes = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.dark} />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Login">
          {/* ROTAS DE TODOS */}
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          {/* ROTAS DE USUARIO */}
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Agendamento"
            component={Agendamento}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="EncontrarSalao"
            component={EncontrarSalao}
          />
          {/* ROTAS DE ESTABELECIMENTO (passando primeiro pela HomeTabsEstabelecimento)*/}
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeTabsEstabelecimento"
            component={HomeTabsEstabelecimento}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Routes;