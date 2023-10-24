import React, {createRef} from "react";

import {Modalize} from 'react-native-modalize';
import { Box, Title, Spacer, TextInput, Button } from "../../styles";

export const modalRef = createRef()

const ModalRegister = () => {
    return(
        <>
            <Modalize ref={modalRef} adjustToContentHeight>                
                <Box hasPadding background="dark" align="center" >
                    <Title color="light">Informe seus dados</Title>
                    <Spacer/>
                    <TextInput label={"Nome"} placeholder="Digite seu nome"></TextInput>
                    <Spacer/>
                    <TextInput label={"E-mail"} placeholder="Digite seu e-mail" ></TextInput>
                    <Spacer/>
                    <TextInput label={"CPF"} placeholder="Digite seu CPF" ></TextInput>
                    <Spacer/>
                    <TextInput label={"Telefone"} placeholder="Digite seu telefone" ></TextInput>
                    <Spacer/>
                    <TextInput label={"Senha"} placeholder="Digite sua senha" ></TextInput>
                    <Spacer/>
                    <TextInput label={"Coirme sua senha"} placeholder="Confirme sua senha" secureTextEntry></TextInput>
                    <Spacer/>
                    <Button width="100%" background="success"> Enviar dados</Button>                   
                </Box>       
                         
            </Modalize>
        </>      
    )
}

export default ModalRegister;