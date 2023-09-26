import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Modal from "react-native-simple-modal";
import { Dimensions } from "react-native";

import {Text, Box, Touchable, Cover} from '../../../styles';
import theme from "../../../styles/theme.json";

const EspecialistasModal = () => {
  return(
    <Modal
      open={false}      
    >
      <ScrollView >
        <Box hasPadding>
          <Text bold color="dark">Corte de cabelo feminino</Text>
          <Text small>Disponiveis em 20/10/23 (Dom) às 11:30</Text>
          <Box wrap="wrap" spacing="10px 0 0 0" direction="column">
            {[1,2,3,4,5,6,7,8,9,10].map(colaborador => (
              <Box
                border={`2px solid ${theme.colors.primary}` }
                height={85}
                width={((Dimensions.get('screen').width - 80) / 4)}
               
                maxWidth={85}
                >
                <Touchable
                border={`2px solid ${theme.colors.primary}` }
                  
                  
                  direction="column"
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
                  <Text small bold >Juliana</Text>
                </Touchable> 
              </Box>
                           
            ))}
          </Box>
        </Box>        
      </ScrollView>
    </Modal>
  )
}
 export default EspecialistasModal;

