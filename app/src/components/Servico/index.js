import React from "react";
import { Text, Box, Touchable, Cover, Title, Button} from "../../styles/index";

const Servico = () => {
  return(
    <Touchable 
      height="120px"
      hasPadding
      background="light"
      align="center"
    >
      <Cover 
        image="https://imgs.search.brave.com/SGHr2nktMJT7-HwiMi0wPNtfb3rKTdllFfn-_ttfxZg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mYXNo/aW9uYnViYmxlcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDEvZmxhdmlh/Mi5qcGc"
      />
      <Box direction="column">
        <Text bold color="dark">
          Corte de cabelo feminino.
        </Text>
        <Text small>
          R$ 45  • 30 min
        </Text>
      </Box>
      <Box>
          <Button 
            icon="clock-check-outline"
            background="success"
            mode="conteined"
            color="light"
          >
            Agendar
          </Button>
        </Box>
    </Touchable>
   
  )
}

export default Servico;
