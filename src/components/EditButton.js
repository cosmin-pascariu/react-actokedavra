import React from 'react';
import styled from 'styled-components';
import { FiEdit2 } from 'react-icons/fi';

const Button = styled.button`
  width: 142px;
  height: 28px;
  color: #6308f7;
  border: 1px solid #6308f7;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 600;

  span {
    margin: 10px 0;
  }

  svg {
    margin: 10px 4px;
    height: 8px;
    font-weight: 800;
  }
`;

const EditButton = () => {
  return (
    <Button>
      <span>Edit</span>
      <FiEdit2 />
    </Button>
  );
};

export default EditButton;
