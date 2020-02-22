import React, {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import View from './view';

const permission =
  Platform.OS === 'ios'
    ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

export default () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    check(permission).then(result => {
      console.log(result);
      if (result === RESULTS.UNAVAILABLE || RESULTS.DENIED) {
        setModal(true);
      }
    });
  }, []);

  const onPermission = async () => {
    setModal(false);
    await request(permission);
  };

  return (
    <View
      modal={modal}
      onPermission={onPermission}
    />
  );
};
