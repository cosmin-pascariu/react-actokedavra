import React from 'react';
import styled from 'styled-components';

const Picture = styled.img`
  border-radius: 10px 10px 0 0;
  width: 162px;
  height: 173px;
  object-fit: cover;
  margin: 0 auto;
`;

const ActorPicture = ({ picture }) => {
  return <Picture src={picture} alt='picture' />;
};

export default ActorPicture;
