import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, FlatList} from "react-native";
import theme from '../../styles/theme.json';
import util from '../../util';

import { Box, Text, Touchable } from '../../styles';

const PaymentPicker = () => {
  return(
    <>
    <Text bold hasPadding color="dark">Como você gostaria de pagar?</Text>
    <View style={{paddingHorizontal: 20}}>
    <Box 
      
      row  
      align="center"
      justify="space-between">
      <Box  align="center">
        <Touchable align="center">
          <Text align="center" >Cartão</Text>    
        </Touchable>
      </Box>
      <Box  align="center" >
        <Touchable align="center" border="1px solid ">
          <Text>Dinheiro</Text>    
        </Touchable>
      </Box>
      <Box  align="center">
        <Touchable align="center" >
          <Text>Pix</Text>    
        </Touchable>
      </Box>     
    </Box>
    </View>
    
    </>
  )
}

export default PaymentPicker;