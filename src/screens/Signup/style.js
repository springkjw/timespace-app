import styled from 'styled-components/native';
import {
  Primary,
  Background,
  BackgroundLight,
  White,
  White38,
  Black38,
} from 'assets/colors';

export const Container = styled.KeyboardAvoidingView`
  background-color: ${Background};
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;

  justify-content: space-between;
`;

export const InputWrapper = styled.View``;

export const Input = styled.TextInput`
  height: 56px;
  border-radius: 4px;
  background-color: ${BackgroundLight};
  padding: 16px 12px;
  margin-bottom: 12px;
  font-size: 16px;
  color: ${White};
`;

export const ButtonWrapper = styled.View`
  margin-bottom: 24px;
`;

export const Button = styled.TouchableOpacity`
  height: 56px;
  background-color: ${({active}) => (active ? Primary : White38)};
  box-shadow: 0px 8px 10px rgba(148, 106, 239, 0.38);
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${({active}) => (active ? White : Black38)};
`;
