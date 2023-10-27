import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { Cover, Box, Title, Text, Spacer, Button } from "../../styles/index";

import util from "../../util";
import { colors } from "../../styles/theme.json";
import Ionicons from "@expo/vector-icons/Ionicons";

const Uploader = ({ callback = () => {}, image = null }) => {
  const requestAccess = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão negada.",
        "Desculpe, mas precisamos acessar suas fotos.",
        [
          {
            text: "Permitir Acesso",
            onPress: () => {
              requestAccess();
            },
            style: "cancel",
          },
          {
            text: "Cancelar",
          },
        ]
      );
    }
  };

  useEffect(() => {
    requestAccess();
  }, []);

  const pickImage = async () => {
    let { assets } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    callback(assets);
  };

  return (
    <>
      {image &&( 
      <Cover
        width={"100%"}
        height={"230px"}
        circle={0}
        image={image}>
        <Button background="light" onPress={() => pickImage()}>
            Trocar imagem
          </Button>
      </Cover>)}
      {!image && (
        <Box
          hasPadding
          background={colors.muted}
          justify="flex-end"
          align="center"
          height="230px"
        >
          <Ionicons name="image" size={70} color={colors.light} />
          <Spacer />
          <Title color={"light"}>Selecione uma imagem</Title>
          <Text color={"light"}>Clique para abrir a galeria</Text>
          <Spacer size="25px" />

          <Button background="light" onPress={() => pickImage()}>
            Abrir galeria
          </Button>
        </Box>
      )}
    </>
  );
};

export default Uploader;
