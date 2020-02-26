import styled from 'styled-components/native';
import {White, White38, White60, White87} from 'assets/colors';

export const Container = {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
};

export const NoCapsuleWrapper = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 92px;
`;

export const NoCapsuleTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: ${White87};
  margin-bottom: 24px;
`;

export const Capsule = {
  width: 156,
  height: 56,
  alignItems: 'center',
  justiftContent: 'center',
  borderRadius: 30,
};

export const CreateCapsule = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 10px rgba(148, 106, 239, 0.38);
`;

export const CreateCapsuleText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: ${White};
`;

export const QuoteWrapper = styled.View`
  position: absolute;
  bottom: 48px;
`;

export const QuoteTitle = styled.Text`
  color: ${White60};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  margin-bottom: 4px;
  text-align: center;
`;

export const QuoteContent = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Quote = styled.Text`
  color: ${White38};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  margin-bottom: 3px;
`;

export const CapsuleWrapper = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 92px;
  position: relative;
`;

export const EmptyCapsule = styled.Image`
  max-width: 275px;
  max-height: 319px;
  position: absolute;
`;

export const Place = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: ${White};
  margin-bottom: 12px;
  margin-top: -25px;
`;

export const TimeWrapper = styled.View``;

export const TimeText = styled.Text`
  font-style: italic;
  font-weight: 500;
  font-size: 32px;
  line-height: 43px;
  text-align: center;
  letter-spacing: -0.02px;
  color: ${White};
`;
