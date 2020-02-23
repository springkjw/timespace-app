import styled from 'styled-components/native';
import {Primary, White, White60} from 'assets/colors';

export const Container = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: 16,
  paddingRight: 16,
};

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 36px;
  text-align: center;
  color: ${White};
  margin-bottom: 20px;
`;

export const Description = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.5px;
  color: ${White60};
`;

export const ButtonWrapper = styled.SafeAreaView`
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 30px;
  background-color: ${Primary};
  box-shadow: 0px 8px 10px rgba(148, 106, 239, 0.38);
  margin-bottom: 24px;
`;

export const ButtonText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${White};
`;
