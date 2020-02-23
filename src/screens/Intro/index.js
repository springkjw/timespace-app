import React, {useState, useEffect, useRef} from 'react';
import {useObserver} from 'mobx-react';
import {Platform} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {useNavigation} from '@react-navigation/native';
import contents from './contents';
import View from './view';

const permission =
  Platform.OS === 'ios'
    ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

export default () => {
  const [modal, setModal] = useState(false);
  const [step, setStep] = useState(0);
  const sliderImage = useRef(null);
  const sliderText = useRef(null);
  const {navigate} = useNavigation();

  useEffect(() => {
    check(permission).then(result => {
      if (result === RESULTS.UNAVAILABLE || result === RESULTS.DENIED) {
        setModal(true);
      }
    });
  }, []);

  const onPermission = async () => {
    setModal(false);
    await request(permission);
  };

  const onFinish = () => {
    navigate('Login');
  };

  const goNext = () => {
    if (step < contents.length - 1) {
      setStep(step + 1);
      sliderImage.current.snapToNext();
      sliderText.current.snapToNext();
    }
  };

  return (
    <View
      modal={modal}
      onPermission={onPermission}
      step={step}
      sliderImage={sliderImage}
      sliderText={sliderText}
      onFinish={onFinish}
      goNext={goNext}
    />
  );
};
