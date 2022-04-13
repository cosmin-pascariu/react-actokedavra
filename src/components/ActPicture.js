import React from 'react';
import styled from 'styled-components';
import Leonardo from '../Images/leonardo.jpeg';

const Picture = styled.img`
  border-radius: 10px 10px 0 0;
  width: 162px;
  height: 173px;
  object-fit: cover;
`;

const ActPicture = () => {
  return <Picture src={Leonardo} alt='Leo' />;
};

export default ActPicture;
