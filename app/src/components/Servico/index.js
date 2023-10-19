import React from "react";
import { Text, Box, Touchable, Cover, Title, Button} from "../../styles/index";
import moment from "moment";

import { updateAgendamento, filterAgenda } from "../../store/modules/salao/actions"

import { useDispatch } from "react-redux";

const Servico = ( { servico } ) => {
  
  const dispatch = useDispatch()

  const press = () => {    
    dispatch(updateAgendamento({ servicoId: servico.item._id}))
    dispatch(filterAgenda())
  }
  
  return(
  <>
<Touchable 
      height="120px"
      hasPadding
      background="light"
      align="center"
      onPress={press}
      key={servico.item._id}
    >
      <Cover 
        image="https://imgs.search.brave.com/SGHr2nktMJT7-HwiMi0wPNtfb3rKTdllFfn-_ttfxZg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mYXNo/aW9uYnViYmxlcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDEvZmxhdmlh/Mi5qcGc"
      />
      <Box direction="column">
        <Text bold color="dark">
          {servico.item.titulo}
        </Text>
        <Text small>
          R$ {servico.item.preco}  • {moment(servico.item.duracao).format('HH:mm')} min
        </Text>
      </Box>
      <Box>
          <Button 
            icon="clock-check-outline"
            background="success"
            mode="conteined"
            textColor="light"
            
          >
            Agendar
          </Button>
        </Box>
    </Touchable>
  </>
    
   
  )
}

export default Servico;
