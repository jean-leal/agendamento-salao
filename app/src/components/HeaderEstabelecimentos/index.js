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
import AgendamentoDia from "../../components/AgendamentoDia";


const Salao = ({ salao }) => {

  const { user } = useSelector(state => state.app);

  return (
    <>
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
            width="70px"
            height="70px"
            circle
          />

          <Box align="center" justify="center">
            <Title color="light" small>{user.nome}</Title>
            <Text color="light">{user.email}</Text>
          </Box>
        </Box>
      </GradientView>
    </>
  )
}

export default Salao;
