import React, { useMemo, createRef, useEffect, useRef, useState } from "react";
import { StyleSheet, ScrollView, Dimensions } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import moment from "moment";

import Resume from "./resume";
import DateTimePicker from "./dateTime"
import EspecialistaPicker from "../ModalAgendamento/Especialistas";
import ModalHeader from "./header";
import EspecialistasModal from "./Especialistas/modal";
import PaymentPicker from "./payment"
import { Box, Button } from "../../styles";
import util from "../../util";

import { useSelector } from "react-redux";

const ModalAgendamento = () => {
 
  const sheetRef = useRef(null);
  const {form , agendamento, servicos, agenda} = useSelector(state => state.salao)

  const dataSelecionada = moment(agendamento.data).format('YYYY-MM-DD')
  const horaSelecionada = moment(agendamento.data).format('HH:mm')

  const {horariosDisponiveis, colaboradoresDia} = util.selectAgendamento(agenda, dataSelecionada, agendamento.colaboradorId)

  const snapPoints = useMemo(() => [1, 90, Dimensions.get('window').height - 90], []);

  const servico = servicos.filter(s => s._id === agendamento.servicoId)[0]
  
  return (      
    <BottomSheet
      index={form.modalAgendamento}        
      ref={sheetRef}
      snapPoints={snapPoints}
      renderContent={()=>{
        
      }}
    > 
      <>
      <ScrollView 
        style={{backgroundColor: "#fff"}}
        stickyHeaderIndices={[0]}
      >
        <ModalHeader/>
        <Resume servico={servico}/>
        <DateTimePicker
          servico={servico}
          agenda={agenda}
          dataSelecionada={dataSelecionada}
          horaSelecionada={horaSelecionada}
          horariosDisponiveis={horariosDisponiveis}
          />
        <EspecialistaPicker/>
        <PaymentPicker/>
        <Box hasPadding align="center">
          <Button
            icon="check"
            background="primary"
            mode="contained"
            textColor="light"
            uppercase={false}
          >Confirmar meu agendamento</Button>
        </Box>
      </ScrollView> 
      <EspecialistasModal/>
      </>            
    </BottomSheet>         
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
});

export default ModalAgendamento;