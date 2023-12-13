import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Box, Text, Cover, Button, Spacer, ActivityIndicator } from "../../styles";
import { View } from "react-native";
import logoApp from "../../assets/nv-logo.jpg";
import ModalLogin, {
  modalRef as modalLoginRef,
} from "../../components/Modal/login";
import ModalRegister, {
  modalRef as modalRegisterRef,
} from "../../components/Modal/register";
import { replace } from "../../services/navigation";

const Login = () => {
  const [loadingState, setLoadingState] = useState(true);

  const getLoggedState = async () => {
    await AsyncStorage.clear();
    const user = await AsyncStorage.getItem("@user");

    if (!user) {
        setLoadingState(false)
      } else {
        replace('Home')
      }
  };

  

  useEffect(() => {
    getLoggedState();
  }, []);

  return (
    <>
    
        <View height="100%">
          <Box hasPadding background="dark" justify="center" align="center">
            <Cover
              source={logoApp}
              circle
              width={"250px"}
              height={"250px"}
             
            />
            <Spacer size="100px" />

            {loadingState && <ActivityIndicator size={"large"}/>}

            {!loadingState && (
              <>
                
                <Button
                  block
                  background="light"
                  onPress={() => modalLoginRef?.current.open()}
                >
                  Entrar na minha conta
                </Button>
                <Spacer />
                <Button
                  block
                  mode="text"
                  textColor="light"
                  onPress={() => modalRegisterRef?.current.open()}
                >
                  Fazer o meu cadastro
                </Button>

                <Text small hasPadding align="center" color="muted">
                  Ao fazer login você concorda com nossos{" "}
                  <Text underline color="primary" small>
                    {" "}
                    Termos e Condições{" "}
                  </Text>
                  e
                  <Text underline color="primary" small>
                    {" "}
                    Política de Privacidade.
                  </Text>
                </Text>
              </>
            )}
          </Box>
          <ModalLogin />
          <ModalRegister />
        </View>
    </>
  );
};

export default Login;
