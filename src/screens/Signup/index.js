import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import View from './view';

export default () => {
  const [active, setActive] = useState(false);
  const [nickname, setNickname] = useState('');
  const [recommend, setRecommend] = useState('');
  const [nicknameError, setNicknameError] = useState(false);
  const [recommendError, setRecommendError] = useState(false);
  const [message, setMessage] = useState(null);

  const {navigate} = useNavigation();

  const onChangeNickname = value => {
    if (value.length < 11) {
      setNickname(value);
    }

    if (value.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const onChangeRecommend = value => {
    setRecommend(value);
  };

  const onSubmit = () => {
    navigate('Welcome');
  };

  return (
    <View
      active={active}
      nickname={nickname}
      recommend={recommend}
      onChangeNickname={onChangeNickname}
      onChangeRecommend={onChangeRecommend}
      nicknameError={nicknameError}
      recommendError={recommendError}
      message={message}
      onSubmit={onSubmit}
    />
  );
};
