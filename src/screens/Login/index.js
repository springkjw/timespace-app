import React, {useState} from 'react';
import KakaoLogins from '@react-native-seoul/kakao-login';
import View from './view';

export default () => {
  const onKakao = async () => {
    if (KakaoLogins) {
      try {
        const result = await KakaoLogins.login();
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onGoogle = () => {

  };

  return (
    <View
      onKakao={onKakao}
      onGoogle={onGoogle}
    />
  );
};
