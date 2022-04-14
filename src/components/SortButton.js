import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';

const SortBtn = styled.button`
  color: #6308f7;
  border: 2px solid #6308f7;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 56px;
  font-size: 15px;
  font-weight: 600;

  svg {
    transform: scale(1.5);
  }
`;

const SortButton = ({ btnText }) => {
  return (
    <SortBtn>
      {btnText === 'Ascending' ? (
        <AiOutlineArrowUp />
      ) : btnText === 'Descending' ? (
        <AiOutlineArrowDown />
      ) : btnText === 'Delete' ? (
        <BiTrash />
      ) : (
        <></>
      )}
      {btnText}
    </SortBtn>
  );
};

export default SortButton;
