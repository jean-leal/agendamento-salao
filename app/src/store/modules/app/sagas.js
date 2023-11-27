import { takeLatest, all, call, put, select, take } from "redux-saga/effects";
import types from "./types";
import { setForm, reset, setReducer } from "./actions";
import { updateAgendamento } from "../salao/actions";
import { Alert } from "react-native";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage"

import api from "../../../services/api";
import { modalRef as modalRegisterRef } from "../../../components/Modal/register";
import { modalRef as modalLoginRef } from "../../../components/Modal/login";
import { replace } from "../../../services/navigation";
import util from "../../../util";

export function* loginUser() {
  const { userForm } = yield select((state) => state.app);
  yield put(setForm({ loading: true }));

  try {

    const {data: res} = yield call(api.post, "/user/login", userForm )

    if (res.error) {
      throw new Error(res.message);
    }
   
    yield call(AsyncStorage.setItem, '@user', JSON.stringify(res.user));
    yield put(setReducer('user', res.user));
    yield put(updateAgendamento({ clienteId: res.user._id }));
    yield put(reset('userForm'));
    yield call(modalLoginRef?.current?.close);
  
    if (res.user.tipo === "usuario"){
      yield call(replace, 'Home');
    } else {
      yield call(replace, 'HomeTabsEstabelecimento');
    }

    
  } catch (err) {
    yield call(Alert.alert, "Erro interno", err.message);
  } finally {
    yield put(setForm({ loading: false }));
  }
}

export function* saveUser() {
  const { userForm } = yield select((state) => state.app);
  yield put(setForm({ saving: true }));

  try {
    const form = new FormData();
    form.append("nome", userForm?.nome);
    form.append("email", userForm?.email);
    form.append("tipo", userForm?.tipo);
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

    form.append("foto", {
      name: new Date().getTime() + '.' + util.getMimeType(userForm?.foto?.uri),
      type: `image/${util.getMimeType(userForm?.foto?.uri)}`,
      uri: userForm?.foto?.uri,
    });
    
    const { data: res } = yield call(api.post, "/user", form);

    if (res.error) {
      throw new Error(res.message);
    }

    yield put(reset("userForm"));
    yield call(modalRegisterRef?.current?.close);

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
