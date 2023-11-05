import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from 'react-redux';

import { allSaloes } from '../../store/modules/salao/actions';
import Salao from '../../components/Salao';
import { View } from "react-native";
import HeaderSalao from '../../components/HeaderSalao';

const Agendamento = () => {
  const dispatch = useDispatch();
  const { saloes, form } = useSelector(state => state.salao);

  const finalSaloes =  form.inputFiltro.length > 0 ? saloes.filter((s)=> {
    const titulo = s.titulo.toLowerCase().trim();
    const arrSearch = form.inputFiltro. toLowerCase().trim().split(' ');
    return arrSearch.every((w) => titulo.search(w) !== - 1)
    }): saloes

  useEffect(() => {
    dispatch(allSaloes())
  }, [])
  return (
    <GestureHandlerRootView >
      <View height="100%" background="dark">
        <FlatList
          ListHeaderComponent={HeaderSalao}
          data={saloes}
          renderItem={(salao) => (<Salao salao={salao} key={salao} />)}
          keyExtractor={(salao) => salao}
        >
        </FlatList>
      </View>

    </GestureHandlerRootView>
  )
}

export default Agendamento;
