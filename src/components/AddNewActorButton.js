import React from 'react';
import styled from 'styled-components';

const AddButton = styled.button`
  height: 56px;
  width: 100%;
  border-radius: 12px;
  background-color: #6308f7;
  font-size: 15px;
  font-weight: 600;
  border: none;
  color: #fff;
  margin: 30px 0;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;
const AddNewActorButton = ({ addNewButtonText }) => {
  return <AddButton>{addNewButtonText}</AddButton>;
};

export default AddNewActorButton;
