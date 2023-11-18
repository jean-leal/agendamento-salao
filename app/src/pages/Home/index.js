import React from "react";
import {
  Box,
  GradientView,
  ScrollView,
  Cover,
  Text,
  Title,
  Touchable,
  Spacer,
} from "../../styles";

import { useDispatch, useSelector } from "react-redux";

import { colors } from "../../styles/theme.json";
import util from "../../util";
import theme from "../../styles/theme.json"
import { replace } from "../../services/navigation";

const Home = () => {
  const { user } = useSelector(state => state.app);

  return (

    <ScrollView background="light">
      <GradientView
        end={{ x: 0, y: 1 }}
        style={{ height: "100%" }}
        colors={[colors.primary, colors.dark]}
        hasPadding
      >
        <Box
          hasPadding
          row
          align="center"
          justify="center"
          spacing="0px 0 0 "
        >
          <Cover
            image={`${util.AWS.bucketURL}/${user.foto}`}
            width="80px"
            height="80px"
            circle
          />

          <Box align="center" justify="center">
            <Title color="light" small>{user.nome}</Title>
            <Text color="light">{user.email}</Text>
          </Box>
        </Box>
        <Touchable
          rounded="5px"
          spacing="10px 0 0 "
          hasPadding
          background="success"
          justify="center"
          onPress={() => replace('EncontrarSalao')}
        >
          <Text color="dark">Novo agendamento</Text>
        </Touchable>
      </GradientView>
      <Box hasPadding removePaddingTop align="center" spacing="10px 0px 0px 0px" background={util.toAlpha(theme.colors.muted, 5)}>
        <Box  align="center">
        <Title small   color="dark" hasPadding>Agendamento</Title>

        </Box>
        <Box row >
          <Cover
            image={`${util.AWS.bucketURL}/${user.foto}`}
            width="100px"
            height="100px"
          />
          <Box spacing="0px 0px 0px 10px">
            <Title color="dark" small>Salao Teste</Title>
            <Text color="dark">Rua Armando Cerci, n° 606</Text>
            <Text color="dark">Fone: 44 998955740</Text>
            <Spacer/>
            <Text color="success" bold>10/12/2023 - 12:00 h </Text>            
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Home;
