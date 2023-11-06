import styled from "styled-components/native";

import { LinearGradient } from "expo-linear-gradient";

import {
  Title as TitlePaper,
  Badge as BadgePaper,
  Text as TextPaper,
  Button as ButtonPaper,
  TextInput as TextInputPaper,
  ActivityIndicator as ActivityIndicatorPaper,
} from "react-native-paper";

import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView as ScrollViewComponent } from "react-native-gesture-handler";

import util from "../util";

export const Box = styled.View`
  flex: 1;
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  max-height: ${(props) => props.height || "auto"};
  padding: ${(props) =>
    props.hasPadding
      ? !props.removePaddingBottom
        ? "20px"
        : "20px 20px 0 20px"
      : "0px"};
  padding-top: ${(props) =>
    props.removePaddingTop ? "0" : props.hasPadding ? "20px" : "0px"};
  padding-bottom: ${(props) =>
    props.removePaddingBottom ? "0" : props.hasPadding ? "20px" : "0px"};
  margin: ${(props) => props.spacing || 0};
  border-radius: ${(props) => (props.rounded ? "5px" : "0px")};
  border: ${(props) => props.border || "none"};
  background: ${(props) =>
    props.theme[props.background] || props.background || "transparent"};
`;

export const Touchable = styled(TouchableOpacity)`
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => (props.hasPadding ? "20px" : "0px")};
  margin: ${(props) => props.spacing || 0};
  border-radius: ${(props) => props.rounded || 0};
  border: ${(props) => props.border || "none"};
  background: ${(props) =>
    props.theme[props.background] || props.background || "transparent"};
`;

export const Title = styled(TitlePaper)`
  color: ${(props) => props.theme[props.color || "dark"]};
  font-size: ${(props) => (props.small ? "22px" : "30px")};
  padding: ${(props) => (props.hasPadding ? "20px" : "0px")};
  letter-spacing: -0.8px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  line-height: ${(props) => (props.small ? "22px" : "30px")};
  text-align: ${(props) => props.align || "left"};
  font-family: "Ubuntu_700Bold";
`;

export const ScrollView = styled(ScrollViewComponent)`
  width: 100%;
  background: ${(props) =>
    props.theme[props.background] || props.background || "black"};
`;

export const Spacer = styled.View`
  width: 100%;
  height: ${(props) => props.size || "10px"};
`;

export const Cover = styled.ImageBackground.attrs((props) =>
  props.image
    ? {
        source: { uri: props.image },
      }
    : undefined
)`
  justify-content: ${(props) => props.justify || "flex-start"};
  width: ${(props) => props.width || "100"};
  height: ${(props) => props.height || "100"};
  margin: ${(props) => props.spacing || "0 10px 0 0 "};
  border-radius: ${(props) => (props.circle ? props.width : "3px")};
  border: ${(props) => props.border || "none"};
  overflow: hidden;
  background-color: ${({ theme, transparent }) =>
    transparent ? "transparent" : theme.muted};
  padding: ${(props) =>
    props.hasPadding
      ? !props.removePaddingBottom
        ? "20px"
        : "20px 20px 0 20px"
      : "0px"};
  align-items: ${(props) => props.align || "flex-start"};
`;

export const GradientView = styled(LinearGradient)`
  flex: 1;
  padding: ${(props) => (props.hasPadding ? "20px" : "0px")};
  justify-content: ${(props) => props.justify || "flex-start"};
`;

export const Badge = styled(BadgePaper)`
  align-self: flex-start;
  width: auto;
  height: auto;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: ${(props) =>
    props.theme[props.background] || props.background || "danger"};
`;

export const Text = styled(TextPaper)`
  color: ${(props) => props.theme[props.color || "dark"]};
  font-size: ${(props) => (props.small ? "13px" : "17px")};
  padding: ${(props) =>
    props.hasPadding
      ? !props.removePaddingBottom
        ? "20px"
        : "20px 20px 0 20px"
      : "0px"};
  font-family: ${(props) =>
    props.bold ? "Ubuntu_700Bold" : "Ubuntu_300Light"};
`;

export const Button = styled(ButtonPaper).attrs((props) => ({
  mode: props.mode || "contained",
  width: props.block ? "100%" : "auto",
  uppercase: false,
  buttonColor: props.theme[props.background] || props.background || "danger",
  textColor: props.theme[props.textColor] || "black",
  labelStyle: {
    letterSpacing: 0,
    fontFamily: "Ubuntu_300Light",
    fontWeight: "normal",
  },
}))``;

export const TextInput = styled(TextInputPaper).attrs(({ theme }) => ({
  mode: 'outlined',
  outlineColor: theme.muted,
  underlineColor: theme.muted,
  selectionColor: theme.muted,
  theme: {
    colors: {
      text: theme.light,
      primary: theme.light,
      background: theme.dark,
      placeholder: theme.muted,
    },
  },
}))`
  height: 45px;
  width: 100%;
  font-size: 15px;
`;

export const ActivityIndicator = styled(ActivityIndicatorPaper).attrs(
  (props) => ({
    animating: true,
    color: props.theme[props.color],
  })
)``;
