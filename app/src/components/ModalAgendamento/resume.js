import React from "react";

import { Text, Title, Spacer, Box, Cover } from "../../styles";
import theme from "../../styles/theme.json";
import util from "../../util";
import consts from "../../consts";


const Resume = ({agendamento, servicos}) => {
  const servico = servicos.filter(s => s._id === agendamento.servicoId)[0]


  return(
    <Box align="center" row hasPadding background={util.toAlpha(theme.colors.muted, 5)}>
      <Cover 
        width={"80px"}
        height={"80px"}
        image={consts.image}
/>
      <Box >
        <Title>{servico?.titulo}</Title>
        <Spacer/>
        <Text small>
          Total: R$ {servico?.preco}
        </Text>
      </Box>
    </Box>
  )
}

export default Resume;