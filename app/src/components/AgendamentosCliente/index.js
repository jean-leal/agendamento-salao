import React from "react";
import { Text, Box, Touchable, Cover } from "../../styles/index";
import moment from "moment";

const AgendamentosCliente = ({ agendamento }) => {

  return (
    <>
      <Touchable
        hasPadding
        removePaddingTop
        background="light"
        align="center"
      >
        <Cover
          image="https://imgs.search.brave.com/SGHr2nktMJT7-HwiMi0wPNtfb3rKTdllFfn-_ttfxZg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mYXNo/aW9uYnViYmxlcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDEvZmxhdmlh/Mi5qcGc"
          height="60px"
          width="60px"
          circle
        />
        <Box direction="column">
          <Text color="dark">
            {agendamento?.salaoId.nome}
          </Text>
          <Text small>
            {agendamento?.servicoId.titulo}
          </Text>
          <Text small>
            {moment(agendamento?.data).format('DD/MM/YY - HH:mm')}, Valor R$ {agendamento?.valor}
          </Text>
          <Text small>

          </Text>
        </Box>
      </Touchable>
    </>
  )
}

export default AgendamentosCliente;
