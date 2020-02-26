import styled from 'styled-components/native';
import {Background, White87} from 'assets/colors';

export const Container = styled.SafeAreaView`
  width: 100%;
  min-height: 56px;
  z-index: 100;
  flex-direction: row;
  align-items: center;
`;

export const MyCapsule = styled.TouchableOpacity`
  flex: 1;
  height: 48px;
  background-color: ${Background};
  border-radius: 30px;
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const MycapsuleText = styled.Text`
  color: ${White87};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
`;

export const MyCapsuleIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Alram = styled.TouchableOpacity`
  width: 64px;
  height: 48px;
  align-items: center;
  justify-content: center;
`;

export const AlramIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
