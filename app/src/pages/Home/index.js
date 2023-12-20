import React, { useEffect } from "react";
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
import { allAgendamentos } from "../../store/modules/app/actions";
import { FlatList } from "react-native-gesture-handler";

import AgendamentosCliente from "../../components/AgendamentosCliente";
import AgendamentoAtual from "../../components/Usuarios/AgendamentoAtual";

const Home = () => {
  const dispatch = useDispatch();
  const { user, userAgendamentos } = useSelector(state => state.app);

  useEffect(() => {
    dispatch(allAgendamentos());
  }, [user]);
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
          height="150px"
        >
          <Cover
            image={`${util.AWS.bucketURL}/${user.foto}`}
            width="90px"
            height="90px"
            circle
          />
          <Box align="center" justify="center">
            <Title color="light" small>{user.nome}</Title>
            <Text color="light">{user.email}</Text>
          </Box>
        </Box>
      </GradientView>
      <AgendamentoAtual user={user} />
      <Text hasPadding bold> Ultimos Agendamentos</Text>
      <FlatList
        data={userAgendamentos}
        renderItem={({ item }) => <AgendamentosCliente agendamento={item} />}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

export default Home;
