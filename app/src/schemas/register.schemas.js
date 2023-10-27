import * as yup from "yup";
import { validate } from "gerador-validador-cpf";

const RegisterSchema = yup.object().shape({
  nome: yup
    .string()
    .min(5, "O nome deve conter no minimo 5 caracteres")
    .required("Nome é obrigatório"),
  telefone: yup
    .string()
    .length(14, "Digite um telefone válido")
    .required("Telefone é obrigatório"),
  email: yup
    .string()
    .email("Digite um e-mail valido")
    .required("Email é obrigatório"),
  foto: yup.string().required("Foto é obrigatório"),
  cpf: yup
    .string()
    .test({
      name: "cpf_validation",
      message: "Digite um CPF válido",
      test: (cpf) => validate(cpf),
    })
    .required("O CPF é obrigatório"),
  dataNascimento: yup.string().length(10, "Digite uma data válida").required(),
  endereco: {
    logradouro: String,
    cidade: String,
    uf: String,
    cep: String,
    numero: String,
  },
  senha: "",
  confirmaSenha: "",
});

export default RegisterSchema;
