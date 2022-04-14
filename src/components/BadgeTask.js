import React from 'react';
import styled from 'styled-components';

const BadgeStyle = styled.div`
  height: 21px;

  padding: 0 10px;
  border-radius: 8px;
  background-color: #e5ebfe;
  font-size: 9px;
  font-weight: 500;
  color: #032596;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 4px 4px 0;
`;

const BadgeTask = ({ bdgText }) => {
  return <BadgeStyle>{bdgText}</BadgeStyle>;
};

export default BadgeTask;
