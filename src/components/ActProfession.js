import React from 'react';
import styled from 'styled-components';

const Profession = styled.h2`
  color: #4e4b66;
  font-size: 11px;
  font-weight: 300;
`;

const ActProfession = ({ prfText }) => {
  return <Profession>{prfText}</Profession>;
};

export default ActProfession;
