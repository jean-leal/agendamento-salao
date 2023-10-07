import React, { useMemo, createRef, useEffect, useRef, useState } from "react";
import { StyleSheet, ScrollView, Dimensions } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import Resume from "./resume";
import DateTimePicker from "./dateTime"
import EspecialistaPicker from "../ModalAgendamento/Especialistas";
import ModalHeader from "./header";
import EspecialistasModal from "./Especialistas/modal";
import PaymentPicker from "./payment"
import { Box, Button } from "../../styles";

import { useSelector } from "react-redux";

const ModalAgendamento = () => {
 
  const sheetRef = useRef(null);
  const {form , agendamento, servicos} = useSelector(state => state.salao)

  const snapPoints = useMemo(() => [1, 90, Dimensions.get('window').height - 90], []);
  
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
        <Resume agendamento={agendamento} servicos={servicos}/>
        <DateTimePicker/>
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