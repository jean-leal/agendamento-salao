import React from "react";
import {
  Box,
  GradientView,
  ScrollView,
  Cover,
  Text,
  Title,
  Touchable,
} from "../../styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useDispatch, useSelector } from "react-redux";

import { colors } from "../../styles/theme.json";
import util from "../../util";
import { replace } from "../../services/navigation";

const Home = () => {
  const { user } = useSelector(state => state.app);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView background="dark">
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
            spacing="20px 0 0 "
          >
            <Cover
              image={`${util.AWS.bucketURL}/${user.foto}`}
              width="100px"
              height="100px"
              circle
            />

            <Box align="center" justify="center">
              <Title color="light">{user.nome}</Title>
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
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Home;
