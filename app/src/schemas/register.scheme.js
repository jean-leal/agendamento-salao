import * as yup from "yup";
import { validate } from "gerador-validador-cpf";

const RegisterSchema = yup.object().shape({
  nome: yup
    .string("Deve ser uma string")
    .min(5, "O nome deve conter no minimo 5 caracteres")
    .required("Nome é obrigatório"),
  telefone: yup
    .string()
    .min(12, "Digite um telefone válido")
    .required("Telefone é obrigatório"),
  email: yup
    .string()
    .email("Digite um e-mail valido")
    .required("Email é obrigatório"),
  foto: yup.object().required("Foto é obrigatório"),
  dataNascimento: yup.string().length(10, "Digite uma data válida").required("Data de Nascimento é obrigatório"),
  cep: yup.string().required("CEP é obrigatório"),
  rua: yup.string().required("Rua é obrigatório"),
  numero: yup.string().required("Número é obrigatório"),
  uf: yup.string().required("UF é obrigatório"),
  cidade: yup.string().required("Cidade é obrigatório"),
  senha: yup
    .string()
    .min(5, "A senha deve conter no minimo 5 caracteres")
    .required("A senha é obrigatório"),
  confirmaSenha: yup
    .string()
    .oneOf([yup.ref("senha")], "As senhas devem ser iguais")
    .required("A senha é obrigatório"),
});

export default RegisterSchema;
