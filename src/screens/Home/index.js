import React, {useState, useEffect} from 'react';
import moment from 'moment';
import View from './view';

export default () => {
  const calculateDday = () => {
    const today = moment();
    const standard = moment('2030-02-01 15:00', 'YYYY-MM-DD HH:mm');

    const diff = moment.duration(standard.diff(today));

    return {
      day: Math.floor(diff.asDays()),
      hour: diff.hours(),
      minute: diff.minutes(),
    };
  };

  const [capsule, setCapsule] = useState(null);
  const [dDay, setDday] = useState(calculateDday());

  useEffect(() => {
    setTimeout(() => {
      setDday(calculateDday());
    }, 1000);

    return () => clearTimeout();
  });

  const onCreateCapsule = () => {
    setCapsule({

    });
  };

  return (
    <View
      capsule={capsule}
      onCreateCapsule={onCreateCapsule}
      dDay={dDay}
    />
  );
};
