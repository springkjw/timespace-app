import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as images from 'assets/images';
import * as colors from 'assets/colors';
import * as style from './style';

export default ({onKakao, onGoogle}) => (
  <LinearGradient colors={colors.Gradient} style={style.sheet.Container}>
    <style.Wrapper>
      <style.Logo source={images.LogoLogin} resizeMode="contain" />

      <style.ButtonWrapper>
        <style.Kakao onPress={() => onKakao()}>
          <style.ButtonIcon source={images.Kakao} resizeMode="contain" />
          <style.ButtonText>카카오톡으로 시작하기</style.ButtonText>
        </style.Kakao>

        <style.Google onPress={() => onGoogle()}>
          <style.ButtonIcon source={images.Google} resizeMode="contain" />
          <style.ButtonText>구글 계정으로 시작하기</style.ButtonText>
        </style.Google>
      </style.ButtonWrapper>
    </style.Wrapper>
  </LinearGradient>
);
