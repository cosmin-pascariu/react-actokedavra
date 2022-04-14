import React from 'react';
import styled from 'styled-components';
import { BiLike } from 'react-icons/bi';

const LikesContainer = styled.div`
  display: flex;
  color: #f4b740;
  width: min-content;

  p {
    font-weight: 600;
    font-size: 11px;
    margin-right: 2px;
  }
`;

const LikeButton = ({ nrLikes }) => {
  return (
    <LikesContainer>
      <p>{nrLikes}</p>
      <BiLike />
    </LikesContainer>
  );
};

export default LikeButton;
