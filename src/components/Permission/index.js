import React from 'react';
import Modal from 'react-native-modal';
import * as images from 'assets/images';
import * as style from './style';

export default ({visible}) => (
  <Modal isVisible={visible}>
    <style.Container>
      <style.Content>
        <style.Title>
          타임스페이스를 즐기기 위해
          {'\n'}
          다음의 앱 권한을 허용해 주세요.
        </style.Title>

        <style.Item>
          <style.Circle>
            <style.Icon source={images.Marker} />
          </style.Circle>

          <style.PermissionWrapper>
            <style.PermissionTitle>위치 (필수)</style.PermissionTitle>
            <style.PermissionDescription>
              사용자 위치 기반 타임캡슐 작성시
            </style.PermissionDescription>
          </style.PermissionWrapper>
        </style.Item>
      </style.Content>

      <style.Description>
        선택 권한은 서비스 사용 중 필요한 시점에 동의를 받고 있습니다. 허용하지 않으셔도 서비스 이용이 가능합니다.
      </style.Description>

      <style.Confirm>
        <style.ConfirmText>확인</style.ConfirmText>
      </style.Confirm>
    </style.Container>
  </Modal>
);
