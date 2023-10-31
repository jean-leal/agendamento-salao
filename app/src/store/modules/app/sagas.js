import { takeLatest, all, call, put, select, take } from "redux-saga/effects";
import types from "./types";
import { setForm, reset } from "./actions";
import { Alert } from "react-native";
import moment from "moment";

import api from "../../../services/api";
import { modalRef as ModalRegisterRef } from "../../../components/Modal/register";

export function* loginUser() {
  //LÓGICA DE LOGIN
}

export function* saveUser() {
  const { userForm } = yield select((state) => state.app);
  yield put(setForm({ saving: true }));

  try {
    const form = new FormData();
    form.append("nome", userForm?.nome);
    form.append("email", userForm?.email);
    form.append("cpf", userForm?.cpf.match(/\d+/g).join(""));
    form.append(
      "dataNascimento",
      moment(userForm?.dataNascimento, "DD/MM/YYYY").format("YYYY/MM/DD")
    );
    form.append("telefone", userForm?.telefone.match(/\d+/g).join(""));
    form.append("senha", userForm?.senha);
    form.append("cep", userForm?.cep.match(/\d+/g).join(""));
    form.append("rua", userForm?.rua);
    form.append("numero", userForm?.numero);
    form.append("cidade", userForm?.cidade);

    const nameParts = userForm?.foto.split('.');
    const extension = nameParts.pop();
    const name = new Date().getTime() + nameParts.pop();

    form.append("foto",{
      name: name,
      type: `image/${extension}`,
      uri: userForm?.foto,
    });
    console.tron.log(form)
    const { data: res } = yield call(api.post, '/user', form )
  
    if (res.error) {
      throw new Error(res.message)
    }

    yield put(reset('userForm'));
    yield call(ModalRegisterRef?.current?.close);
    
    yield call(Alert.alert, "Cadastro concluído com sucesso.");
  } catch (err) {
    yield call(Alert.alert, "Erro interno", err.message);
  } finally {
    yield put(setForm({ saving: false }));
  }
}

export default all([
  takeLatest(types.LOGIN_USER, loginUser),
  takeLatest(types.SAVE_USER, saveUser),
]);

