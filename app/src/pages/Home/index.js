import React from 'react';

import { FlatList } from 'react-native';

import  Header  from '../../components/Header';
import Servico from '../../components/Servico'

import ModalAgendamento from "../../components/ModalAgendamento"

import { Box, Spacer } from '../../styles';

import { GestureHandlerRootView } from "react-native-gesture-handler";


const Home = () => {
 return (
  <GestureHandlerRootView>
    <FlatList
    ListHeaderComponent={Header} 
    data={["a", "b", "c", "d", "e"]}
    renderItem={(item)=> (<Servico key={item}/>)}
    keyExtractor={(item) => item}
  >
  </FlatList>  
  <ModalAgendamento></ModalAgendamento>
  </GestureHandlerRootView>  
 )
}

export default Home;

// aula 2,29