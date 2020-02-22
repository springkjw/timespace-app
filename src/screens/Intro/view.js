import React from 'react';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Permission} from 'components';
import * as images from 'assets/images';
import * as colors from 'assets/colors';
import contents from './contents';
import * as style from './style';

const {width} = Dimensions.get('window');

export default ({
  modal,
  onPermission,
  step,
  sliderImage,
  sliderText,
  onSkip,
  goNext,
}) => (
  <LinearGradient colors={colors.Gradient} style={style.Container}>
    <style.Wrapper>
      <Carousel
        ref={sliderImage}
        data={contents}
        renderItem={({item}) => (
          <style.IntroImage source={item.image} resizeMode="contain" />
        )}
        sliderWidth={width}
        itemWidth={width}
        scrollEnabled={false}
        slideStyle={style.SliderImage}
        containerCustomStyle={style.SliderImage}
        contentContainerCustomStyle={style.SliderImage}
      />

      <Pagination
        dotsLength={contents.length}
        containerStyle={style.Pagination}
        activeDotIndex={step}
        dotStyle={style.Dot}
        inactiveDotStyle={style.InactiveDot}
        inactiveDotOpacity={0.5}
        inactiveDotScale={1}
      />

      <Carousel
        ref={sliderText}
        data={contents}
        renderItem={({item}) => (
          <style.Content>
            <style.Title>{item.title}</style.Title>
            <style.Description>{item.description}</style.Description>
          </style.Content>
        )}
        sliderWidth={width}
        itemWidth={width}
        scrollEnabled={false}
        slideStyle={style.SliderContent}
        containerCustomStyle={style.SliderContent}
        contentContainerCustomStyle={style.SliderContent}
      />
    </style.Wrapper>

    <style.Bottom>
      <style.Skip onPress={() => onSkip()}>
        <style.SkipText>SKIP</style.SkipText>
      </style.Skip>

      <style.Next onPress={() => goNext()}>
        <style.NextText>다음</style.NextText>
        <style.NextIcon source={images.ArrowRight} resizeMode="contain" />
      </style.Next>
    </style.Bottom>

    <Permission visible={modal} onPermission={onPermission} />
  </LinearGradient>
);
