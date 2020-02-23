import styled from 'styled-components/native';
import {White, Primary, Primary20, Black38, Black87} from 'assets/colors';

export const Container = styled.View`
  height: 430px;
  background-color: ${White};
  border-radius: 10px;
  padding: 20px;
  flex-direction: column;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  margin-top: 24px;
  margin-bottom: 32px;
  color: ${Black87};
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Circle = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${Primary20};
  margin-right: 16px;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const PermissionWrapper = styled.View`
  flex-direction: column;
`;

export const PermissionTitle = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: ${Black87};
`;

export const PermissionDescription = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: ${Black38};
`;

export const Description = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: ${Black38};
  margin-bottom: 12px;
`;

export const Confirm = styled.TouchableOpacity`
  background-color: ${Primary};
  height: 56px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 10px rgba(148, 106, 239, 0.38);
`;

export const ConfirmText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${White};
`;
