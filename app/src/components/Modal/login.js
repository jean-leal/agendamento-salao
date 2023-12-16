import React, { useRef, createRef } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Modalize } from "react-native-modalize";
import { Box, Title, Spacer, TextInput, Button } from "../../styles";
import {
  setUser as setUserAction,
  loginUser
} from "../../store/modules/app/actions";
import LoginScheme from "../../schemas/login.scheme";

export const modalRef = createRef();

const ModalLogin = () => {
  const dispatch = useDispatch();
  const { userForm, form } = useSelector((state) => state.app);

  const setUser = (payload) => {
    dispatch(setUserAction(payload));
  };

  const sendLogin = async () => {
    try {
      await LoginScheme.validate(userForm);
      dispatch(loginUser());
    } catch ({ errors }) {
      Alert.alert(errors[0], "Corrija o erro antes de continuar.");
    }
  };

  return (
    <>
      <Modalize ref={modalRef} adjustToContentHeight>
        <Box hasPadding background="dark" align="center">
          <Title color="light">Informe seus dados</Title>
          <Spacer />
          <TextInput
            label={"Seu e-mail"}
            placeholder="Digite seu e-mail"
            disabled={form?.loading}
            loading={form?.loading}
            value={userForm?.email}
            onChangeText={(email) => {
              setUser({ email });
            }}
          ></TextInput>
          <Spacer />
          <TextInput
            label={"Sua senha"}
            placeholder="Digite sua senha"
            secureTextEntry
            disabled={form?.loading}
            loading={form?.loading}
            value={userForm?.password}
            onChangeText={(senha) => {
              setUser({ senha });
            }}
          ></TextInput>
          <Spacer />
          <Button
            width="100%"
            background="success"
            disabled={form?.loading}
            loading={form?.loading}
            onPress={() => sendLogin()}
            style={{ width: "100%", borderRadius: 5 }}
          >
            Fazer Login
          </Button>
        </Box>
      </Modalize>
    </>
  );
};

export default ModalLogin;
