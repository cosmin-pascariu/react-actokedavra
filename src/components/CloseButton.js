import React from 'react';
import { GrClose } from 'react-icons/gr';
import styled from 'styled-components/';

const CloseButtonStyle = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: #6e7191;
`;

const CloseButton = () => {
  return (
    <CloseButtonStyle>
      <GrClose style={{ margin: '0' }} />
    </CloseButtonStyle>
  );
};

export default CloseButton;
