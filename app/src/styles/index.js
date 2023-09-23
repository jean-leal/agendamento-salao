import styled from "styled-components/native";

import {LinearGradient} from "expo-linear-gradient";

import util from "../util";


import { 
  Title as TitlePaper, 
  Badge as BadgePaper, 
  Text as TextPaper,
  Button as ButtonPaper, 
  TextInput as TextInputPaper,
} from "react-native-paper";

export const Box = styled.View`
flex: 1;
flex-wrap: ${(props) => props.wrap || 'nowrap'};
flex-direction: ${(props) => (props.row ? 'row' : 'column')};
justify-content: ${(props) => props.justify || 'flex-start'};
align-items: ${(props) => props.align || 'flex-start'};
width: ${(props) => props.width || '100%'};
max-width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || 'auto'};
max-height: ${(props) => props.height || 'auto'};
padding: ${(props) => (props.hasPadding ? !props.removePaddingBottom ? '20px' : '20px 20px 0 20px' : '0px')};
padding-top: ${(props) =>
  props.removePaddingTop ? '0' : props.hasPadding ? '20px' : '0px'};
padding-bottom: ${(props) =>
  props.removePaddingBottom ? '0' : props.hasPadding ? '20px' : '0px'};
margin: ${(props) => props.spacing || 0};
border-radius: ${(props) => (props.rounded ? '5px' : '0px')};
border: ${(props) => props.border || 'none'};
  background: ${(props) => props.theme[props.background] || props.background || 'transparent'};
`;

export const Touchable = styled.TouchableOpacity`
  flex: 1;
  flex-direction: ${(props) => (props.direction || 'row' )};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  width: ${(props) => props.width || '100%'};
  max-width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  max-height: ${(props) => props.height || 'auto'};
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  margin: ${(props) => props.spacing || 0};
  border-radius: ${(props) => (props.rounded || 0)};
  border: ${(props) => props.border || 'none'};
  background: ${(props) => props.theme[props.background] || props.background || 'transparent'};
`;

export const Title = styled(TitlePaper)`
  color: ${(props) => props.theme[props.color || "dark"]};
  font-size: ${(props) => (props.small ? '22px' : '30px')};
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  letter-spacing: -0.8px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  line-height: ${(props) => props.small ? '22px' : '30px'};
  text-align: ${(props) => props.align || 'left'};
  font-family: 'Ubuntu_700Bold';
`;

export const Spacer = styled.View`
  width: 100%;
  height: ${(props) => props.size || '10px'};
`;

export const Cover = styled.ImageBackground.attrs((props) =>
  props.image
    ? {
        source: { uri: props.image },
       
      }
    : undefined
)`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "100px"};
  margin: ${(props) => props.spacing || '0 10px 0 0 '};
  border-radius: ${(props) => (props.circle ? props.width : '3px')};
  border: ${(props) => props.border || 'none'};
  overflow: hidden;
  background-color: ${({ theme, transparent }) =>
    transparent ? 'transparent' : theme.muted};
`;

export const GradientView = styled(LinearGradient)`
  flex: 1;
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  justify-content: ${(props) => props.justify || 'flex-start'};
`;

export const Badge = styled(BadgePaper)`
  align-self: flex-start;
  width: auto;
  height: auto;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: ${(props) => props.theme[props.background] || props.background || 'danger'};
`;

export const Text = styled(TextPaper)`
color: ${(props) => props.theme[props.color || "dark"]};
font-size: ${(props) => (props.small ? '13px' : '17px')};
padding: ${(props) => (props.hasPadding ? !props.removePaddingBottom ? '20px' : '20px 20px 0 20px' : '0px')};
font-family: ${(props) => (props.bold ? 'Ubuntu_700Bold' : 'Ubuntu_300Light')}

`;

export const Button = styled(ButtonPaper).attrs((props) =>({
  buttonColor: props.theme[props.background] || props.background || 'danger',
  textColor: props.theme[props.textColor] || 'red'
}))``

export const TextInput = styled(TextInputPaper).attrs((props) => ({
  mode: 'outlined',
  theme: {
    colors: {
      placeholder:  util.toAlpha(props.theme.muted, 30),
      background: props.theme.light
    },
  },
}))`
  height: 45px;
  width: 100%;
  font-size: 15px;
 
`;
