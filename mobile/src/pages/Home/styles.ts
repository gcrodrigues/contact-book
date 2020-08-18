import styled from "styled-components/native";
import { darken } from "polished";
import { FlatList } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background-color: black;
`;

export const Header = styled.View`
  width: 100%;
  height: 30%;

  align-items: center;
  justify-content: center;

  margin-top: 15;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: white;
`;

export const Total = styled.Text`
  color: ${darken(0.3, "#fff")};
`;

export const Content = styled.View`
  border-radius: 25;
  overflow: hidden;
`;
