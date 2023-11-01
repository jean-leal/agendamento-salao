import * as yup from "yup";

const LoginScheme = yup.object().shape({  
  email: yup
    .string()
    .email("Digite um e-mail valido")
    .required("Email é obrigatório"),  
  senha: yup
    .string()
    .min(5, "A senha deve conter no minimo 5 caracteres")
    .required("A senha é obrigatório"),
});

export default LoginScheme;
