import React, { createRef } from "react";
import { Modalize } from "react-native-modalize";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-native";
import { Checkbox } from 'react-native-paper';

import {
  Box,
  Title,
  Spacer,
  TextInput,
  Button,
  ScrollView,
} from "../../styles";
import TextInputMask from "../textInputMask";
import {
  setUser as setUserAction,
  saveUser as saveUserAction,
} from "../../store/modules/app/actions";
import Uploader from "../Uploader";
import RegisterScheme from "../../schemas/register.scheme";

export const modalRef = createRef();

const ModalRegister = () => {
  const dispatch = useDispatch();
  const { userForm, form } = useSelector((state) => state.app);

  const setUser = (payload) => {
    dispatch(setUserAction(payload));
  };

  const requestRegister = async () => {
    try {

      await RegisterScheme.validate(userForm);
      dispatch(saveUserAction());
    } catch ({ errors }) {
      Alert.alert(errors[0], "Corrija o erro antes de continuar.");
    }
  };

  const [checked, setChecked] = React.useState(false);
  return (
    <>
      <Modalize ref={modalRef} adjustToContentHeight>
        <ScrollView style={{ padding: 20 }} background="dark" align="center">
          <Title color="light" align="center">Informe seus dados</Title>
          <Spacer />
          <Uploader
            image={userForm.foto?.uri}
            callback={(foto) => setUser({ foto: foto[0] })}
          />
          <Spacer />
          <Box row align="center" justify="center">
            <Checkbox.Item
              label="Usuário"
              status={userForm.tipo === 'usuario' ? 'checked' : 'unchecked'}
              onPress={() => {
                setUser({ tipo: "usuario" });
              }}
            />
            <Checkbox.Item
              label="Estabelecimento"
              status={userForm.tipo === 'estabelecimento' ? 'checked' : 'unchecked'}
              onPress={() => {
                setUser({ tipo: "estabelecimento" });
              }}
            />
          </Box>
          <Spacer />
          <TextInput
            label={"E-mail"}
            placeholder="Digite seu e-mail"
            disabled={form?.saving}
            value={userForm?.email}
            onChangeText={(email) => {
              setUser({ email });
            }}
          />
          <Spacer />
          <TextInput
            label={"Nome"}
            placeholder="Digite seu nome"
            disabled={form?.saving}
            value={userForm?.nome}
            onChangeText={(nome) => {
              setUser({ nome });
            }}
          />
          <Spacer />
          <TextInputMask
            type={"cel-phone"}
            options={{
              maskType: "BRL",
              withDDD: true,
              dddMask: "(99) ",
            }}
            label={"Telefone"}
            placeholder="Digite seu telefone"
            disabled={form?.saving}
            value={userForm?.telefone}
            onChangeText={(telefone) => {
              setUser({ telefone });
            }}
          />
          <Spacer />
          <TextInputMask
            type={"datetime"}
            options={{
              format: "DD/MM/YYYY",
            }}
            label={"Data de Nascimento"}
            placeholder="Digite sua data de nascimento"
            disabled={form?.saving}
            value={userForm?.dataNascimento}
            onChangeText={(dataNascimento) => {
              setUser({ dataNascimento });
            }}
          />
          <Spacer />
          <TextInputMask
            type={"zip-code"}
            label={"CEP"}
            placeholder="Digite seu CEP"
            disabled={form?.saving}
            value={userForm?.cep}
            onChangeText={(cep) => {
              setUser({ cep });
            }}
          />
          <Spacer />
          <TextInput
            label={"Rua"}
            placeholder="Digite sua rua"
            disabled={form?.saving}
            value={userForm?.rua}
            onChangeText={(rua) => {
              setUser({ rua });
            }}
          />
          <Spacer />
          <TextInput
            label={"Número"}
            placeholder="Digite o número da sua casa"
            disabled={form?.saving}
            value={userForm?.numero}
            onChangeText={(numero) => {
              setUser({ numero });
            }}
          />
          <Spacer />
          <TextInput
            label={"UF"}
            placeholder="Digite seu UF"
            disabled={form?.saving}
            value={userForm?.uf}
            onChangeText={(uf) => {
              setUser({ uf });
            }}
          />
          <Spacer />
          <TextInput
            label={"Cidade"}
            placeholder="Digite sua cidade"
            disabled={form?.saving}
            value={userForm?.cidade}
            onChangeText={(cidade) => {
              setUser({ cidade });
            }}
          />
          <Spacer />
          <TextInput
            label={"Senha"}
            placeholder="Digite sua senha"
            secureTextEntry
            disabled={form?.saving}
            value={userForm?.senha}
            onChangeText={(senha) => {
              setUser({ senha });
            }}
          />
          <Spacer />
          <TextInput
            label={"Confirme sua senha"}
            placeholder="Confirme sua senha"
            secureTextEntry
            disabled={form?.saving}
            value={userForm?.confirmaSenha}
            onChangeText={(confirmaSenha) => {
              setUser({ confirmaSenha });
            }}
          />
          <Spacer />
          <Button
            width="100%"
            background="success"
            disabled={form?.saving}
            loading={form?.saving}
            onPress={() => requestRegister()}
          >
            Enviar dados
          </Button>
        </ScrollView>
      </Modalize>
    </>
  );
};

export default ModalRegister;
