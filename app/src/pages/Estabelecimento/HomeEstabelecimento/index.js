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
} from "../../../styles";

import { useDispatch, useSelector } from "react-redux";

import { colors } from "../../../styles/theme.json";
import util from "../../../util";
import theme from "../../../styles/theme.json"
import { replace } from "../../../services/navigation";
import AgendamentoDia from "../../../components/AgendamentoDia";
import HeaderEsabelecimento from "../../../components/HeaderEstabelecimentos";

const HomeEstabelecimento = () => {
  return (
    <ScrollView background="light">
      <HeaderEsabelecimento/>
      <Box  align="flex-start" background="light">        
        <AgendamentoDia/>
      </Box>
    </ScrollView>
  );
};

export default HomeEstabelecimento;
