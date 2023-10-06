import React from 'react';
import { Box, GradientView, Cover, Title, Text, Badge, Touchable, Button, TextInput} from '../../styles';

import {colors} from '../../styles/theme.json';
import { Linking, Share } from 'react-native';

import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Header = () => {
  const { salao, servicos } = useSelector(state => state.salao);

  return (    
    <>         
      <Cover 
        image="https://imgs.search.brave.com/eApbbjdZCxljwwlVo18iYgkyDI5sVf7o9ZAF7G0jijE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MTQyOTYwMi9wdC9m/b3RvL2hhaXItYmVh/dXR5LXNhbG9uLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1M/ckU0SS1CUzJ1NEUt/aTBLNVFjektyU0VF/Q1JHcmdnTHZyWXFS/bDlfdFRVPQ"
        width= "100%"
        height= "300px">
        <GradientView  
          colors={['#21232f33', '#21232fe6']}
          hasPadding
          justify="flex-end"
        >
          <Badge background={salao.isOpened ? 'success' : 'danger'}>{salao.isOpened ? "ABERTO" : "FECHADO"}</Badge>
          <Title color='light'>{salao.nome}</Title>
          <Text color='light' >{salao?.endereco?.cidade}</Text>
        </GradientView>
      </Cover> 
      <Box background='light' align= 'center' row >
        <Box  row justify= 'space-between'>
          <Box>
            <Touchable 
              direction='column' 
              align='center'
              onPress={() => Linking.openURL(`tel:${salao.telefone}`)}>
              <Icon name='phone' size={24} color={colors.muted}/>
              <Text small spacing='10px 0 0 ' color='muted' >Ligar</Text>
            </Touchable>
          </Box>
          <Box>
            <Touchable 
              direction='column'
              align='center' 
              onPress={() => Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=-23.797092,-53.0598672`)}>
              <Icon name='map-marker' size={24} color={colors.muted}/>
              <Text small spacing='10px 0 0 ' color='muted' >Visitar</Text>
            </Touchable>
          </Box>
          <Box>
            <Touchable 
              direction='column' 
              align='center'
              onPress={() =>{
                Share.share({
                  message: `${salao.nome}`
                })
              }} >
              <Icon name='share' size={24} color={colors.muted}/>
              <Text small spacing='10px 0 0 ' color='muted' >Enviar</Text>
            </Touchable>
          </Box>         
        </Box>
        <Box hasPadding direction='column' align='center' justify='center'>
          <Button 
            icon='clock-check-outline'
            background='success'           
            mode='contained'
            uppercase={false}
            textColor='light'
          >Agendar Agora</Button>
          <Text small spacing='10px 0 0' color='muted'>
            Horários disponíveis
          </Text>
        </Box>
      </Box>
      <Box hasPadding direction='column' background='light' spacing='10px 0 0'>
        <Title small> Serviços ({servicos.length})</Title>
        <TextInput placeholder='Digite o nome do serviço...'/>
      </Box>
    </>   
  ) 
}

export default Header;

