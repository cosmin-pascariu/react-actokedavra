import React from 'react';
import styled from 'styled-components';

const AddButton = styled.button`
  height: 56px;
  /* width: 100%; */
  width: 335px;
  border-radius: 12px;
  background-color: #6308f7;
  font-size: 15px;
  font-weight: 600;
  border: none;
  color: #fff;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;
const AddNewActButton = () => {
  return <AddButton>Add new actor</AddButton>;
};

export default AddNewActButton;
