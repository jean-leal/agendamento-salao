import React from "react";
import { Text, Box, Touchable, Cover, Button } from "../../styles/index";

import { useDispatch } from "react-redux";
import { getSalao } from "../../store/modules/salao/actions";
import { replace } from "../../services/navigation";

const Salao = ({ salao }) => {

  const dispatch = useDispatch()

  const selectSalao = () => {
    dispatch(getSalao(salao.item._id))
    replace("Agendamento")
  }

  return (
    <>
      <Touchable
        height="120px"
        hasPadding
        background="light"
        align="center"
        key={salao.item._id}
        onPress={selectSalao}
      >
        <Cover
          image="https://imgs.search.brave.com/SGHr2nktMJT7-HwiMi0wPNtfb3rKTdllFfn-_ttfxZg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mYXNo/aW9uYnViYmxlcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDEvZmxhdmlh/Mi5qcGc"
        />
        <Box direction="column">
          <Text bold color="dark">
            {salao.item.nome}
          </Text>
          <Text small>
            {salao.item.endereco.cidade}  • {salao.item.telefone}
          </Text>
        </Box>
      </Touchable>
    </>
  )
}

export default Salao;
