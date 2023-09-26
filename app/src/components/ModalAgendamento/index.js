import React, { useMemo, createRef } from "react";
import { StyleSheet, ScrollView, Dimensions } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import Resume from "./resume";
import DateTimePicker from "./dateTime"
import EspecialistaPicker from "../ModalAgendamento/Especialistas";
import ModalHeader from "./header";
import EspecialistasModal from "./Especialistas/modal";
import PaymentPicker from "./payment"
import { Box, Button } from "../../styles";

const App = () => {
 
  const sheetRef = createRef();

  const snapPoints = useMemo(() => ["1", 90, Dimensions.get('window').height - 40], []);

  return (      
    <BottomSheet
      index={0}        
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
        <Resume/>
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

export default App;