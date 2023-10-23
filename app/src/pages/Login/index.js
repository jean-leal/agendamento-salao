import React from "react";

import { Box, Text, Cover, Button, Spacer } from "../../styles";
import logoApp from "../../assets/nv-logo.jpg";

const Login = () => {
    return(
        <Box background= "dark" haspadding align="center" justify="center">
            <Cover
                source={logoApp}
                borderRadius="circle"
                width={"250px"}
                height={"250px"}
                circle
            />
            <Spacer size="100px"/>
            <Button block background="light" >Entrar na minha conta</Button>
            <Spacer/>
            <Button block mode="text" textColor="light">Fazer o meu cadastro</Button>
            
            <Text small hasPadding align="center" color="muted">
                Ao fazer login você concorda com nossos{' '}
                <Text underline color="primary" small> Termos e Condições </Text>
                 e
                <Text underline color="primary" small> Política de Privacidade.</Text>
            </Text>
        </Box>
    
    )
}

export  default Login;