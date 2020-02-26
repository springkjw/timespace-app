import React from 'react';
import * as images from 'assets/images';
import * as style from './style';

export default () => {
  return (
    <style.Container>
      <style.MyCapsule>
        <style.MycapsuleText>내 시동캡슐 현황</style.MycapsuleText>
        <style.MyCapsuleIcon source={images.MyCapsule} resizeMode="contain" />
      </style.MyCapsule>

      <style.Alram>
        <style.AlramIcon source={images.Alram} resizeMode="contain" />
      </style.Alram>
    </style.Container>
  );
};
