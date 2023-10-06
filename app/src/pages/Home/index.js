import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {useDispatch, useSelector} from 'react-redux';
import { allServicos, getSalao } from '../../store/modules/salao/actions';

import Header from '../../components/Header';
import Servico from '../../components/Servico';
import ModalAgendamento from "../../components/ModalAgendamento"

const Home = () => {
  const { servicos } = useSelector(state => state.salao)
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getSalao());
    dispatch(allServicos());
  }, [])

 return (
  <GestureHandlerRootView>
    <FlatList
    ListHeaderComponent={Header} 
    data={servicos}
    renderItem={(item)=> (<Servico servico={item} key={item}/>)}
    keyExtractor={(item) => item}
  >
  </FlatList>  
  <ModalAgendamento/>
  </GestureHandlerRootView>  
 )
}

export default Home;

// aula 2,29