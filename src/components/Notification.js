import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';

const NotificationContainer = styled.div`
  position: absolute;
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ Color }) => (Color ? '#e5fff2' : '#FEFEE5')};
  border-radius: 8px;
  color: ${({ Color }) => (Color ? '#00994D' : '#6A5300')};

  svg {
    height: 22px;
    width: 22px;
    margin: 0 10px;
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

const Notification = ({
  lightColor,
  icon,
  notificationText,
  isVisible: visible,
}) => {
  const [isVisible, setIsVisibile] = useState(visible);

  useEffect(() => {
    setIsVisibile(visible);
  }, [visible]);

  return (
    isVisible && (
      <NotificationContainer Color={lightColor}>
        {icon}
        <p>{notificationText}</p>
        <IoCloseSharp
          className='closeBtn'
          onClick={() => {
            setIsVisibile(false);
          }}
        />
      </NotificationContainer>
    )
  );
};

export default Notification;
