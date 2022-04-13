import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Checkbox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee5fe;

  button {
    border: none;
    margin: 0;
    border-radius: 50%;
  }

  svg {
    color: #6308f7;
    margin: 0;
    height: 26px;
    width: 26px;
  }
`;

const CheckedBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee5fe;
`;

const UncheckedBtn = styled.button`
  height: 26px;
  width: 26px;
  background-color: #d9dbe9;
`;

const CardCheckbox = ({ checked }) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Checkbox>
      {isChecked === true ? (
        <CheckedBtn onClick={toggleCheckbox}>
          <BsFillCheckCircleFill />{' '}
        </CheckedBtn>
      ) : (
        <UncheckedBtn onClick={toggleCheckbox} />
      )}
    </Checkbox>
  );
};

export default CardCheckbox;
