import React from 'react';
import styled from 'styled-components';
import AppTitle from './AppTitle';

const FooterContainer = styled.div`
  width: 100vw;
  height: 56px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 500;
  border-top: 1px solid #dddddd;
  padding: 0 10px;
`;

const Footer = () => {
  let today = new Date();
  let longMonth = today.toLocaleString('en-us', { month: 'long' });
  var date = today.getDate() + ' ' + longMonth + ' ' + today.getFullYear();

  return (
    <FooterContainer>
      <span>{date}</span>
      <AppTitle />
    </FooterContainer>
  );
};

export default Footer;
