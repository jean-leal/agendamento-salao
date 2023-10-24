import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Box, Text, Cover, Button, Spacer } from "../../styles";
import { View } from "react-native";
import logoApp from "../../assets/nv-logo.jpg";
import ModalLogin, {modalRef as modalLoginRef} from "../../components/Modal/login"
import ModalRegister, {modalRef as modalRegisterRef} from "../../components/Modal/register";

const Login = () => {
    return(
        <>                
        <GestureHandlerRootView >
            <View  height="100%" background= "dark">
            <Box hasPadding background= "dark" justify="center" align="center">
            <Cover
                source={logoApp}
                borderRadius="circle"
                width={"250px"}
                height={"250px"}
                circle
            />
            <Spacer size="100px"/>
            <Button block background="light" onPress={() => modalLoginRef?.current.open() } >Entrar na minha conta</Button>
            <Spacer/>
            <Button block mode="text" textColor="light" onPress={() => modalRegisterRef?.current.open() }>Fazer o meu cadastro</Button>
            
            <Text small hasPadding align="center" color="muted">
                Ao fazer login você concorda com nossos{' '}
                <Text underline color="primary" small> Termos e Condições </Text>
                 e
                <Text underline color="primary" small> Política de Privacidade.</Text>
            </Text>
            </Box>
            
            
            <ModalLogin />
            <ModalRegister/>
           
            </View>
           
        </GestureHandlerRootView>     
        </>
        
    )
}

export  default Login;