import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Permission} from 'components';
import * as colors from 'assets/colors';
import * as style from './style';

export default ({modal, onPermission}) => (
  <LinearGradient colors={colors.Gradient} style={style.Container}>
    <style.Title>테스트</style.Title>

    <Permission visible={modal} onPermission={onPermission} />
  </LinearGradient>
);
