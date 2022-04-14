import React from 'react';
import styled from 'styled-components';

const Name = styled.h1`
  font-size: 13px;
  font-weight: 600;
`;

const ActorName = ({ actorName }) => {
  return <Name>{actorName}</Name>;
};

export default ActorName;
