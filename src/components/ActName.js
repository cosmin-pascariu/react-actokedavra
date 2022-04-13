import React from 'react';
import styled from 'styled-components';

const Name = styled.h1`
  font-size: 13px;
  font-weight: 600;
`;

const ActName = ({ actName }) => {
  return <Name>{actName}</Name>;
};

export default ActName;
