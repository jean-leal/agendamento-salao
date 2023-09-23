import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Modal from "react-native-simple-modal";
import { Dimensions } from "react-native";

import {Text, Box, Touchable, Cover} from '../../../styles';
import theme from "../../../styles/theme.json";
import util from "../../../util";

const EspecialistasModal = () => {
  return(
    <Modal 
      open={true}
      
    >
      <ScrollView>
        <Box hasPadding direction="column">
          <Text bold color="dark">Corte de cabelo feminino</Text>
          <Text small>Disponiveis em 20/10/23 (Dom) às 11:30</Text>
          <Box spacing="10px 0 0" row wrap="wrap">
            {[1,2,3,4,5,6,7,8,9,10].map(colaborador => (
              
              <Touchable
              border="1px solid"
                width="90px"
                height="90px"
                spacing="10px 0px 0px 0px"
                direction="cloumn"
                align="center"
              >
                <Cover 
                  image="https://imgs.search.brave.com/v-eNKMAZmcnmC8dcVMb21M6a2qmdOt7O1br-TSFIcEQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuanVzYnIuY29t/L2ltZ3MuanVzYnIu/Y29tL3B1YmxpY2F0/aW9ucy9hcnRpZ29z/L2ltYWdlcy9oYWly/LXNhbG9uLWJ1c2lu/ZXNzMTQ5ODEzNTMy/My5qcGc"
                  height="45px"
                  width="45px"
                  circle
                  border={colaborador === 1 ? `2px solid ${theme.colors.primary}` : "none"}
                  spacing="0px 0px 5px 0px"
                />
                <Text small bold >Juliana Santos</Text>
              </Touchable>
              
            ))}
          </Box>
        </Box>        
      </ScrollView>
    </Modal>
  )
}
 export default EspecialistasModal;

 aula 6 3;34;48