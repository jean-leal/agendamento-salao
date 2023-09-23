import React from "react";

import { FlatList } from 'react-native-gesture-handler';

import { Text, Title, Touchable, Spacer, Box } from "../../styles";
import theme from "../../styles/theme.json";
import util from "../../util";


const DateTime = () => {
  return (
    <>
      <Text bold color="dark" hasPadding>
        Para quando você gostaria de agendar?
      </Text>
      <FlatList
        data={["a", "b", "c", "d", "e"]}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=> item}
         contentContainerStyle={{
              paddingLeft: 20
            }}
        renderItem={({item}) => (
          <Touchable
            key={item}
            width="70px"
            height="80px"
            spacing="0 10px 0 0"
            rounded="10px"
            direction="column"
            justify="center"
            align="center"
            border={`1px solid ${item === "a" ? theme.colors.primary : util.toAlpha(theme.colors.muted, 20)}`}
            background={item === "a" ? "primary" : "light"}
          >
            <Text small color={item === "a" ? "light" : undefined }>Dom</Text>
            <Title small color={item === "a" ? "light" : undefined }>19</Title>
            <Text small color={item === "a" ? "light" : undefined }>Abril</Text>
          </Touchable>               
        )}  
      />
      <Text bold color="dark" hasPadding>
        Que horas?
      </Text>
      <FlatList
        data={[
          ['14:30', '15:30'],
          ['15:30', '16:00'],
          ['16:30', '17:00'],
          ['17:30'],
        ]}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20
        }}
        renderItem={({item}) => (
          <Box direction="column" spacing={"0 10px 0 0"} >
            { item.map((horario) =>(
            <Touchable
            key={horario}
            width="100px"
            height="35px"
            spacing="0 0 5px 0"
            rounded="7px"
            direction="column"
            justify="center"
            align="center"
            border={`1px solid ${horario === "14:30" ? theme.colors.primary : util.toAlpha(theme.colors.muted, 20)}`}
            background={horario === "14:30" ? "primary" : "light"}
            >
              <Text color={horario === "14:30" ? "light" : undefined}>{horario}</Text>
            </Touchable>
          ))}
          </Box>
        )}
        
      />
          
         
    </>
  )
}

export default DateTime;

