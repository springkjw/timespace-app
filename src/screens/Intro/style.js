import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {Primary, White, White38, White60, White87} from 'assets/colors';

const {width} = Dimensions.get('window');

export const Container = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Wrapper = styled.View`
  height: 500px;
  justify-content: center;
  align-items: center;
`;

export const SliderImage = {
  height: 260,
};

export const SliderContent = {
  height: 60,
};

export const IntroImage = styled.Image`
  max-width: 100%;
  height: 260px;
`;

export const Content = styled.View``;

export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: ${White};
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: ${White60};
`;

export const Bottom = styled.SafeAreaView`
  position: absolute;
  width: 100%;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Skip = styled.TouchableOpacity`
  width: 64px;
  height: 36px;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  margin-bottom: 16px;
`;

export const SkipText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${White87};
`;

export const Next = styled.TouchableOpacity`
  width: 80px;
  height: 36px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  margin-bottom: 16px;
`;

export const NextText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${White};
  margin-right: 5px;
`;

export const NextIcon = styled.Image`
  width: 14px;
  height: 14px;
`;

export const Pagination = {
  height: 4,
  paddingTop: 0,
  paddingBottom: 0,
  marginTop: 24,
  marginBottom: 24,
};

export const InactiveDot = {
  width: 4,
  height: 4,
  borderRadius: 2,
  backgroundColor: White38,
};

export const Dot = {
  width: 12,
  height: 4,
  borderRadius: 2,
  backgroundColor: Primary,
};

export const Confirm = styled.TouchableOpacity`
  width: ${`${width - 32}px`};
  height: 56px;
  background-color: ${Primary};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 10px rgba(148, 106, 239, 0.38);
  margin-right: 16px;
  margin-left: 16px;
  margin-bottom: 24px;
`;

export const ConfirmText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${White};
`;
