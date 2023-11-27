import React from "react";
import moment from "moment/min/moment-with-locales";
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch } from "react-redux";

import { updateAgendamento } from "../../store/modules/salao/actions";
import { Text, Title, Touchable, Box, Cover } from "../../styles";
import theme from "../../styles/theme.json";
import util from "../../util";

moment.locale('pt-br')

const AgendamentoDia = () => {

  return (
    <>
      <Text bold color="dark" hasPadding >
        Agendamentos do dia
      </Text>
      <FlatList
        data={["1", "2", "1", "2", "1", "2"]}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20
        }}
        renderItem={({ item, index }) => {
          return (
            <Touchable
              key={index}
              width="150px"
              height="180px"
              spacing="0 10px 0 0"
              rounded="10px"
              direction="column"
              justify="center"
              align="center"
              border={`1px solid`}
            //background={selected ? 'primary' : 'light'}
            //onPress={() => setAgendamento(dateISO)}
            >

              <Box align="center" justify="center" >
                <Title small >10:00</Title>
                <Cover
                  width="50px"
                  height="50px"
                  circle
                  spacing="0"
                />
                <Text small >Cliente</Text>
              </Box>
              <Box
                height="30px"
                background='primary'
                justify="center"
                align="center"
                rounded="0px 5px 0px 5px"
              >
                <Text
                  small
                  color="light"
                >
                  servico
                </Text>
              </Box>
            </Touchable>
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text bold color="dark" hasPadding>
        Horários disponíveis hoje
      </Text>
      <FlatList
        data={["1", "2"]}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20
        }}
        renderItem={({ item, index }) => {
          return (
            <Touchable
              key={index}
              width="80px"
              height="45px"
              spacing="0 10px 0 0"
              rounded="10px"
              direction="column"
              justify="center"
              align="center"
              border={`1px solid`}
            >
              <Box 
                height="30px"                 
                justify="center" 
                align="center"                
                >
                <Title small>
                  10:00
                </Title>
              </Box>
            </Touchable>
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  )
}

export default AgendamentoDia;

