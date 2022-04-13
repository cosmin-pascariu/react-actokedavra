import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 160px;
  height: 37px;
  border-radius: 10px;
  border: 1px solid #6308f7;
  font-weight: 500;
  font-size: 14px;
  background-color: #eee5fe;
`;

const Button = ({ btnText }) => {
  return <ButtonStyle>{btnText}</ButtonStyle>;
};

export default Button;
