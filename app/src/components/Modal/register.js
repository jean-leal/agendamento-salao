import React, {createRef} from "react";

import {Modalize} from 'react-native-modalize';
import { Box, Title, Spacer, TextInput, Button } from "../../styles";
import TextInputMask from "../textInputMask";

export const modalRef = createRef()

const ModalRegister = () => {
    return(
        <>
            <Modalize ref={modalRef} adjustToContentHeight>                
                <Box hasPadding background="dark" align="center" >
                    <Title color="light">Informe seus dados</Title>
                    <Spacer/>
                    <TextInput label={"Nome"} placeholder="Digite seu nome"/>
                    <Spacer/>
                    <TextInput label={"E-mail"} placeholder="Digite seu e-mail"/>
                    <Spacer/>
                    <TextInputMask 
                        type={'cpf'}
                        label={"CPF"}
                        placeholder="Digite seu CPF" 
                    />
                    <Spacer/>
                    <TextInputMask 
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '}}
                        label={"Telefone"}
                        placeholder="Digite seu telefone"
                    />
                    <Spacer/>
                    <TextInput label={"Senha"} placeholder="Digite sua senha"/>
                    <Spacer/>
                    <TextInput label={"Coirme sua senha"} placeholder="Confirme sua senha" secureTextEntry />
                    <Spacer/>
                    <Button width="100%" background="success"> Enviar dados</Button>                   
                </Box>       
                         
            </Modalize>
        </>      
    )
}

export default ModalRegister;