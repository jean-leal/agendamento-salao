import React from "react";
import { Text, Box, Cover, Title, Spacer, Button, Touchable } from "../../../styles/index";
import util from "../../../util";
import { replace } from "../../../services/navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconButton, MD3Colors } from 'react-native-paper';


const AgendamentoAtual = ({ user }) => {

  return (
    <>
      <Box hasPadding removePaddingTop align="center" spacing="10px 0px 0px 0px">
        <Box align="flex-start" spacing="10px 0px 20px 0px">
          <Title small color="dark">Agendamento</Title>
        </Box>
        <Box row >
          <Cover
            image={`${util.AWS.bucketURL}/${user.foto}`}
            width="100px"
            height="100px"
          />
          <Box spacing="0px 0px 0px 10px">
            <Text color="dark">Salao Teste</Text>
            <Text color="dark">Rua Armando Cerci, n° 606</Text>
            <Text color="dark">Fone: 44 998955740</Text>
            <Spacer />
            <Text color="success" bold>10/12/2023 - 12:00 h </Text>
          </Box>

        </Box>

      </Box>
      <Box hasPadding removePaddingTop removePaddingBot align="center" spacing="10px 0px 0px 0px">
        <Touchable
          rounded="5px"
          background="primary"
          hasPadding
          row
          align="center"
          justify="center"
          onPress={() => replace('EncontrarSalao')}

        >
          <Box align="center">
            <Text color="light">Novo Agendamento</Text>
          </Box>

        </Touchable>
      </Box>
    </>
  )
}

export default AgendamentoAtual;
