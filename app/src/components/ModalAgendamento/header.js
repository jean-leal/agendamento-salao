import React from "react";

import { Touchable, GradientView, Text, Box, Spacer } from "../../styles";
import { View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { updateForm, resetAgendamento } from "../../store/modules/salao/actions"

import { useDispatch, useSelector } from "react-redux";

import theme from '../../styles/theme.json'

const ModalHeader = () => {

  const {form} = useSelector(state => state.salao)

  const dispatch = useDispatch()

  const press = () => {
    form.modalAgendamento === 2 ? dispatch(updateForm({modalAgendamento: 1}), resetAgendamento()) : ''
  }
  return(
    <View style={styles.headerContainer}>
      <GradientView 
        colors={[theme.colors.dark, theme.colors.primary]} 
        start={{x: 0, y:0}}
        end={{x:1, y:0}}
        >
        <Box row width="100%" >
        <Text >
          <Touchable hasPadding onPress={press} >
          <Icon name="chevron-left" color={theme.colors.light} size={30}/>
          <View style={{marginLeft: 20}}>
            <Text color="light">Finalizar Agendamento</Text>
            <Spacer size="2px" />
            <Text small color="light">Horário, pagamento e especialista.</Text>
          </View>
          </Touchable>
        </Text>
        </Box>         
      </GradientView>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%", 
    height: 70
  }
})

export default ModalHeader;