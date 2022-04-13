import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';
import { BsQuestionCircle } from 'react-icons/bs';

const NotifContainer = styled.div`
  /* margin-left: -30px; */
  /* width: 375px; */
  height: 72px;
  display: flex;
  align-items: center;
  background: ${({ Color }) => (Color ? '#e5fff2' : '#FEFEE5')};
  border-radius: 8px;
  color: ${({ Color }) => (Color ? '#00994D' : '#6A5300')};

  svg {
    height: 22px;
    width: 22px;
  }

  svg.closeBtn {
    margin-left: auto;
    margin-right: 20px;
  }

  p {
    font-size: 15px;
    font-weight: 600;
  }
`;

const Notification = ({ added }) => {
  return (
    <NotifContainer Color={added}>
      {added === true ? (
        <>
          <AiOutlineCheckCircle />
          <p>Actor added succesfully.</p>{' '}
        </>
      ) : (
        <>
          <BsQuestionCircle />
          <p>You can add max. 7 actors.</p>
        </>
      )}
      <IoCloseSharp className='closeBtn' />
    </NotifContainer>
  );
};

export default Notification;
