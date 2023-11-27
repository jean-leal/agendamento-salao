import React from "react";
import { FlatList } from 'react-native-gesture-handler';
import {
  Box,
  GradientView,
  ScrollView,
  Cover,
  Text,
  Title,
  Touchable,
  Spacer,
} from "../../../styles";
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../../styles/theme.json'

import HeaderEsabelecimento from "../../../components/HeaderEstabelecimentos";

const Colaboradores = () => {
  return (
    <ScrollView background="light">
      <HeaderEsabelecimento />

      <Text bold color="dark" hasPadding>
        Colaboradores
      </Text>
      <FlatList
        data={["1", "2"]}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={{
          paddingLeft: 20,
          paddingRight: 20
        }}
        renderItem={({ item, index }) => {
          return (
            <Box
              row
              key={index}

              height="100px"
              spacing="10px 0px 0 0"
              rounded="10px"
              direction="column"
              justify="center"
              align="center"
              border={`1px solid ${colors.primary}`}
            //background={selected ? 'primary' : 'light'}
            //onPress={() => setAgendamento(dateISO)}
            >
              <Box width="80%">
                <Touchable align="center" justify="flex-start" row>
                  <Cover
                    width="80px"
                    height="80px"
                    circle
                    spacing="5px"
                  />
                  <Box>
                    <Title small >Nome Colaborador </Title>
                    <Text small >Email do colaborador</Text>
                    <Text small >telefone do colaborador</Text>
                  </Box>
                </Touchable>
              </Box>
              <Box width="15%">
                <Touchable
                  justify="flex-end"
                  align="flex-end"
                  width="100%"
                >
                  <AntDesign name="delete" size={24} color="red" />
                </Touchable>
              </Box>


            </Box>
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />

    </ScrollView>
  );
};

export default Colaboradores;
