import React, { useMemo, useRef, useCallback } from "react";
import { StyleSheet, Dimensions } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import moment from "moment";
import { ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "../../styles";

import Resume from "./resume";
import DateTimePicker from "./dateTime"
import EspecialistaPicker from "../ModalAgendamento/Especialistas";
import ModalHeader from "./header";
import EspecialistasModal from "./Especialistas/modal";
import PaymentPicker from "./payment"
import { Box, Button, Title, Text } from "../../styles";
import util from "../../util";
import theme from "../../styles/theme.json";

import { saveAgendamento, resetAgendamento, updateForm } from "../../store/modules/salao/actions";

const ModalAgendamento = () => {

  const dispatch = useDispatch()

  const sheetRef = useRef(null);
  const { form, agendamento, servicos, agenda, colaboradores } = useSelector(state => state.salao)

  const dataSelecionada = moment(agendamento.data).format('YYYY-MM-DD')
  const horaSelecionada = moment(agendamento.data).format('HH:mm')
  const { horariosDisponiveis, colaboradoresDia } = util.selectAgendamento(agenda, dataSelecionada, agendamento.colaboradorId)

  const snapPoints = useMemo(() => [1, 90, Dimensions.get('window').height - 90], []);

  const servico = servicos.filter(s => s._id === agendamento.servicoId)[0]

  const handleSheetChanges = useCallback((index: Number) => {
    if (index !== 2) dispatch(updateForm({ modalAgendamento: 0 }))

  }, []);

  return (
    <BottomSheet
      index={form.modalAgendamento}
      ref={sheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
     
        <ScrollView
          style={{ backgroundColor: "#fff" }}
          stickyHeaderIndices={[0]}
        >
          <ModalHeader />
          <Resume servico={servico} />
          {agenda.length > 0 && <>
            <DateTimePicker
              servico={servico}
              agenda={agenda}             
              dataSelecionada={dataSelecionada}
              horaSelecionada={horaSelecionada}
              horariosDisponiveis={horariosDisponiveis}
            />
            <EspecialistaPicker
              colaboradores={colaboradores}
              agendamento={agendamento}
            />
            <PaymentPicker />
            <Box hasPadding align="center">
              <Button
                loading={form.agendamentoLoading}
                disabled={form.agendamentoLoading}
                icon="check"
                background="primary"
                mode="contained"
                textColor="light"
                uppercase={false}
                onPress={() => dispatch(saveAgendamento())}
              >Confirmar meu agendamento</Button>
            </Box>
          </>}
          {agenda.length === 0 && (
            <Box
              height={Dimensions.get('window').height - 200}
              background="light"
              direction="column"
              hasPadding
              justify="center"
              align="center">
              <ActivityIndicator
                size="large"
                color={theme.colors.primary}
              />
              <Title align="center">Só um instante...</Title>
              <Text small align="center">Estamos buscando o melhor horário para você...</Text>
            </Box>
          )}

        </ScrollView>
        <EspecialistasModal
          form={form}
          colaboradores={colaboradores}
          agendamento={agendamento}
          servicos={servicos}
          horaSelecionada={horaSelecionada}
          colaboradoresDia={colaboradoresDia}
        />
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