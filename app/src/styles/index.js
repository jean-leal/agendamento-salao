import styled from "styled-components/native";
import theme from "./theme.json";

import LinearGradient from "react-native-linear-gradient";


export const Cover = styled.ImageBackground.attrs((props) => ({
  source: {
    uri:props.image
  }
}))`
  width: ${(props) => props.width || '60px'};
  height: ${(props) => props.height || '70px'};
  margin: ${(props) => props.spacing || '0 10px 0 0'};
  borderRadius: ${(props) => (props.circle ? props.width : '3px')};
  border: ${(props) => props.border || 'none'};
  backgroundColor: ${theme.colors.muted};
`;

export const GradientView = styled(LinearGradient).attrs((props) => ({
  colors: props.colors
}))`
  flex: 1;
  padding: ${(props) => props.hasPadding ? '20px' : '0px'};
  justifyContent: ${props => props.justify || "flex-start"}
`
aula 6 1:13