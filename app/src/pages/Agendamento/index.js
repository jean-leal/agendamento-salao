import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {useDispatch, useSelector} from 'react-redux';

import { allServicos, getSalao } from '../../store/modules/salao/actions';
import Header from '../../components/Header';
import Servico from '../../components/Servico';
import ModalAgendamento from "../../components/ModalAgendamento"

const Agendamento = () => {
  const { servicos, form } = useSelector(state => state.salao)
  const dispatch = useDispatch();

  const finalServicos =  form.inputFiltro.length > 0 ? servicos.filter((s)=> {
    const titulo = s.titulo.toLowerCase().trim();
    const arrSearch = form.inputFiltro. toLowerCase().trim().split(' ');
    return arrSearch.every((w) => titulo.search(w) !== - 1)
    }): servicos

  useEffect(() =>{
    dispatch(getSalao());
    dispatch(allServicos());
  }, [])

 return (
  <GestureHandlerRootView>
    <FlatList
    ListHeaderComponent={Header} 
    data={finalServicos}
    renderItem={(servico)=> (<Servico servico={servico} key={servico}/>)}
    keyExtractor={(servico) => servico}
  >
  </FlatList>  
  <ModalAgendamento/>
  </GestureHandlerRootView>  
 )
}

export default Agendamento;
