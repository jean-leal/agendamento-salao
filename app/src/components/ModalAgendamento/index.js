import React, { useCallback, useRef, useMemo, createRef } from "react";
import { StyleSheet, View, Text, Button, ScrollView, Dimensions } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import Resume from "./resume";
import DateTime from "./dateTime"

import ModalHeader from "./header";

const App = () => {
 
  const sheetRef = createRef();

  const snapPoints = useMemo(() => ["1", 90, Dimensions.get('window').height - 40], []);

  return (      
    <BottomSheet
      index={2}        
      ref={sheetRef}
      snapPoints={snapPoints}
      renderContent={()=>{
        
      }}
    >
      <ScrollView style={{backgroundColor: "#fff"}}>
        <ModalHeader/>
        <Resume/>
        <DateTime/>
      </ScrollView>       
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