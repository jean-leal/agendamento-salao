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

import HeaderEsabelecimento from "../../../components/HeaderEstabelecimentos";

const Servicos = () => {
  return (
    <ScrollView background="light">
      <HeaderEsabelecimento/>
      <Box hasPadding removePaddingTop align="flex-start" spacing="10px 0px 0px 0px" background="light">
        
      <Text>Servicos</Text>
      </Box>
    </ScrollView>
  );
};

export default Servicos;
