import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const Description = styled.section`
  margin-top: 3px;
  font-weight: 300;
  font-size: 10px;
  color: #6e7191;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ lines }) => (lines ? 0 : 2)};
  -webkit-box-orient: vertical;
`;

const ExtendText = styled.div`
  color: #f4b740;
  font-size: 10px;
  font-weight: 600;
  height: min-content;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    margin: 10px 1px;
  }

  svg {
    margin: 10px 3px;
    transform: rotate(${({ rot }) => (rot ? '90deg' : '-90deg')});
  }
`;

const ActorDescription = ({ actorDescription }) => {
  const [viewDescription, setViewDescription] = useState(false);

  const toggleViewDescription = () => {
    setViewDescription(!viewDescription);
  };

  return (
    <>
      <Description lines={viewDescription}>{actorDescription}</Description>
      <ExtendText rot={viewDescription} onClick={toggleViewDescription}>
        {!viewDescription ? <span>Read more</span> : <span>Read less</span>}
        <MdOutlineArrowBackIosNew />
      </ExtendText>
    </>
  );
};

export default ActorDescription;
