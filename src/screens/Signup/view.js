import React from 'react';
import {SafeAreaView} from 'react-native';
import {White60} from 'assets/colors';
import * as style from './style';

export default ({
  active,
  nickname,
  recommend,
  onChangeNickname,
  onChangeRecommend,
}) => (
  <style.Container behavior="padding" keyboardVerticalOffset={90}>
    <style.InputWrapper>
      <style.Input
        placeholder="닉네임을 입력하세요(최대 10자)"
        placeholderTextColor={White60}
        value={nickname}
        onChangeText={value => onChangeNickname(value)}
      />
      <style.Input
        placeholder="추천인 코드를 입력 해 주세요."
        placeholderTextColor={White60}
        value={recommend}
        onChangeText={value => onChangeRecommend(value)}
      />
    </style.InputWrapper>

    <style.ButtonWrapper>
      <style.Button disabled={!active} active={active}>
        <style.ButtonText active={active}>확인</style.ButtonText>
      </style.Button>
      <SafeAreaView />
    </style.ButtonWrapper>
  </style.Container>
);
