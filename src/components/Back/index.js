import React from 'react';
import * as images from 'assets/images';
import * as style from './style';

export default ({onPress}) => (
  <style.Back onPress={() => onPress()}>
    <style.Icon source={images.ArrowLeft} resizeMode="contain" />
  </style.Back>
);
