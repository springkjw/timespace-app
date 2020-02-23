import styled from 'styled-components/native';
import {
  Primary,
  Background,
  BackgroundLight,
  White,
  White38,
  Black38,
  Red,
} from 'assets/colors';

export const Container = styled.KeyboardAvoidingView`
  background-color: ${Background};
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;

  justify-content: space-between;
`;

export const InputContent = styled.View``;

export const InputWrapper = styled.View`
  position: relative;
`;

export const Input = styled.TextInput`
  height: 56px;
  border-radius: 4px;
  background-color: ${BackgroundLight};
  padding: 16px 12px;
  margin-bottom: 12px;
  font-size: 16px;
  color: ${White};
`;

export const ErrorIcon = styled.Image`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 18px;
  right: 14px;
`;

export const ErrorLabel = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: ${Red};
  margin-left: 12px;
  margin-top: -8px;
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
