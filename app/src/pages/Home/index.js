import React from "react";
import {
  Box,
  GradientView,
  ScrollView,
  Cover,
  Text,
  Title,
  Touchable,
} from "../../styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { colors } from "../../styles/theme.json";

const Home = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView background="dark">
        <GradientView
          end={{ x: 0, y: 1 }}
          style={{ height: "100%" }}
          colors={[colors.primary, colors.dark]}
          hasPadding
        >
          <Box
            hasPadding
            row
            align="center"
            justify="center"
            spacing="20px 0 0 "
          >
            <Cover
              image="https://avatars.githubusercontent.com/u/87539218?v=4"
              width="100px"
              height="100px"
              circle
            />

            <Box align="center" justify="center">
              <Title color="light">Jean Cliente</Title>
              <Text color="light">jeanlds13@gmail.com</Text>
            </Box>
          </Box>
            <Touchable
              rounded="5px"
              spacing="10px 0 0 "
              hasPadding
              background="success"   
              justify="center"           
            >
              <Text color="dark">Novo agendamento</Text>
            </Touchable>
          
        </GradientView>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Home;
