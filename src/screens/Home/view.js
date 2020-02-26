import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';
import * as images from 'assets/images';
import * as colors from 'assets/colors';
import * as style from './style';

export default ({
  capsule,
  onCreateCapsule,
  dDay,
  quotes = [
    "애플, 마우스,GUI를 갖춘 최초의 개인용 컴퓨터",
    "애플 리사 발표  개인용 "
  ],
}) => (
  <LinearGradient colors={colors.Gradient} style={style.Container}>
    <Header />

    {capsule ? (
      <style.CapsuleWrapper>
        <style.EmptyCapsule source={images.Capsule} resizeMode="contain" />

        <style.Place>{'+여의도공원+'}</style.Place>

        <style.TimeWrapper>
          <style.TimeText>{`${dDay.day} days,`}</style.TimeText>
          <style.TimeText>{`${dDay.hour}:${dDay.minute}`}</style.TimeText>
        </style.TimeWrapper>
      </style.CapsuleWrapper>
    ) : (
      <style.NoCapsuleWrapper>
        <style.NoCapsuleTitle>
          곧 열릴 타임 캡슐이 없습니다.
          {'\n'}
          지금 만들어 볼까요?
        </style.NoCapsuleTitle>

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0.3}}
          colors={['#CB9AA6', 'rgba(148, 106, 239, 0.96)']}
          style={style.Capsule}>
          <style.CreateCapsule onPress={() => onCreateCapsule()}>
            <style.CreateCapsuleText>캡슐 시동하기</style.CreateCapsuleText>
          </style.CreateCapsule>
        </LinearGradient>
      </style.NoCapsuleWrapper>
    )}

    <style.QuoteWrapper>
      <style.QuoteTitle>{`${1983}년의 오늘은 ···`}</style.QuoteTitle>
      <style.QuoteContent>
        {quotes.map((item, index) => (
          <style.Quote key={index}>{item}</style.Quote>
        ))}
      </style.QuoteContent>
    </style.QuoteWrapper>
  </LinearGradient>
);
