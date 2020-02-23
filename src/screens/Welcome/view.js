import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as colors from 'assets/colors';
import * as style from './style';

export default ({onConfirm}) => (
  <LinearGradient colors={colors.Gradient} style={style.Container}>
    <style.Content>
      <style.Title>환영합니다!</style.Title>
      <style.Description>
        김수한무두루미와거북님,
        {'\n'}
        회원가입을 축하합니다.
      </style.Description>
    </style.Content>

    <style.ButtonWrapper>
      <style.Button onPress={() => onConfirm()}>
        <style.ButtonText>확인</style.ButtonText>
      </style.Button>
    </style.ButtonWrapper>
  </LinearGradient>
);
