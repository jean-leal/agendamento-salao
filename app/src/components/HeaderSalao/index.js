import React from 'react';
import { Box, GradientView, Title, Text, Touchable, TextInput} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../styles/theme.json';


import { useSelector, useDispatch } from 'react-redux';

import theme from '../../styles/theme.json'


const HeaderSalao = () => {
  const {saloes} = useSelector(state => state.salao);
  
  return (    
    <>
    <GradientView
      end={{ x: 0, y: 1 }}
      style={{ height: "100%" }}
      colors={[colors.primary, colors.dark]}
      hasPadding
     >
      <Box align="center" justify="center" height="100px" removePaddingBottom row>
        <Icon name="chevron-left" color={theme.colors.light} size={30}/>
        <Touchable onPress={()=> replace("Home")}></Touchable>
        <Title align="center" color="light" >Selecione seu salão </Title>
      </Box>
    </GradientView>
    <Box hasPadding direction='column' background='light' spacing='10px 0 0'>
        <Title small> Estabelecimentos ({saloes.length})</Title>
        <TextInput 
          placeholder='Digite o nome do estabelecimento...'
          onChangeText={(value)=> dispatch(updateForm({inputFiltro: value}))}
          onFocus={()=> dispatch(updateForm({inputFiltroFoco: true}))}
          onBlur={()=> dispatch(updateForm({inputFiltroFoco: false}))}
          />
      </Box>
    </> 
  ) 
}

export default HeaderSalao;

