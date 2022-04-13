import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const Description = styled.section`
  font-weight: 300;
  width: 160px;
  font-size: 10px;
  color: #6e7191;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ lines }) => (lines ? 0 : 2)};
  -webkit-box-orient: vertical;
`;

const ReadMore = styled.div`
  color: #f4b740;
  font-size: 10px;
  font-weight: 600;
  height: min-content;
  /* width: min-content; */
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

const ActDescription = ({ actDesc }) => {
  const [viewDescription, setViewDescription] = useState(false);

  const toggleViewDesc = () => {
    setViewDescription(!viewDescription);
  };

  return (
    <>
      <Description lines={viewDescription}>{actDesc}</Description>
      <ReadMore rot={viewDescription} onClick={toggleViewDesc}>
        <span>Read more</span>
        <MdOutlineArrowBackIosNew />
      </ReadMore>
    </>
  );
};

export default ActDescription;
