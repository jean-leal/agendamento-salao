import React, {createRef} from "react";

import {Modalize} from 'react-native-modalize';
import { Box, Title, Spacer, TextInput, Button, ScrollView } from "../../styles";

export const modalRef = createRef()

const ModalLogin = () => {
    return(
        <>
            <Modalize ref={modalRef} adjustToContentHeight>                
                <Box hasPadding background="dark">
                    <Title color="light">Informe seus dados</Title>
                    <Spacer/>
                    <TextInput label={"Seu e-mail"} placeholder="Digite seu e-mail"></TextInput>
                    <Spacer/>
                    <TextInput label={"Sua senha"} placeholder="Digite sua senha" secureTextEntry></TextInput>
                    <Spacer/>                   
                    <Button background="success" width="100%"> Fazer Login</Button>
                </Box>       
                         
            </Modalize>
        </>      
    )
}

export default ModalLogin;