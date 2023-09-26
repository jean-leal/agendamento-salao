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
    <FlatList
        data={["Pix", "Cartão", "Dinheiro",]}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=> item}
        renderItem={({item}) => (
          <Touchable
            key={item}
            width="110px"
            height="50px"
            spacing="0 10px 0 0"
            rounded="10px"
            direction="column"
            justify="center"
            align="center"
            border={`1px solid ${item === "Pix" ? theme.colors.primary : util.toAlpha(theme.colors.muted, 20)}`}
            background={item === "Pix" ? "primary" : "light"}
          >
            <Text small color={item === "Pix" ? "light" : undefined }>{item}</Text>
          </Touchable>               
        )}  
      />
    </View>    
    </>
  )
}

export default PaymentPicker;