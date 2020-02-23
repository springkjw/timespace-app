import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {White, Black, Yellow} from 'assets/colors';

export const sheet = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Wrapper = styled.View`
  height: 380px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 176px;
  height: 28px;
`;

export const ButtonWrapper = styled.View`
  flex-direction: column;
`;

export const Button = styled.TouchableOpacity`
  width: 280px;
  height: 56px;
  border-radius: 26px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${Black};
`;

export const ButtonIcon = styled.Image`
  width: 24px;
  margin-right: 11px;
`;

export const Kakao = styled(Button)`
  background-color: ${Yellow};
  margin-bottom: 16px;
`;

export const Google = styled(Button)`
  background-color: ${White};
`;
