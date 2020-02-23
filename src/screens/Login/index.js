import React, {useState} from 'react';
import KakaoLogins from '@react-native-seoul/kakao-login';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
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

  const onGoogle = async () => {
    GoogleSignin.configure();
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View
      onKakao={onKakao}
      onGoogle={onGoogle}
    />
  );
};
