import styled from "styled-components/native";

import LinearGradient from "react-native-linear-gradient";

import { Title as TitlePaper } from "react-native-paper";

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
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  padding-top: ${(props) => props.removePaddingTop ? '0' : props.hasPadding ? '20px' : '0px'};
  padding-bottom: ${(props) => props.removePaddingBottom ? '0' : props.hasPadding ? '20px' : '0px'};
  margin: ${(props) => props.spacing || 0};
  border-radius: ${(props) => (props.radius ? '5px' : '0px')};
  border: ${(props) => props.border || 'none'};
  background: ${(props) => props.theme[props.background] || props.background || 'transparent'};
`;

export const Title = styled(TitlePaper)`
  color: ${(props) => props.theme[props.color || 'dark']};
  font-size: ${(props) => (props.small ? '22px' : props.big ? '50px' : '30px')};
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  letter-spacing: -2px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  line-height: ${(props) => props.small ? '22px' : props.big ? '50px' : '30px'};
  text-align: ${(props) => props.align || 'left'};
  transform: ${(props) => (props.scale ? `scale(${props.scale})` : '')};
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
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '100px'};
  margin: ${(props) => props.spacing || '0 10px 0 0 '};
  border-radius: ${(props) => (props.circle ? props.width : '3px')};
  border: ${(props) => props.border || 'none'};
  overflow: hidden;
  background-color: ${({ theme, transparent }) =>
    transparent ? 'transparent' : theme.muted};
`;

export const GradientView = styled(LinearGradient).attrs((props) =>{
  colors: props.colors
})`
  flex: 1;
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  justify-content: ${(props) => props.justify || 'flex-start'};
`;


// salao na mao 1:14
// monney runners 03 