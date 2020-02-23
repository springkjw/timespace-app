import React from 'react';
import {useNavigation} from '@react-navigation/native';
import View from './view';

export default () => {
  const {navigate} = useNavigation();

  const onConfirm = () => {
    navigate('BottomTab');
  };

  return (
    <View onConfirm={onConfirm} />
  );
};
