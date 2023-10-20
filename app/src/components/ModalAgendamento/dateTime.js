import React from "react";
import moment from "moment/min/moment-with-locales";
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch } from "react-redux";

import { updateAgendamento } from "../../store/modules/salao/actions";
import { Text, Title, Touchable, Box } from "../../styles";
import theme from "../../styles/theme.json";
import util from "../../util";

moment.locale('pt-br')

const DateTime = ({ 
  servico, 
  agenda, 
  dataSelecionada, 
  horaSelecionada, 
 horariosDisponiveis,
}) => {

  const dispatch = useDispatch();

  const setAgendamento = (value, isTime = false) => {
    const { horariosDisponiveis } = util.selectAgendamento(agenda, isTime ? dataSelecionada : value)
    let data = !isTime ? `${value}T${horariosDisponiveis[0][0]}`: `${dataSelecionada}T${value}`
    dispatch(updateAgendamento({ data }))
  }
  return (
    <>
      <Text bold color="dark" hasPadding>
        Para quando você gostaria de agendar?
      </Text>
      <FlatList
        data={agenda}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=> item}
         contentContainerStyle={{
              paddingLeft: 20
            }}
        renderItem={({item}) => {
          const date = moment(Object.keys(item)[0]);
          const dateISO = moment(date).format('YYYY-MM-DD');
          const selected = dateISO === dataSelecionada;
          return (
          <Touchable
            key={dateISO}
            width="70px"
            height="80px"
            spacing="0 10px 0 0"
            rounded="10px"
            direction="column"
            justify="center"
            align="center"
            border={`1px solid ${item === "a" ? theme.colors.primary : util.toAlpha(theme.colors.muted, 20)}`}
            background={selected ? "primary" : "light"}
            onPress={() => setAgendamento(dateISO)}
          >
            <Text small color={selected ? "light" : undefined }>{util.diasSemana[date.day()]}</Text>
            <Title small color={selected ? "light" : undefined }>{date.format('DD')}</Title>
            <Text small color={selected ? "light" : undefined }>{date.format('MMMM')}</Text>
          </Touchable>               
        )}}
      />
      <Text bold color="dark" hasPadding>
        Que horas?
      </Text>
      <FlatList
        data={horariosDisponiveis}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20
        }}
        renderItem={({item}) => (
          <Box direction="column" spacing={"0 10px 0 0"} >
            { item.map((horario, index) => { 
            const selected = horario === horaSelecionada
            return (
            <Touchable
            key={index}
            width="100px"
            height="35px"
            spacing="0 0 5px 0"
            rounded="7px"
            direction="column"
            justify="center"
            align="center"
            border={`1px solid ${selected ? theme.colors.primary : util.toAlpha(theme.colors.muted, 20)}`}
            background={selected ? "primary" : "light"}
            onPress={() => setAgendamento(horario, true)}
            >
              <Text color={selected ? "light" : undefined}>{horario}</Text>
            </Touchable>
          )
          })
        }
          </Box>
        )}
        
      />
          
         
    </>
  )
}

export default DateTime;

