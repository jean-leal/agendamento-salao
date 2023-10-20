import React from "react";
import { useDispatch } from "react-redux";

import { Box, Text, Cover } from "../../../styles";

const EspecialistaPicker = ({colaboradores, agendamento}) => {

  const dispatch = useDispatch();

  const colaborador = colaboradores.filter((c) => c._id === agendamento.colaboradorId)?.[0]

  return (
    <>
      <Text 
        hasPadding
        bold 
        color="dark"
        removePaddingBottom
      >
        Especialista:
      </Text>
      <Box 
       row
       align="center"
       hasPadding    
       removePaddingBottom  
      >
        <Box row align="center">
        <Cover
          width= "45px"
          height="45px"
          circle 
          image="https://imgs.search.brave.com/v-eNKMAZmcnmC8dcVMb21M6a2qmdOt7O1br-TSFIcEQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuanVzYnIuY29t/L2ltZ3MuanVzYnIu/Y29tL3B1YmxpY2F0/aW9ucy9hcnRpZ29z/L2ltYWdlcy9oYWly/LXNhbG9uLWJ1c2lu/ZXNzMTQ5ODEzNTMy/My5qcGc"
          />
        <Text>{colaborador?.nome}</Text>
        </Box>
        <Box align="center">
        </Box>
      </Box>
    </>
  )  
}

export default EspecialistaPicker;