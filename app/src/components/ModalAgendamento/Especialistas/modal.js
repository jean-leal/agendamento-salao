import React, {createRef} from "react";
import {Modalize} from 'react-native-modalize';
import { ScrollView } from "react-native-gesture-handler";

import { Dimensions } from "react-native";

import { Title ,Text, Box, Touchable, Cover} from '../../../styles';
import theme from "../../../styles/theme.json";
import moment from "moment";

import { useDispatch } from "react-redux";

export const modalRef = createRef()

const EspecialistasModal = ( {
  form, 
  colaboradores, 
  agendamento,
  servicos,
  horaSelecionada,
  colaboradoresDia} ) => {

    const dispatch = useDispatch();
    let colaboradoresIdsDisponiveis = [];
  
    for (let colaboradorId of Object.keys(colaboradoresDia)) {
      let horarios = colaboradoresDia[colaboradorId].flat(2);
      if (horarios.includes(horaSelecionada)) {
        colaboradoresIdsDisponiveis.push(colaboradorId);
      }
    }

    const colaboradoresDisponiveis = colaboradores.filter(c => colaboradoresIdsDisponiveis.includes(c._id));
    
    const servico = servicos.filter((c) => c._id === agendamento.servicoId)[0];

  return (
    <>
      <Modalize ref={modalRef} adjustToContentHeight>
        <ScrollView >
            <Box hasPadding>
              <Title bold color="dark">{servico?.titulo + ' '}</Title>
              <Text small>Disponiveis em {moment(agendamento?.data).format('DD/MM/YYYY [às] HH:mm')}</Text>
              <Box wrap="wrap" spacing="10px 0 0 0" direction="row">
                {colaboradoresDisponiveis.map((colaborador) => (
                  <Box
                    height={85}
                    width={((Dimensions.get('screen').width - 80) / 4)}                  
                    maxWidth={85}
                    >
                    <Touchable
                      direction="column"
                      align="center"
                      onPress={()=>{
                      alert("ola mundo")  
                      }}
                    >
                      <Cover 
                        image="https://imgs.search.brave.com/v-eNKMAZmcnmC8dcVMb21M6a2qmdOt7O1br-TSFIcEQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuanVzYnIuY29t/L2ltZ3MuanVzYnIu/Y29tL3B1YmxpY2F0/aW9ucy9hcnRpZ29z/L2ltYWdlcy9oYWly/LXNhbG9uLWJ1c2lu/ZXNzMTQ5ODEzNTMy/My5qcGc"
                        height="45px"
                        width="45px"
                        circle
                        border={colaborador._id === agendamento.colaboradorId ? `2px solid ${theme.colors.primary}` : "none"}
                        spacing="0px 0px 5px 0px"
                      />
                      <Text small bold >{colaborador?.nome}</Text>
                    </Touchable> 
                  </Box>
                              
                ))}
              </Box>
            </Box>        
          </ScrollView>
      </Modalize>
    </>
 
  )
}

export default EspecialistasModal;
